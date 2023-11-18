import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { styles } from '../StyleAndComponentsScreens/ShoppingCart/style';
import ProductItem from '../StyleAndComponentsScreens/ShoppingCart/components/ProductItem/ProductItem'
import ScheduleTime from '../StyleAndComponentsScreens/ShoppingCart/components/SchuleTime/SchuleTime';
import SubTotalDiscount from '../StyleAndComponentsScreens/ShoppingCart/components/SubTotalDiscount/SubTotalDiscount';

interface ProductProps {
    id: number,
    name: string,
    price: number,
    photo: string,
}

const ShoppingCart = () => {
    const [products, setProducts] = useState<ProductProps[]>([])

    const items = useSelector((state: RootState) => state.cart.items)

    const fetchData = () => {
        const itemsProducts = items
        const productInfo = itemsProducts.map((item: ProductProps) => {
            console.log(item);
            
           return item
        })
        console.log("fowef, " + productInfo);


        setProducts(productInfo)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={styles.Screen}>
                <View style={styles.Container}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: 'auto' }}>
                        <View style={styles.ContainerHeader}>
                            <Text style={styles.HeaderText}>{items.length} items</Text>
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
                            <View>
                                <SubTotalDiscount />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView >
    )
};

export default ShoppingCart;
