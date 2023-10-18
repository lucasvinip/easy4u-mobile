import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';

import { styles, shadowStyle } from '../StyleAndComponentsScreens/Product/style';
import UseFonts from '../styles/useFonts';
import { router, useGlobalSearchParams } from 'expo-router';
import CardMain from '../StyleAndComponentsScreens/Product/components/CardMain/CardMain';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { performApi } from '../utils/api';
import theme from '../styles/theme';

interface ProductProps {
    route: any;
  }

const Product = ({ route}: ProductProps) => {
    const id = route.params && route.params.id ? route.params.id : 0

    const [productsName, setProductsName] = useState<String | null>(null)
    const [productsPrice, setProductsPrice] = useState<String | null>(null)
    const [productsPhoto, setProductsPhoto] = useState<any>(null)
    const [idApi, setIdApi] = useState<any>()

    const url = async (path: string) => {
        const token = await AsyncStorage.getItem("token")

        if (!token)
            router.push('/')
        else {
            const data = await performApi.getData(path, token)
            return data
        }

    }

    const handleCardProducts = async () => {
        if (id) {
            setIdApi(id)
            const apiDataProducts = await url(`products/${id}`);
            console.log(apiDataProducts);
            
            if (!apiDataProducts) {
                Alert.alert("Erro!");
            } else {
                const productName = apiDataProducts.name;
                const productPrice = apiDataProducts.price;
                const productsPhoto = apiDataProducts.photo;
                setProductsName(productName);
                setProductsPrice(productPrice);
                setProductsPhoto(productsPhoto);
            }
        }

    }

    const handleResetIdChangePage = async () => {
        setIdApi(0)
        console.log(id);
        router.replace('/(drawer)/AllProducts')
    }

    useEffect(() => {
        handleCardProducts()
    }, [])

    return (
        <UseFonts>
            <StatusBar
                style='dark'
                backgroundColor='transparent'
            />
            <SafeAreaView>
                <View style={styles.Background}>
                    <Image source={{ uri: String(productsPhoto) }} style={styles.Img} />
                    <View style={{ height: '9%', width: '15%', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <TouchableOpacity style={{ width: '40%' }} onPress={handleResetIdChangePage}>
                            <AntDesign name='arrowleft' style={{ fontSize: 22, color: theme.COLORS.Gray5E5959 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Backgroung2}>
                        <View style={styles.Screen}>
                            <View style={styles.Container}>
                                <View style={styles.ContainerIcon}>
                                    <TouchableOpacity style={styles.ContainerCircle}>
                                        <View style={[styles.Circle, , shadowStyle]}>
                                            <AntDesign name='heart' style={styles.Icon} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ContainerMain}>
                                    <CardMain name={productsName} price={productsPrice} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    );
};

export default Product;


