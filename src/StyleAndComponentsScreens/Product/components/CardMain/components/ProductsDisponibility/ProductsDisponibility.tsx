import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';

import { styles, shadowStyle } from './style';

const ProductsDisponibility = () => {
    return (
        <View style={[styles.Products, shadowStyle]}>
            <View style={styles.AboutProducts}>
                <Image source={require('../../../../../../assets/img/lanche.png')} style={styles.Img} />
                <View style={styles.NameAndDescription}>
                    <Text style={styles.Name}>Coxinha de Frango</Text>
                    <Text style={styles.Description}>Verifique nossa infinidade de salgados fritos</Text>
                </View>
            </View>
        </View>
    )
}

export default ProductsDisponibility;