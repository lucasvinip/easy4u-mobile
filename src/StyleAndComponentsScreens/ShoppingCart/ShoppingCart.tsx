import React from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './style';
import theme from '../../styles/theme';
import ProductItem from './components/ProductItem/ProductItem'
import ScheduleTime from './components/SchuleTime/SchuleTime';
import SubTotalDiscount from './components/SubTotalDiscount/SubTotalDiscount';

const ShoppingCart = () => {
    return (
        <SafeAreaView>
            <View style={styles.Container}>
                <View style={styles.ContainerHeader}>
                    <Text style={styles.HeaderText}>3 items</Text>
                    <View style={styles.HeaderLine} />
                </View>
                <ScrollView>
                    <View style={styles.ContainerMain}>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </View>
                    <View>
                        <ScheduleTime />
                    </View>
                    <View style={styles.ConatinerFooter}>
                        <SubTotalDiscount />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
};

export default ShoppingCart;
