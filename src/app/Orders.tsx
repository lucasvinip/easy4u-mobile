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
import LottieView from 'lottie-react-native';

import UseFonts from '../hooks/useFonts';
import OrderCard from '../StyleAndComponentsScreens/Orders/components/OrderCard/OrderCard'
import { performApi } from '../utils/api';
import { styles } from '../StyleAndComponentsScreens/Orders/style';
import theme from '../styles/theme';
import SkeletonOrdersAble from '../components/Skeleton/SkeletonOrders/SkeletonOrdersAble';
import { AppTexts } from '../assets/strings';
import SkeletonOrdersDisable from '../components/Skeleton/SkeletonOrders/SkeletonOrdersDisable';

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

const Orders: React.FC = () => {
    const [refresh, setRefresh] = useState<boolean>(false);
    const [orders, setOrders] = useState<CartResponseProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [token, setToken] = useState<string | null>("")

    const memoizedOrders = useMemo(() => {
        return orders.map((order: CartResponseProps) => {
            if (order.cart.products.length > 0) {
                const getDate = order.createdAt.split("T")[0];
                const [y, m, d] = getDate.split("-");
                const date = `${d}/${m}/${y}`;

                return (
                    <OrderCard
                        id={order.id}
                        key={`order_${order.id}`}
                        photo={order.cart?.products[0]?.product?.photo}
                        date={date}
                        status={order.cart.status}
                        onPress={() => handleOrderClick(order.id.toString())}
                    />
                );
            } else {
                return null;
            }
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
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refresh}
                                    onRefresh={pullMeDown}
                                    tintColor={'orange'} />}>
                            {isLoading ?
                                <>
                                    <View>
                                        <SkeletonOrdersAble />
                                        <SkeletonOrdersAble />
                                        <SkeletonOrdersAble />
                                        <SkeletonOrdersDisable />
                                        <SkeletonOrdersDisable />
                                        <SkeletonOrdersDisable />
                                    </View>
                                </>
                                : (
                                    orders.length > 0 ? (
                                        memoizedOrders
                                    ) : (
                                        <View style={{ alignItems: 'center' }}>
                                            <LottieView
                                                style={{ height: '80%', alignItems: 'center' }}
                                                source={require('../assets/lottie/Animation1701904243006.json')}
                                            />
                                            <Text style={{ fontSize: 15, textAlign: 'center', fontFamily: theme.FONTS.Raleway700 }}>
                                                {AppTexts.Oops_Orders_Empyt}
                                            </Text>
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
