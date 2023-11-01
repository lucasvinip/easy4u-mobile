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

interface ProductProps {
    id: number,
    name: any,
    price: number | undefined,
    photo: any,
    productType: string
}

const ShoppingCart = () => {
    const itemsCard: any = useSelector((state: any) => state.cart.items)
    console.log(itemsCard);
    
    const [products, setProducts] = useState<any[]>([])

    const getCardProduct = () => {
    
        const data = itemsCard.map(({ name, price, photo }: ProductProps) => {
            return {
                name,
                price,
                photo,
            }
        });
        setProducts(data)
    }

    useEffect(() => {
        getCardProduct()
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
                                products.map(({ name, price, photo }: ProductProps, index: number) => (
                                    <ProductItem key={index} name={name} price={price} photo={photo} />
                                ))
                            }
                        </View>
                        <View>
                            <ScheduleTime />
                        </View>
                        <View style={styles.ConatinerFooter}>
                            <View style={{}}>
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
