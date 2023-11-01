import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import { AppTexts } from '../../../../assets/strings';
import { styles } from './style'
import ButtonMoreOrLess from '../../../../components/ButtonMoreOrLess/ButtonMoreOrLess';

interface ProductItemProps{
    price: number | undefined,
    name: string | undefined,
    photo: string | undefined,

}

const ProductItem = ({price, photo, name} : ProductItemProps) => {

    return (
        <View>
            <View style={styles.Container}>
                <View style={styles.ProductInfoContainer}>
                    <Image
                        source={{uri: photo}}
                        style={[styles.ProductImage]}
                    />
                    <View style={styles.ProductTextContainer}>
                        <Text style={styles.ProductName}>
                            {name}
                        </Text>
                        <Text style={styles.ProductPrice}>
                            {price}
                        </Text>
                    </View>
                </View>
                <ButtonMoreOrLess />
            </View>
            <View style={styles.SeparatorContainer}>
                <View style={styles.Separator} />
            </View>
        </View>
    );
};

export default ProductItem;
