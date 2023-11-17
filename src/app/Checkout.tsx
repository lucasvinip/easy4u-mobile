import React, { useEffect, useState } from 'react';
import {
    Image,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppTexts } from '../assets/strings';


import { styles } from '../StyleAndComponentsScreens/Checkout/style'
import Button from '../components/Button/Button';
import theme from '../styles/theme';
import NameAndTotal from '../StyleAndComponentsScreens/Checkout/components/NameAndTotal/NameAndTotal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import PaymentMethod from '../StyleAndComponentsScreens/Checkout/components/PaymentMethod/PaymentMethodCredit';
import { performApi } from '../utils/api';
import ModalPoup from '../components/ModalPoup/Modal';

interface CheckoutProps {
    id: number,
    name: string,
    price: number,
}

const Checkout = () => {
    const [products, setProducts] = useState<CheckoutProps[]>([])
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
    const [visible, setVisible] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const total = useSelector((state: RootState) => state.cart.total);


    const formattedTotal = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(total);

    const getProductsItems = async () => {

        const items: any = await AsyncStorage.getItem("items")
        const getProduct = JSON.parse(items)
        return getProduct
    };

    const getSelectedPaymentMethod = async () => {
        const token = await AsyncStorage.getItem("token");
        const items: any = await AsyncStorage.getItem("items")
        setVisible(true);
        const productId = products.map(product => product.id)


        // if(selectedPaymentMethod === 'Créditos'){
        //     const order = await performApi.sendDataToken("carts-by-user", "POST", token, {})
            
        // }
    }

    useEffect(() => {
        const fetchData = async () => {
            const itemsProducts = await getProductsItems();

            if (itemsProducts) {
                const productInfo = itemsProducts.map((item: CheckoutProps) => {
                    return item;
                });
                setProducts(prevProducts => [...prevProducts, ...productInfo]);

            }
        }
        fetchData()
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
                                <PaymentMethod method="Créditos" onSelect={() => setSelectedPaymentMethod("Créditos")} />
                                <PaymentMethod method="Pix" onSelect={() => setSelectedPaymentMethod("Pix")} />
                            </View>
                        </View>
                        <Button
                            text={"PAGAR"}
                            fontFamily={theme.FONTS.Popp700}
                            background={theme.COLORS.OrangeFF6C44}
                            width={260}
                            height={40}
                            borderRadius={48}
                            fontSize={14}
                            onPress={() => { getSelectedPaymentMethod(); setLoading(true) }}
                        />
                        {visible && (
                            <ModalPoup visible={visible}>
                                <View style={{ alignItems: "center", height: '40%' }}>
                                    <View style={styles.HeaderModal}>
                                        <TouchableOpacity onPress={() => setVisible(false)}>
                                            <Image
                                                source={require("../assets/img/x.png")}
                                                style={{ height: 30, width: 30 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.VerifyBalance}>{AppTexts.Verify_Balance}</Text>
                                    {loading && (
                                        <View style={{marginTop: 60}}>
                                            <ActivityIndicator size={75 || "large"} color={theme.COLORS.OrangeFF6C44}/>
                                        </View>
                                    )}
                                </View>
                            </ModalPoup>
                        )}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};



export default Checkout;


