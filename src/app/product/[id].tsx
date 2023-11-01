import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    SafeAreaView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../../StyleAndComponentsScreens/Product/style';
import UseFonts from '../../hooks/useFonts';
import CardMain from '../../StyleAndComponentsScreens/Product/components/CardMain/CardMain'
import { performApi } from '../../utils/api';
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
    const { id } = useLocalSearchParams()

    const [dataProduct, setDataProduct] = useState<CardProductProps | null>(null)
    const [isFavorite, setIsFavorite] = useState<boolean>(false)




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
            productIds.find((productId: number) => {
                if (productId === +id) {
                    setIsFavorite(true)
                }
            })
        }
    };

    useEffect(() => {
        handleCardProducts()
        handleFavoriteItem()
    }, [id]);



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
                                    <ButtonFavoriteProduct idProduct={id} favorite={isFavorite} />
                                </View>
                                <View style={styles.ContainerMain}>
                                    <CardMain
                                        name={dataProduct?.name}
                                        price={dataProduct?.price}
                                        description={dataProduct?.description}
                                        id={+id}
                                    />
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


