import React from 'react';
import {
    View,
    Text,
    ScrollView,
    RefreshControl
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

import UseFonts from '../hooks/useFonts';
import OrderCard from '../StyleAndComponentsScreens/Orders/components/OrderCard/OrderCard'
import { performApi } from '../utils/api';
import { styles } from '../StyleAndComponentsScreens/Orders/style';
import theme from '../styles/theme';
import { useToken } from '../hooks/useToken';

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
    const token = useToken()
    const [refresh, setRefresh] = useState<boolean>(false);
    const [orders, setOrders] = useState<any>([])

    const handleOrderClick = async (orderId: string) => {
        await AsyncStorage.setItem("orderId", orderId)
        router.push('/FullOrder')
    };

    const fetchData = async () => {
        if (!token) {
            router.push("/");
        } else {
            try {
                const getOrdersFromUser = await performApi.getData("carts-by-user", token);
                setOrders(getOrdersFromUser.reverse())
            } catch (error) {
                console.error("Erro ao buscar favoritos:", error);
            }
        }
    };

    useEffect(() => {        
        fetchData();
    }, []);

    const pullMeDown = async () => {
        setRefresh(true);
    
        try {
          await fetchData(); 
          setRefresh(false);
        } catch (error) {
          console.error("Erro ao atualizar os dados:", error);
          setRefresh(false);
        }
      };

    return (
        <UseFonts>
            <StatusBar
                style='dark'
                translucent backgroundColor={theme.COLORS.GrayRgba255249243041}
            />
            <SafeAreaView style={{ backgroundColor: theme.COLORS.Whiteffffff }}>
                <View style={styles.Screen}>
                    <View style={styles.Container}>
                        <ScrollView style={{ marginTop: 42, height:'100%'}}  
                        refreshControl={
                            <RefreshControl 
                            refreshing={refresh}
                            onRefresh={() => pullMeDown()}
                            size={100}
                            tintColor={'black'}/>}>
                            {orders.length > 0 ? (
                                orders.map((order: CartResponseProps, index: number) => {
                                    const getDate = order.createdAt.split("T")[0]
                                    const [y, m, d] = getDate.split("-")
                                    const date = `${d}/${m}/${y}`
                                    return (
                                        <OrderCard
                                            id={order.id}
                                            key={index}
                                            photo={order.cart?.products[0]?.product?.photo}
                                            date={date}
                                            status={order.cart.status} 
                                            onPress={ () => handleOrderClick(order.id.toString())}/>
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
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    )
};

export default Orders;