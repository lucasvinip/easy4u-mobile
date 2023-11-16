// Seu componente ContainerTotal.js
import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import { styles } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

interface ProductItemProps {
    price: number,
    name: string | undefined,
    id: number
}

const NameAndTotal = ({ price, name, id }: ProductItemProps) => {
    const item = useSelector((state: RootState) => state.cart.items.find((item: ProductItemProps) => item.id === id))

    const productQty = item?.quantity || 0

    console.log(name);

    return (
        <View style={styles.ContentMain}>
            <View style={styles.NameAndQuantityProduct}>
                <Text style={styles.NameTitle}>
                    {name}
                </Text>
                <Text style={styles.QuantityTitle}>
                    {productQty}x
                </Text>
            </View>
            <Text style={styles.MainTitle}>
                {price}
            </Text>
        </View>
    );
};

export default NameAndTotal;
