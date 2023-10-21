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
import { router, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { styles, shadowStyle } from '../../StyleAndComponentsScreens/Product/style';
import UseFonts from '../../styles/useFonts';
import CardMain from '../../StyleAndComponentsScreens/Product/components/CardMain/CardMain';
import { performApi } from '../../utils/api';
import ButtonFavoriteHeart from '../../StyleAndComponentsScreens/Product/components/ButtonFavoriteProduct/ButtonFavoriteProduct';
import ButtonFavoriteProduct from '../../StyleAndComponentsScreens/Product/components/ButtonFavoriteProduct/ButtonFavoriteProduct';

interface CardProductProps {
    name: string,
    price: number,
    photo: string,
    description: string
}

const Product = () => {
    const [dataProduct, setDataProduct] = useState<CardProductProps | null>(null)

    const { id } = useLocalSearchParams()

    const getUrl = async (path: string) => {
        const token = await AsyncStorage.getItem("token")

        if (!token) {
            router.push('/');
        } else {
            try {
                const data = await performApi.getData(path, token)
                return data
            } catch (error) {
                alert("data not get:" + error)
            }
        }

    }
    const handleCardProducts = async () => {
        const apiDataProducts = await getUrl(`products/${id}`)

        if (!apiDataProducts)
            alert("erro!")
        else {
            try {
                const data = await apiDataProducts
                setDataProduct(data)
            } catch (error) {
                alert("data not get:" + error)
            }
        }
    }

    useEffect(() => {
        handleCardProducts()
    }, []);

    return (
        <UseFonts>
            <StatusBar
                style='dark'
                backgroundColor='transparent'
            />
            <SafeAreaView>
                <View style={styles.Background}>
                    <Image source={{ uri: String(dataProduct?.photo) }} style={styles.Img} />
                    <View style={styles.Backgroung2}>
                        <View style={styles.Screen}>
                            <View style={styles.Container}>
                                <View style={styles.ContainerFavorite}>
                                    <ButtonFavoriteProduct idProduct={id} />
                                </View>
                                <View style={styles.ContainerMain}>
                                    <CardMain name={dataProduct?.name} price={dataProduct?.price} description={dataProduct?.description} />
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


