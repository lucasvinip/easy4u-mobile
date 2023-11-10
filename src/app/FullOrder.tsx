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
import { performApi } from '../utils/api';
import ContainerFullOrder from '../components/FullOrders/CardFullOrders';
import CustomQRCode from '../components/QRCode/QRCode';
import ModalPoup from '../components/ModalPoup/Modal';

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
            console.log(JSON.stringify(order))
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
                        <View style={{ alignItems: 'center' }}>
                            {order?.products ? (
                                <ContainerFullOrder
                                    productsByCart={order.products}
                                    created_at={order.created_at}
                                    id={order.id}
                                    status={order.status}
                                    total={order.total} />
                            ) : (
                                <Text>Não há items no carrinho!</Text>
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
                            />
                        )}
                    </View>
                    {isModalVisible && (
                    <ModalPoup visible={isModalVisible}>
                        <CustomQRCode value={order?.id} onClose={() => setModalVisible(false)}/>
                    </ModalPoup>
                )}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default FullOrder;
