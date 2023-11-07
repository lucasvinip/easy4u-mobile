import React, { useState } from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './style';
import { useDispatch } from 'react-redux';
import { handleButtonMinus, handleButtonPlus } from '../../redux/features/shoppingCart/shoppingCartSlice';
interface ButtonMoreOrLessProps {
    price: number
    quantity: any,
}

const ButtonMoreOrLess = ({ quantity, price}:ButtonMoreOrLessProps) => {

    const dispatch = useDispatch()
    const buttonMinus = () => dispatch(handleButtonMinus(price))
    const buttonPlus = () => dispatch(handleButtonPlus(price))

    console.log(buttonMinus());
    console.log(buttonPlus());

    return (
        <View style={styles.QuantityContainer}>
            <View style={styles.MinusButton}>
                <TouchableOpacity onPress={buttonMinus}>
                    <MaterialCommunityIcons name={'minus-thick'} style={styles.MinusIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.QuantityTextContainer}>
                <Text style={styles.QuantityText}>{quantity}</Text>
            </View>
            <View style={styles.PlusButton}>
                <TouchableOpacity onPress={buttonPlus}>
                    <MaterialCommunityIcons name={'plus-thick'} style={styles.PlusIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ButtonMoreOrLess;