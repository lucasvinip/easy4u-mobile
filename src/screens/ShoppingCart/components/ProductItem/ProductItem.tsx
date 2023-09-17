import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign from your library
import theme from '../../../../styles/theme';
import { AppTexts } from '../../../../assets/strings';
import {styles} from './style'
import ButtonMoreOrLess from '../../../../components/ButtonMoreOrLess/ButtonMoreOrLess';

const ProductItem = () => {
    return (
        <View>
            <View style={styles.Container}>
                <View style={styles.ProductInfoContainer}>
                    <Image
                        source={require('../../../../assets/img/cheesy-bread.png')}
                        style={styles.ProductImage}
                    />
                    <View style={styles.ProductTextContainer}>
                        <Text style={styles.ProductName}>
                            {AppTexts.Croassaint_Chocolate}
                            </Text>
                        <Text style={styles.ProductPrice}>
                            R$ 5,50
                        </Text>
                    </View>
                </View>
                <ButtonMoreOrLess/>
            </View>
            <View style={styles.SeparatorContainer}>
                <View style={styles.Separator} />
            </View>
        </View>
    );
};

export default ProductItem;
