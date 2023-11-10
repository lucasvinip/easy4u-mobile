import React, { useEffect, useMemo, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    RefreshControl
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import UseFonts from '../hooks/useFonts';
import OrderCard from '../StyleAndComponentsScreens/Orders/components/OrderCard/OrderCard'
import { performApi } from '../utils/api';
import { styles } from '../StyleAndComponentsScreens/Orders/style';
import theme from '../styles/theme';
import SkeletonOrders from '../components/Skeleton/SkeletonOrders';

type Cart = {
    status: string;
    products: Product[];
    total: number;
}

type Product = {
    product: {
        name: string;
        photo: string;
        description: string;
        price: number;
        productType: string;
    },
    qntd: number;
    total_value: number;
}

type CartResponseProps = {
    id: number;
    cart: Cart;
    createdAt: string;
}

const Orders = () => {
    const [refresh, setRefresh] = useState<boolean>(false);
    const [orders, setOrders] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [token, setToken] = useState<string | null>("")

    const memoizedOrders = useMemo(() => {
        return orders.map((order: CartResponseProps, index: number) => {
            const getDate = order.createdAt.split("T")[0];
            const [y, m, d] = getDate.split("-");
            const date = `${d}/${m}/${y}`;
            return (
                <OrderCard
                    id={order.id}
                    key={index}
                    photo={order.cart?.products[0]?.product?.photo}
                    date={date}
                    status={order.cart.status}
                    onPress={() => handleOrderClick(order.id.toString())}
                />
            );
        });
    }, [orders]);

    const fetchData = async () => {
        const storedToken = await AsyncStorage.getItem("token");
        setToken(storedToken);
        if (!storedToken) {
            router.push("/");
        } else {
            const getOrdersFromUser = await performApi.getData("carts-by-user", storedToken);
            if (Array.isArray(getOrdersFromUser)) {
                setOrders(getOrdersFromUser.slice().reverse());
            }
            setIsLoading(false);
        }
    };

    const handleOrderClick = async (orderId: string) => {
        await AsyncStorage.setItem("orderId", orderId);
        router.push('/FullOrder');
    };

    const pullMeDown = async () => {
        setRefresh(true);
        await fetchData();
        setRefresh(false);
    };

    useEffect(() => {
        fetchData();
    }, [token]);

    return (
        <UseFonts>
            <StatusBar
                style='dark'
                translucent backgroundColor={theme.COLORS.GrayRgba255249243041}
            />
            <SafeAreaView style={{ backgroundColor: theme.COLORS.Whiteffffff }}>
                <View style={styles.Screen}>
                    <View style={styles.Container}>
                        <ScrollView style={{ marginTop: 42, height: '100%' }}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refresh}
                                    onRefresh={pullMeDown}
                                    tintColor={'orange'} />}>
                            {isLoading ?
                                <>
                                    <View style={{ gap: 20 }}>
                                        <SkeletonOrders/>
                                        <SkeletonOrders/>
                                        <SkeletonOrders/>
                                        <SkeletonOrders/>
                                    </View>
                                </>
                                : (
                                    orders.length > 0 ? (
                                        memoizedOrders
                                    ) : (
                                        <View>
                                            <Text>Você não tem nenhum pedido ainda! Realize já</Text>
                                        </View>
                                    )
                                )
                            }
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    )
};

export default Orders;
