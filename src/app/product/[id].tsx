import React, { useEffect, useState } from 'react';
import {View, Image, TouchableOpacity, SafeAreaView, Alert} from 'react-native';
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

type CardProductProps = {
    name: string,
    price: number,
    photo: string,
    description: string
}

type Product = {
    id: number;
    name: string;
    photo: string;
    price: number;
};

type Favorite = {
    product: Product;
};


const Product = () => {
    const [dataProduct, setDataProduct] = useState<CardProductProps | null>(null)
    const [isFavorite, setIsFavorite] = useState<any>()

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

    };

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
    };

    const handleFavoriteItem = async () => {
        const favorites = await getUrl('favorites');
    
        if (favorites && favorites.length > 0) {
            const productIds = favorites.map((favorite: Favorite) => favorite.product.id);
            setIsFavorite(productIds);
            console.log(productIds);
        }

    }

    // const validateProduct = async () => {
    //     try {
    //         if (isFavorite) {
    //            console.log("oi")
    //             const productIdsInFavorites = isFavorite.products.map((favorite) => favorite.product.id);
    
    //             if (productIdsInFavorites.includes(Number(id))) {
    //                 console.log("Este produto está nos favoritos.");
    //             } else {
    //                 console.log("Este produto NÃO está nos favoritos.");
    //             }
    //         }
    //     } catch (error) {
    //         console.error("Erro ao validar o produto nos favoritos: " + error);
    //     }
    // }
    


    useEffect(() => {
        handleCardProducts()
        handleFavoriteItem()
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
                                    <ButtonFavoriteProduct idProduct={id} favorite={false} />
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


