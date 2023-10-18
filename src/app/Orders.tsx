import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../StyleAndComponentsScreens/Orders/style';
import theme from '../styles/theme';
import UseFonts from '../styles/useFonts';
import OrderCard from '../StyleAndComponentsScreens/Orders/components/OrderCard/OrderCard'
import { performApi } from '../utils/api';
import { useEffect } from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, useRouter } from 'expo-router';


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

    const [token, setToken] = useState<string>("");
    const [orders, setOrders] = useState<any>([])
    const router = useRouter();



    useEffect(() => {
        const fetchData = async () => {
            const storedToken = await AsyncStorage.getItem("token");

            if (!storedToken) {
                router.push("/");
            } else {
                setToken(storedToken);
                try {
                    const getOrdersFromUser = await performApi.getData("carts-by-user", storedToken);
                    setOrders(getOrdersFromUser)
                } catch (error) {
                    console.error("Erro ao buscar favoritos:", error);
                }
            }
        };
        fetchData();
    }, []);

    return (
        <UseFonts>
            <StatusBar
                style='dark'
                translucent backgroundColor={theme.COLORS.GrayRgba255249243041}
            />
            <SafeAreaView style={{ backgroundColor: theme.COLORS.Whiteffffff }}>
                <View style={styles.Screen}>
                    <View style={styles.Container}>
                        <View style={{ marginTop: 42, display: "flex", flexDirection: "column-reverse" }}>
                            {orders.length > 0 ? (
                                orders.map((order: CartResponseProps, index: number) => {
                                    const getDate = order.createdAt.split("T")[0]
                                    const [y, m, d] = getDate.split("-")
                                    const date = `${d}/${m}/${y}`

                                    return (
                                        <Link href={{
                                            pathname: "/order/[id]",
                                            params: { id: order.id }
                                        }}>
                                            <OrderCard
                                                id={order.id}
                                                key={index}
                                                photo={order.cart?.products[0]?.product?.photo}
                                                date={date}
                                                status={order.cart.status}
                                            />
                                        </Link>
                                    );
                                })
                            ) : (
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text
                                        style={{ textAlign: "center", color: "black", fontSize: 20 }}>
                                        Você não tem nenhum item adicionado aos favoritos!
                                    </Text>
                                </View>
                            )}
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    )
};

export default Orders;