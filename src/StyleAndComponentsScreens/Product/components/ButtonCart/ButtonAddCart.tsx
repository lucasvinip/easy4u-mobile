import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import theme from '../../../../styles/theme';
import { AppTexts } from '../../../../assets/strings';

import { styles, shadowStyle } from './style'

interface ButtonAddCartProps{
    price: any,
    onPress: () => void
}

const ButtonAddCart = ({price, onPress} : ButtonAddCartProps) => {

    
    return (
        <TouchableOpacity style={[styles.Container, shadowStyle]} onPress={onPress}>
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

