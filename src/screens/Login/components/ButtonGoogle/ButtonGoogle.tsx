import React from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import theme from '../../../../styles/theme';
import { AppTexts } from '../../../../assets/strings';
import { AntDesign } from '@expo/vector-icons';

import {styles} from './style'

const ButtonGoogle = () => {
    return (
        <TouchableOpacity style={styles.Container}>
            <View style={styles.Touchable}>
                <AntDesign name='googleplus' style={styles.TouchableIcon} />
                <Text style={styles.TouchableText}>
                    {AppTexts.Connect_Google.toUpperCase()}
                </Text>
            </View>
        </TouchableOpacity>
    )
};
export default ButtonGoogle;

