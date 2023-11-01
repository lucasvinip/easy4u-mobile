import React, { useState } from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './style';
interface ButtonMoreOrLessProps {
    onPressMinus?: () => void,
    onPressPlus?: () => void,
    quantity: any,
}

const ButtonMoreOrLess = ({onPressMinus, onPressPlus, quantity}:ButtonMoreOrLessProps) => {
    return (
        <View style={styles.QuantityContainer}>
            <View style={styles.MinusButton}>
                <TouchableOpacity onPress={onPressMinus}>
                    <MaterialCommunityIcons name={'minus-thick'} style={styles.MinusIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.QuantityTextContainer}>
                <Text style={styles.QuantityText}>{quantity}</Text>
            </View>
            <View style={styles.PlusButton}>
                <TouchableOpacity onPress={onPressPlus}>
                    <MaterialCommunityIcons name={'plus-thick'} style={styles.PlusIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ButtonMoreOrLess;