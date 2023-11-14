import React from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { decrementItem, incrementItem } from '../../redux/features/shoppingCart/shoppingCartSlice';

interface ButtonMoreOrLessProps {
    product: {
        name: string | undefined;
        price: number;
        photo: string | undefined,
    },
    id: number
}

const ButtonMoreOrLess = ({
    product,
    id
}: ButtonMoreOrLessProps) => {
    const dispatch = useDispatch();
    const cartQty = useSelector((state: any) => state.cart.qty);

    const handleMinus = () => {
        dispatch(decrementItem());
    }

    const handlePlus = () => {
        dispatch(incrementItem({productId: id}));
    }

    return (
        <View style={styles.QuantityContainer}>
            <View style={styles.MinusButton}>
                <TouchableOpacity onPress={handleMinus}>
                    <MaterialCommunityIcons name={'minus-thick'} style={styles.MinusIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.QuantityTextContainer}>
                <Text style={styles.QuantityText}>{cartQty}</Text>
            </View>
            <View style={styles.PlusButton}>
                <TouchableOpacity onPress={handlePlus}>
                    <MaterialCommunityIcons name={'plus-thick'} style={styles.PlusIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ButtonMoreOrLess;
