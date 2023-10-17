import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DefaultTheme } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

import { styles } from '../../StyleAndComponentsScreens/AllProducts/style'
import theme from '../../styles/theme';
import CardProduct from '../../StyleAndComponentsScreens/AllProducts/components/CardProduct/CardProduct';
import UseFonts from '../../styles/useFonts';
import CustomTextInput from '../../StyleAndComponentsScreens/AllProducts/components/CustomTextInput/CustomTextInput';
import TypeProduct from '../../StyleAndComponentsScreens/AllProducts/components/TypeProduct/TypeProduct';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { performApi } from '../../utils/api';

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',


    },
};

interface ProductProps {
    id: number,
    name: string,
    description: string,
    price: number,
    photo: any
}

interface TypeProductProps {
    id: number,
    type: string;
}

const AllProducts = () => {
    const [typeProducts, setTypeProducts] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([])

    const url = async (path: string) => {
        const token = await AsyncStorage.getItem("token")

        if (!token)
            router.push('/')
        else {
            const data = await performApi.getData(path, token)
            return data
        }

    }
    const handleFilterProductsTypes = async () => {
        const apiDataProductsType = await url("products/types")

        if (!apiDataProductsType)
            Alert.alert("Erro!")
        else {
            const filterProducts = apiDataProductsType.map(({ type }: TypeProductProps) => type);
            setTypeProducts(filterProducts);
        }
    }
    const handleCardProducts = async () => {
        const apiDataProducts = await url("products?disponibility=true")

        if (!apiDataProducts)
            Alert.alert("Erro!")
        else {
            const allProductsTypes = apiDataProducts.map(({ name, price, description, photo, id}: ProductProps) => {
                return {
                    name,
                    price,
                    description,
                    photo,
                    id
                }
            });
            setProducts(allProductsTypes)
        }
    }

    useEffect(() => {
        handleFilterProductsTypes()
        handleCardProducts()
    }, [])


    return (
        <UseFonts>
            <StatusBar
                style='light'
                translucent backgroundColor={theme.COLORS.Orange4FE724C}
            />
            <SafeAreaView style={styles.SafeAreaView}>
                <View style={styles.ColorOrange}>
                    <View style={styles.ContainerColorBeige}>
                        <View style={styles.ColorBeige}></View>
                    </View>
                    <View style={styles.Container}>
                        <View style={styles.ContainerHeader}>
                            <View style={styles.Header}>
                                <View style={styles.ContainerInput}>
                                    <CustomTextInput />
                                </View>
                                <View style={styles.ContainerTypeProduct}>
                                    <ScrollView horizontal={true} contentContainerStyle={styles.TypeProduct} showsHorizontalScrollIndicator={false}>
                                        <TypeProduct productType='Todos' />
                                        {typeProducts.map((productType: string, index: number) => (
                                            <TypeProduct key={index} productType={productType} />
                                        ))}
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                        <ScrollView contentContainerStyle={styles.ContainerMain} showsVerticalScrollIndicator={false}>
                            <View style={styles.Main}>
                                {products.map(({ name, price, description, photo, id}: ProductProps, index: number) => (
                                    <CardProduct key={index} name={name} price={price} description={description} photo={photo} id={id}/>
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    );
};

export default AllProducts;
