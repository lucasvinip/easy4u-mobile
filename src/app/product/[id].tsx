import React, { useEffect, useState } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { DefaultTheme } from 'react-native-paper';

import { styles, shadowStyle } from '../../StyleAndComponentsScreens/Product/style';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';
import ButtonMoreOrLess from '../../components/ButtonMoreOrLess/ButtonMoreOrLess';
import ButtonAddCart from '../../StyleAndComponentsScreens/Product/components/ButtonCart/ButtonAddCart';
import UseFonts from '../../styles/useFonts';
import { router, useGlobalSearchParams } from 'expo-router';
import CardMain from '../../StyleAndComponentsScreens/Product/components/CardMain/CardMain';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { performApi } from '../../utils/api';

const Product = () => {
    const { id } = useGlobalSearchParams();
    const [productsName, setProductsName] = useState<String | null>(null)
    const [productsPrice, setProductsPrice] = useState<String | null>(null)
    const [productsPhoto, setProductsPhoto] = useState<any>(null)
    const [urlApi, setUrlApi] = useState<String>()

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
        const apiDataProducts = await url(`products/${id}`);

        if (!apiDataProducts)
            Alert.alert("Erro!");
        else {
            setProductsName(null);
            setProductsPrice(null);
            setProductsPhoto(null);
            const productName = apiDataProducts.name;
            const productPrice = apiDataProducts.price;
            const productsPhoto = apiDataProducts.photo;
            setProductsName(productName);
            setProductsPrice(productPrice);
            setProductsPhoto(productsPhoto);
        }
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


