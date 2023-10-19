import React, { useEffect, useState } from 'react';
import {
    Image,
    View,
    Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppTexts } from '../assets/strings';
import { styles } from '../StyleAndComponentsScreens/Checkout/style';
import Button from '../components/Button/Button';
import theme from '../styles/theme';
import ButtonCredit from '../StyleAndComponentsScreens/Checkout/components/ButtonCredit/ButtonCredit';
import ContainerTotal from '../StyleAndComponentsScreens/Checkout/components/ContainerTotal/ContainerTotal';
import { performApi } from '../utils/api';
import ContainerFullOrder from '../components/FullOrders/CardFullOrders';

type Details = {
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
    ProductsByCart: Product[] | undefined;
    created_at: Date;
    status: string;
    total: number;
}

const FullOrder = () => {
    const [idOrder, setIdOrder] = useState<string | null>("");
    const [token, setToken] = useState<string | null>("");
    const [order, setOrder] = useState<ProductByCartResponse | null>(null);

    const getIdFromLocalStorage = async () => {
        const orderId = await AsyncStorage.getItem("orderId");
        const getToken = await AsyncStorage.getItem("token");
        setToken(getToken);
        setIdOrder(orderId);
    }

    const getProductInfo = async (orderId: string) => {
        try {
            const data = await performApi.getData(`carts-by-user/${orderId}`, token);
            setOrder(data);
        } catch (error) {
            console.error("Error fetching product information:", error);
        }
    }

    useEffect(() => {
        getIdFromLocalStorage();

        if (idOrder) {
            getProductInfo(idOrder);
        }
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
                        <View style={{ alignItems: 'center' }}>
                            {order?.ProductsByCart ? (
                                <ContainerFullOrder
                                    ProductsByCart={order.ProductsByCart}
                                    created_at={order.created_at}
                                    id={order.id}
                                    status={order.status}
                                    total={order.total} />
                            ) : (
                                <Text>No items in the cart</Text>
                            )}
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
                            />
                        )}

                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default FullOrder;
