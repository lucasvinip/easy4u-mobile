import React from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { AppTexts } from '../../../../assets/strings';

import { styles } from './style'
import { Link } from 'expo-router';

const ButtonGoogle: React.FC = () => {
    return (
        <Link replace href={'/AllProducts'} asChild>
            <TouchableOpacity style={styles.Container}>
                <View style={styles.Touchable}>
                    <AntDesign name='googleplus' style={styles.TouchableIcon} />
                    <Text style={styles.TouchableText}>
                        {AppTexts.Connect_Google.toUpperCase()}
                    </Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
};
export default ButtonGoogle;

