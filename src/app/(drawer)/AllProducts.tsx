import React, { useEffect, useState } from 'react';
import {
    View,
    ScrollView,
    Alert,
    KeyboardAvoidingView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../../StyleAndComponentsScreens/AllProducts/style'
import theme from '../../styles/theme';
import CardProduct from '../../StyleAndComponentsScreens/AllProducts/components/CardProduct/CardProduct';
import UseFonts from '../../hooks/useFonts';
import CustomTextInput from '../../StyleAndComponentsScreens/AllProducts/components/CustomTextInput/CustomTextInput';
import TypeProduct from '../../StyleAndComponentsScreens/AllProducts/components/TypeProduct/TypeProduct';
import { performApi } from '../../utils/api';
import { FlatList, RefreshControl } from 'react-native-gesture-handler';
import SkeletonProducts from '../../components/Skeleton/SkeletonProducts/SkeletonProducts';
import { formatNumberToTypeBr } from '../../utils/formatNumber';

interface ProductProps {
    id: number,
    name: string,
    description: string,
    price: number,
    photo: string,
    productType: string,
    preparationTime: number | undefined,
}

interface TypeProductProps {
    id: number,
    type: string;
}

interface SearcProductProps {
    id: number,
    name: string,
    productType: string,
}

const AllProducts: React.FC = () => {
    const [refresh, setRefresh] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [typeProducts, setTypeProducts] = useState<string[]>([])
    const [products, setProducts] = useState<ProductProps[]>([])
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

    const MAX_DESCRIPTION_LENGTH = 40
    const handleLimitedDescription = (description: string) => description.slice(0, MAX_DESCRIPTION_LENGTH);
    const handleOneCardForName = (apiData: ProductProps[]) => {
        const seenNames = new Set<string>();
        const typeProduct = apiData.reduce((accumulator: ProductProps[], {
            name,
            price,
            description,
            photo,
            id,
            preparationTime,
            productType
        }: ProductProps) => {
            const formattedName = name.trim().toLowerCase();

            if (!seenNames.has(formattedName)) {
                seenNames.add(formattedName);

                const descLimited = handleLimitedDescription(description)
                const formattedPrice: any = formatNumberToTypeBr(price);
                const newItem: ProductProps = {
                    description: descLimited,
                    name: name,
                    id: id,
                    photo: photo,
                    preparationTime: preparationTime,
                    price: formattedPrice,
                    productType: productType
                };
                console.log(newItem);

                accumulator.push(newItem);
            }

            return accumulator;
        }, []);
        return typeProduct
    }

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
        try {
            const apiDataProducts = await getUrl("products?disponibility=true");

            if (!apiDataProducts) {
                router.push('/');
                return;
            }
            const allProductsTypes = handleOneCardForName(apiDataProducts)
            setIsLoading(false);
            setProducts(allProductsTypes);
        } catch (error) {
            console.error("Error in handleCardProducts:", error);
        }
    };
    const handleSearchProduct = async () => {
        try {
            const apiDataFilterProductsByTypeAndName = await getUrl('products?disponibility=true');
            if (!apiDataFilterProductsByTypeAndName) {
                Alert.alert("Erro!");
                return;
            }

            const lowerCaseText = text.toLowerCase();
            const seenNames = new Set<string>();

            const filteredProducts = apiDataFilterProductsByTypeAndName.filter(({ name, productType }: SearcProductProps) => {
                const lowerCaseName = name.toLowerCase();
                const lowerCaseProductType = productType.toLowerCase();
                return lowerCaseName.includes(lowerCaseText) || lowerCaseProductType.includes(lowerCaseText);
            });

            const productsWithLimitedDescription = handleOneCardForName(filteredProducts)
            const finalProducts = productsWithLimitedDescription.filter((product: ProductProps) => product !== null);

            setProducts(finalProducts);
        } catch (error) {
            alert('Error in handleSearchProduct: ' + error);
        }
    };

    const handleClickFilterProductType = async (productType: any) => {
        const apiDataFilterProductsByType = await getUrl(`products?productType=${productType}&disponibility=true`)
        if (!apiDataFilterProductsByType)
            alert("Erro!")
        else {
            try {
                const typeProduct = handleOneCardForName(apiDataFilterProductsByType)
                setProducts(typeProduct)
            } catch (error) {
                alert("typeProduct not get :" + error)
            }
        }
    };
    const pullMeDown = async () => {
        setRefresh(true);
        await handleCardProducts();
        setRefresh(false);
    };
    useEffect(() => {
        handleFilterProductsTypes();
        handleCardProducts()
    }, [])

    return (
        <UseFonts >
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
                                        {typeProducts.map((productType: string, index: number) => (
                                            <TypeProduct
                                                key={index}
                                                productType={productType}
                                                onPress={() => handleClickFilterProductType(productType)}
                                            />
                                        ))}
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                        <FlatList refreshControl={
                            <RefreshControl
                                refreshing={refresh}
                                onRefresh={() => pullMeDown()}
                                tintColor={'orange'}
                            />}
                            contentContainerStyle={styles.ContainerMain}
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps={'handled'}
                            data={products}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.Main}>
                                        {isLoading ?
                                            <>
                                                <View>
                                                    <SkeletonProducts />
                                                    <SkeletonProducts />
                                                    <SkeletonProducts />
                                                    <SkeletonProducts />
                                                </View>
                                            </>
                                            : (
                                                <CardProduct
                                                    name={item.name}
                                                    price={item.price}
                                                    description={item.description}
                                                    photo={item.photo}
                                                    id={item.id}
                                                    preparationTime={item.preparationTime}
                                                    productType={item.productType}
                                                />
                                            )
                                        }
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>
            </SafeAreaView >
        </UseFonts>
    );
};

export default AllProducts;
