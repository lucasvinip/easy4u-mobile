import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from '../StyleAndComponentsScreens/ShoppingCart/style';
import ProductItem from '../StyleAndComponentsScreens/ShoppingCart/components/ProductItem/ProductItem'
import ScheduleTime from '../StyleAndComponentsScreens/ShoppingCart/components/SchuleTime/SchuleTime';
import SubTotalDiscount from '../StyleAndComponentsScreens/ShoppingCart/components/SubTotalDiscount/SubTotalDiscount';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProductProps {
    id: number,
    name: any,
    price: number,
    photo: any,
    productType: string,
    quantity: number
}

const ShoppingCart = () => {
    const [products, setProducts] = useState<any[]>([])
    const [subTotalAndTotal, setSubTotalAndTotal] = useState<any>(0)

    const quantityItems = useSelector((state: any) => state.cart.items.length)

    const getProductsItems = async () => {
        const items: any = await AsyncStorage.getItem("items")
        const getProduct = JSON.parse(items)

        console.log(getProduct);

        return getProduct
    }
    const fetchData = async () => {
        const itemsProducts = await getProductsItems()
        const productInfo = itemsProducts.map((item: ProductProps) => {
            return item
        })
        setProducts(productInfo)
    }

    const handleMultiplicationPriceAndQuantity = async () => {
        try {
            const itemsProducts = await getProductsItems();

            const filterPrice = itemsProducts.map((item: ProductProps) => item.price)
            const filterQuantity = itemsProducts.map((item: ProductProps) => item.quantity)

            const multiplication: number[] = filterQuantity.map((quantity: number, index: string | number) => quantity * filterPrice[index])

            console.log(multiplication);

            return multiplication

        } catch (error) {
            console.error("Error in test:", error);
        }
    }
    const handleSubTotalAndTotalProducts = async () => {
        try {
            const multiplication: any = await handleMultiplicationPriceAndQuantity()

            console.log("meuu o " + multiplication);

            const totalPrice = multiplication.reduce((total: number, value: number) => total + value, 0);

            setSubTotalAndTotal(totalPrice);
        } catch (error) {
            console.error("Error in handleSubTotalAndTotalProducts:", error);
        }

    }

    useEffect(() => {
        const fetchDataAsync = async () => {
            await fetchData();
            await handleSubTotalAndTotalProducts();
        };

        fetchDataAsync()

    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={styles.Screen}>
                <View style={styles.Container}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: 'auto' }}>
                        <View style={styles.ContainerHeader}>
                            <Text style={styles.HeaderText}>{quantityItems} items</Text>
                            <View style={styles.HeaderLine} />
                        </View>
                        <View style={styles.ContainerMain}>
                            {
                                products.map((item: ProductProps, index: number) => (
                                    <ProductItem
                                        key={index}
                                        name={item.name}
                                        price={item.price}
                                        photo={item.photo}
                                        id={item.id}
                                    />
                                ))
                            }
                        </View>
                        <View>
                            <ScheduleTime />
                        </View>
                        <View style={styles.ConatinerFooter}>
                            <View style={{}}>
                                <SubTotalDiscount
                                    subtotal={subTotalAndTotal} discount={"00,00"} total={subTotalAndTotal}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView >
    )
};

export default ShoppingCart;
