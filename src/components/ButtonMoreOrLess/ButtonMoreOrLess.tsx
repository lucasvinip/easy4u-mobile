import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './style';

const ButtonMoreOrLess = () => {
    return (
        <View style={styles.QuantityContainer}>
            <View style={styles.MinusButton}>
                <TouchableOpacity>
                    <AntDesign name='minus' style={styles.MinusIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.QuantityTextContainer}>
                <Text style={styles.QuantityText}>1</Text>
            </View>
            <View style={styles.PlusButton}>
                <TouchableOpacity>
                    <AntDesign name='plus' style={styles.PlusIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ButtonMoreOrLess;