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
    const [subTotalAndTotal, setSubTotalAndTotal] = useState<string>("")

    const getProductsItems = async () => {
        const items: any = await AsyncStorage.getItem("items")
        console.log(items)
        const getProduct = JSON.parse(items)

        return getProduct
    }

    const fetchData = async () => {
        const itemsProducts = await getProductsItems()
        const productInfo = itemsProducts.map((item: ProductProps) => ({
            name: item.name,
            price: item.price,
            photo: item.photo,
            quantity: item.quantity
        }));
        setProducts(productInfo)
    }
    const handleSubTotalAndTotalProducts = async () => {
        const itemsProducts = await getProductsItems()

        console.log("meuu o " + itemsProducts);

        const filterPrice = itemsProducts.map((item: ProductProps) => {
            return item.price
        })
        const totalPrice = filterPrice.reduce((total: number, price: number) => total + price, 0)
        setSubTotalAndTotal(totalPrice)
    }

    useEffect(() => {
        fetchData()
        handleSubTotalAndTotalProducts()
    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={styles.Screen}>
                <View style={styles.Container}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: 'auto' }}>
                        <View style={styles.ContainerHeader}>
                            <Text style={styles.HeaderText}>3 items</Text>
                            <View style={styles.HeaderLine} />
                        </View>
                        <View style={styles.ContainerMain}>
                            {
                                products.map(({ name, price, photo, quantity }: ProductProps, index: number) => (
                                    <ProductItem key={index} name={name} price={price} photo={photo} quantity={quantity} />
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
