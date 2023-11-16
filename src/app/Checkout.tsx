import React, { useEffect, useState } from 'react';
import {
    Image,
    View,
    Text,
    ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppTexts } from '../assets/strings';


import { styles } from '../StyleAndComponentsScreens/Checkout/style'
import Button from '../components/Button/Button';
import theme from '../styles/theme';
import PaymentMethodCredit from '../StyleAndComponentsScreens/Checkout/components/PaymentMethod/PaymentMethodCredit';
import NameAndTotal from '../StyleAndComponentsScreens/Checkout/components/NameAndTotal/NameAndTotal';
import PaymentMethodPix from '../StyleAndComponentsScreens/Checkout/components/PaymentMethod/PaymentMethodPix';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface CheckoutProps {
    id: number,
    name: string,
    price: number,
}

const Checkout = () => {
    const [products, setProducts] = useState<CheckoutProps[]>([])

    const total = useSelector((state: RootState) => state.cart.total)
    const formattedTotal = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(total);

    const getProductsItems = async () => {
        const items: any = await AsyncStorage.getItem("items")
        const getProduct = JSON.parse(items)

        console.log('n n ' + getProduct);
        console.log("a a a b b " + items);


        return getProduct
    }
    const fetchData = async () => {
        const itemsProducts = await getProductsItems();

        if (itemsProducts) {
            const productInfo = itemsProducts.map((item: CheckoutProps) => {
                return item;
            });
            setProducts(prevProducts => [...prevProducts, ...productInfo]);

        }
    }

    useEffect(() => {
        const fetchDataAsync = async () => {
            await fetchData();
        };

        fetchDataAsync()

    }, [])

    return (
        <SafeAreaView>
            <View style={styles.Screen}>
                <View style={styles.Container}>
                    <View style={styles.ContainerHeader}>
                        <Image
                            source={require('../assets/img/easy.png')}
                            style={{ width: 191, height: 65 }}
                        />
                    </View>
                    <View style={styles.ContainerMain}>
                        <Text style={styles.TitleMain}>{AppTexts.Easy_you}</Text>
                        <View style={{ alignItems: "center" }}>
                            <View style={styles.ContainerCard}>
                                <View style={styles.Card}>
                                    <View style={styles.CardContent}>
                                        <View style={styles.ContainerContent}>
                                            <View style={styles.Content}>
                                                <Text style={styles.TitleName}>{AppTexts.Name_Product}</Text>
                                                <View style={styles.ContainerSeparator}>
                                                    <View style={styles.LineSeparator} />
                                                </View>
                                                <Text style={styles.TitleTotal}>{AppTexts.Total}</Text>
                                            </View>
                                        </View>
                                        <ScrollView contentContainerStyle={styles.ContainerCardMain} showsVerticalScrollIndicator={false}>
                                            <View style={styles.CardMain}>
                                                {products.map((item: CheckoutProps, index: number) => (
                                                    <NameAndTotal
                                                        key={index}
                                                        price={item.price}
                                                        name={item.name}
                                                        id={item.id}
                                                    />
                                                ))}
                                            </View>
                                        </ScrollView>
                                    </View>
                                </View>
                                <View style={styles.CardFooter}>
                                    <View style={styles.ContentFooter}>
                                        <View style={styles.TitlesFooter}>
                                            <Text style={styles.TitleCardFooter}>
                                                {AppTexts.Total}
                                            </Text>
                                            <Text style={styles.TitleCardFooter}>
                                                {formattedTotal}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ContainerFooter}>
                        <View style={styles.ContainerPayment}>
                            <Text style={styles.TitlePayment}>
                                {AppTexts.Choose_Payment_Method}
                            </Text>
                            <View style={styles.Payment}>
                                <PaymentMethodCredit />
                                <PaymentMethodPix />
                            </View>
                        </View>
                        <Button
                            text={AppTexts.Pay}
                            fontFamily={theme.FONTS.Popp700}
                            background={theme.COLORS.OrangeFF6C44}
                            width={260}
                            height={40}
                            borderRadius={48}
                            fontSize={14}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Checkout;


