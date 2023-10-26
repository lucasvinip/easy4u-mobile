import React, { useEffect, useState } from 'react';
import {
    View,
    ScrollView,
    Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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

interface ProductProps {
    id: number,
    name: any,
    description: string,
    price: number,
    photo: any,
    productType: string
}

interface TypeProductProps {
    id: number,
    type: string;
}

interface SearcProductProps {
    id: number,
    name: any,
    productType: any,
}

const AllProducts = () => {
    const [typeProducts, setTypeProducts] = useState<any[]>([])
    const [products, setProducts] = useState<any[]>([])
    const [text, setText] = useState<string>("");

    const getUrl = async (path: string) => {
        const token = await AsyncStorage.getItem("token")

        if (!token)
            router.push('/')
        else {
            try {
                const data = await performApi.getData(path, token)
                return data
            } catch (error) {
                alert("data not get:" + error)
            }

        }

    };

    const handleFilterProductsTypes = async () => {
        const apiDataProductsType = await getUrl("products/types")

        if (!apiDataProductsType)
            Alert.alert("Erro!")
        else {
            try {
                const filterProducts = apiDataProductsType.map(({ type }: TypeProductProps) => type);
                setTypeProducts(filterProducts);
            } catch (error) {
                alert("filterProducts not get:" + error)
            }

        }
    };

    const handleCardProducts = async () => {
        const apiDataProducts = await getUrl("products?disponibility=true")

        if (!apiDataProducts)
            Alert.alert("Erro!")
        else {
            try {
                const allProductsTypes = apiDataProducts.map(({ name, price, description, photo, id }: ProductProps) => {
                    return {
                        name,
                        price,
                        description,
                        photo,
                        id
                    }
                });
                setProducts(allProductsTypes)
            } catch (error) {
                alert("allProductsTypes not get:" + error)
            }

        }
    };

    const handleSearchProduct = async () => {
        const apiDataFilterProductsByTypeAndName = await getUrl('products?disponibility=true');
        console.log(apiDataFilterProductsByTypeAndName);

        if (!apiDataFilterProductsByTypeAndName) {
            Alert.alert("Erro!")
        } else {
            try {
                const lowerCaseText = text.toLowerCase()

                const filter = apiDataFilterProductsByTypeAndName.filter(({ name, productType }: SearcProductProps) => {
                    const lowerCaseName = name.toLowerCase()
                    const lowerCaseProductType = productType.toLowerCase()
                    return lowerCaseName.includes(lowerCaseText) || lowerCaseProductType.includes(lowerCaseText)
                });

                console.log(filter);
                setProducts(filter);
            } catch (error) {
                alert('filter name and productType not get:' + error);
            }
        }
    };

    const handleClickFilterProductType = async (productType: any) => {
        const apiDataFilterProductsByType = await getUrl(`products?productType=${productType}`)

        if (!apiDataFilterProductsByType)
            alert("Erro!")
        else {
            try {
                const typeProduct = await apiDataFilterProductsByType
                setProducts(typeProduct)
            } catch (error) {
                alert("typeProduct not get:" + error)
            }

        }
    };

    useEffect(() => {
        handleFilterProductsTypes(),
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
                                    <CustomTextInput
                                        data={text}
                                        onChange={setText}
                                        onPress={handleSearchProduct}
                                    />
                                </View>
                                <View style={styles.ContainerTypeProduct}>
                                    <ScrollView horizontal={true} contentContainerStyle={styles.TypeProduct} showsHorizontalScrollIndicator={false}>
                                        <TypeProduct productType='Todos' onPress={handleCardProducts} />
                                        {typeProducts.map((productType: any, index: number) => (
                                            <TypeProduct key={index} productType={productType} onPress={() => handleClickFilterProductType(productType)} />
                                        ))}
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                        <ScrollView contentContainerStyle={styles.ContainerMain} showsVerticalScrollIndicator={false}>
                            <View style={styles.Main}>
                                {products.map(({ name, price, description, photo, id }: ProductProps, index: number) => (
                                    <CardProduct key={index} name={name} price={price} description={description} photo={photo} id={id} />
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
