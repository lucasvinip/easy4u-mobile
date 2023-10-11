import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../StyleAndComponentsScreens/Orders/style';
import theme from '../styles/theme';
import { AppTexts } from '../assets/strings';
import UseFonts from '../styles/useFonts';
import Button from '../components/Button/Button';
import { OrderCard } from '../StyleAndComponentsScreens/Orders/components/OrderCard/OrderCard'
import { performApi } from '../utils/api';
import { useEffect } from 'react';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

interface Cart {
    status: string;
    products: Product[];
    total: number;
    createdAt: string;
}

interface Product {
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

interface CartResponseProps {
    id: number;
    cart: Cart;
}


const Orders = () => {
    
    const [token, setToken] = useState<string>("");
    const [orders, setOrders] = useState<any>([])
    const [photo, setPhoto] = useState<string>("")

    useEffect(() => {
        const fetchData = async () => {
          const storedToken = await AsyncStorage.getItem("token");
    
          if (!storedToken) {
            router.push("/");
          } else {
            setToken(storedToken);
            try {
              const getOrdersFromUser  = await performApi.getData("carts-by-user", storedToken);
              setOrders(getOrdersFromUser);
              handlePhotoFromProduct()
            } catch (error) {
              console.error("Erro ao buscar favoritos:", error);
            }
          }
        };
        fetchData();
    }, []);

    const handlePhotoFromProduct = () => {
        orders.map(({product}: Product) => {
             setPhoto(product.photo)
        })
    }


    return (

        <UseFonts>
            <StatusBar
                style='dark'
                translucent backgroundColor={theme.COLORS.GrayRgba255249243041}
            />
            <SafeAreaView style={{ backgroundColor: theme.COLORS.Whiteffffff }}>
                <View style={styles.Screen}>
                    <View style={styles.Container}>
                        <View style={{ marginTop: 42 }}>
                            {orders.map((order: CartResponseProps) => {
                                <OrderCard 
                                id={order.id} 
                                date={order.cart.createdAt} 
                                photo={photo} 
                                status={order.cart.status}/>
                            })}
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    )
};

export default Orders;