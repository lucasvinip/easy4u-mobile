import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { increment } from '../../../../features/counter/counterSlice';

import { AppTexts } from '../../../../assets/strings';
import { styles, shadowStyle } from './style'


interface ButtonAddCartProps {
    price: any,
}

const ButtonAddCart = ({ price }: ButtonAddCartProps) => {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        // Dispatch the "increment" action creator function
        dispatch(increment());
    };

    return (
        <TouchableOpacity style={[styles.Container, shadowStyle]} onPress={handleAddToCart}>
            <View style={styles.Touchable}>
                <Text style={styles.TouchableText}>
                    {AppTexts.Add_Cart}
                </Text>
                <Text style={styles.TouchableIcon}>
                    {price}
                </Text>
            </View>
        </TouchableOpacity>
    )
};
export default ButtonAddCart;

