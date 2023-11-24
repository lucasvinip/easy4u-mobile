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
import UseFonts from '../hooks/useFonts';

interface ProductProps {
    id: number,
    name: string,
    price: number,
    photo: string,
    preparationTime: number | undefined,
};

const ShoppingCart = () => {
    const [scheduleTime, setScheduleTime] = useState<boolean>();

    const cart = useSelector((state: RootState) => state.cart);
    const cartItems = cart.items
    const cartQty = cart.items.find((item: ProductProps) => item.id === item.id)
    const productQty = cartQty?.quantity || 0
    const cartTotal = cart.total

    const verifyScheduleTime = () => {
        cartItems.some(product => product.preparationTime !== null ? setScheduleTime(true) : setScheduleTime(false));
    }

    useEffect(() => {
        verifyScheduleTime();
    }, [cartItems]);


    return (
        <UseFonts>
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <View style={styles.Screen}>
                    <View style={styles.Container}>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: 'auto' }}>
                            <View style={styles.ContainerHeader}>
                                <Text style={styles.HeaderText}>{cartItems.length} items</Text>
                                <View style={styles.HeaderLine} />
                            </View>
                            <View style={styles.ContainerMain}>
                                {
                                    cartItems.map((item: ProductProps, index: number) => (
                                        <ProductItem
                                            key={index}
                                            name={item.name}
                                            price={item.price}
                                            photo={item.photo}
                                            id={item.id}
                                            productQty={productQty}
                                        />
                                    ))
                                }
                            </View>
                            {scheduleTime && (
                                <View>
                                    <ScheduleTime />
                                </View>
                            )}

                            <View style={styles.ConatinerFooter}>
                                <View>
                                    <SubTotalDiscount total={cartTotal}/>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView >
        </UseFonts>
    )
};

export default ShoppingCart;
