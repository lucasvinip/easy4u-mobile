import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DefaultTheme } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';


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
    photo: string,
    productType: string,
    preparationTime: number
}

const AllProducts = () => {
    const [typeProducts, setTypeProducts] = useState<any[]>([]);
    const [cardProducts, setCardProducts] = useState<any[]>([])

    const handleFilterProducts = async () => {
        const token = await AsyncStorage.getItem("token")
        const apiData = await performApi.getData("products", token)

        if (!apiData) {
            Alert.alert("Erro!")
        } else {
            const filterProducts = apiData.map(({ productType }: ProductProps) => productType);
            const allProducts = apiData.map(({ name, price}: ProductProps) => name);

            console.log(allProducts);

            setTypeProducts(filterProducts);
            setCardProducts(allProducts)
        }
    }

    useEffect(() => {
        handleFilterProducts()
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
                                {cardProducts.map((name: string, index: number) => (
                                    <CardProduct key={index} name={name}/>
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
