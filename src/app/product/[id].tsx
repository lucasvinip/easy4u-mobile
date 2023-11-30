import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../../StyleAndComponentsScreens/Product/style';
import UseFonts from '../../hooks/useFonts';
import CardMain from '../../StyleAndComponentsScreens/Product/components/CardMain/CardMain'
import { performApi } from '../../utils/api';
import ButtonFavoriteProduct from '../../StyleAndComponentsScreens/Product/components/ButtonFavoriteProduct/ButtonFavoriteProduct';
import { formatNumberToTypeBr } from '../../utils/formatNumber';
import { FlatList } from 'react-native-gesture-handler';
import ProductsDisponibility from '../../StyleAndComponentsScreens/Product/components/CardMain/components/ProductsDisponibility/ProductsDisponibility';

type CardProductProps = {
    id: number
    name: string,
    price: number,
    photo: string,
    description: string,
    preparationTime: number | undefined,
    productType: string
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
    const [typeProducts, setTypeProducts] = useState<CardProductProps[]>([])
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
        const apiDataProducts = await getUrl(`products/${id}`);

        if (!apiDataProducts) {
            alert("Erro!");
        } else {
            try {
                const data = await apiDataProducts;
                console.log("prl,ft " + data);

                const formattedPrice = {
                    ...data,
                    price: formatNumberToTypeBr(data.price)
                };

                setDataProduct(formattedPrice);
            } catch (error) {
                alert("Erro ao obter os dados:" + error);
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

    const handleDisponibilityProducts = async () => {

        if (dataProduct?.productType == null)
            console.log('ola');
        else {
            const apiProductType: CardProductProps[] = await getUrl(`products?productType=${dataProduct.productType}&disponibility=true`);

            if (!apiProductType) {
                setTypeProducts([]);
            } else {
                const data = apiProductType.map((item: CardProductProps) => {
                    console.log(item);
                    return item;
                });
                console.log("mpgr " + data);
                setTypeProducts(data);
            }
        }
    };




    useEffect(() => {
        const fetchData = async () => {
            await handleCardProducts()
            await handleFavoriteItem()
            await handleDisponibilityProducts()
        }

        fetchData()
    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            await handleDisponibilityProducts()
        }

        fetchData()
    }, [dataProduct?.productType]);

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
                                        photo={dataProduct?.photo}
                                        preparationTime={dataProduct?.preparationTime}
                                    >
                                        <FlatList
                                            data={typeProducts}
                                            renderItem={({ item }) => {
                                                return <ProductsDisponibility
                                                    key={item.id}
                                                    name={item.name}
                                                    photo={item.photo}
                                                    productType={item.productType}
                                                    id={item.id}
                                                />;
                                            }}
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                        />
                                    </CardMain>
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


