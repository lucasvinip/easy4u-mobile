import React, { useEffect, useState } from 'react';
import {
    Image,
    View,
    Text,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppTexts } from '../assets/strings';
import { styles } from '../StyleAndComponentsScreens/Checkout/style';
import Button from '../components/Button/Button';
import theme from '../styles/theme';
import { performApi } from '../utils/api';
import ContainerFullOrder from '../StyleAndComponentsScreens/FullOrders/components/ContainerFullOrder/ContainerFullOrder';
import CustomQRCode from '../components/QRCode/QRCode';
import ModalPoup from '../components/ModalPoup/Modal';
import NameAndTotal from '../StyleAndComponentsScreens/Checkout/components/NameAndTotal/NameAndTotal';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, orderAgain } from '../redux/features/shoppingCart/shoppingCartSlice';
import { RootState } from '../redux/store';

type Details = {
    id: number
    name: string;
    photo: string;
    description: string;
    price: number;
    productType: string;
}

type Product = {
    product: Details,
    qntd: number;
    total_value: number;
}

type ProductByCartResponse = {
    id: number;
    products: Product[];
    created_at: Date;
    status: string;
    total: number;
}

const FullOrder = () => {
    const [idOrder, setIdOrder] = useState<string | null>("");
    const [token, setToken] = useState<string | null>("");
    const [order, setOrder] = useState<ProductByCartResponse>();
    const [isModalVisible, setModalVisible] = useState(false);

    const quantityItems = useSelector((state: RootState) => state.cart.qty)

    const priceNew = order?.total ?? 0
    const formattedTotal = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(priceNew)

    const dispatch = useDispatch()

    const handleOrderAgain = () => {
        const items = order?.products;

        if (items && items.length > 0) {
            const newItem: any = items.map((product: Product) => {
                const newQuantity = quantityItems;
                const item = {
                    id: product.product.id,
                    name: product.product.name,
                    photo: product.product.photo,
                    price: product.product.price,
                    quantity: newQuantity,
                };

                return item;
            });
        }
    };

    const getIdFromLocalStorage = async () => {
        const orderId = await AsyncStorage.getItem("orderId");
        const getToken = await AsyncStorage.getItem("token");
        setToken(getToken);
        setIdOrder(orderId);
    }

    const getProductInfo = async (orderId: string) => {
        try {
            const data = await performApi.getData(`carts-by-user/${orderId}`, token)
            setOrder(data);
        } catch (error) {
            console.error("Error fetching product information:", error);
        }
    }

    useEffect(() => {
        getIdFromLocalStorage();

        if (idOrder) {
            getProductInfo(idOrder);
        };

    }, [idOrder, token]);

    return (
        <SafeAreaView>
            <View style={styles.Screen}>
                <View style={styles.Container}>
                    <View style={styles.ContainerHeader}>
                        <Image source={require('../assets/img/easy.png')} style={{ width: 191, height: 65 }} />
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
                                        <ScrollView contentContainerStyle={styles.ContainerCardMain} showsVerticalScrollIndicator={false}
                                        >
                                            <View style={styles.CardMain}>
                                                {order?.products ? (
                                                    <ContainerFullOrder
                                                        productsByCart={order.products}
                                                        created_at={order.created_at}
                                                        id={order.id}
                                                        status={order.status}
                                                    />
                                                ) : (
                                                    <Text>Não há items no carrinho!</Text>
                                                )}
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
                        {order?.status === 'ACTIVE' ? (
                            <Button
                                text={AppTexts.Check_QRcode}
                                fontFamily={theme.FONTS.Popp700}
                                background={theme.COLORS.OrangeFF6C44}
                                width={260}
                                height={40}
                                borderRadius={48}
                                fontSize={14}
                                onPress={() => setModalVisible(true)}
                            />
                        ) : (
                            <Button
                                text={AppTexts.Order_Again}
                                fontFamily={theme.FONTS.Popp700}
                                background={theme.COLORS.OrangeFF6C44}
                                width={260}
                                height={40}
                                borderRadius={48}
                                fontSize={14}
                                onPress={handleOrderAgain}
                            />
                        )}
                    </View>
                    {isModalVisible && (
                        <ModalPoup visible={isModalVisible}>
                            <CustomQRCode value={order?.id} onClose={() => setModalVisible(false)} />
                        </ModalPoup>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default FullOrder;
