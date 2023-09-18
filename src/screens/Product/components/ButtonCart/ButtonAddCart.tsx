import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import theme from '../../../../styles/theme';
import { AppTexts } from '../../../../assets/strings';

import { styles, shadowStyle } from './style'

const ButtonAddCart = () => {
    return (
        <TouchableOpacity style={[styles.Container, shadowStyle]}>
            <View style={styles.Touchable}>
                <Text style={styles.TouchableText}>
                    {AppTexts.Add_Cart}
                </Text>
                <Text style={styles.TouchableIcon}>
                    R$ 5,00
                </Text>
            </View>
        </TouchableOpacity>
    )
};
export default ButtonAddCart;

