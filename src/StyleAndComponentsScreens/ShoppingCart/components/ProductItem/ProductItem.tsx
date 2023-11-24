import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import { styles } from './style';
import ButtonMoreOrLess from '../../../../components/ButtonMoreOrLess/ButtonMoreOrLess';
import { formatNumberToTypeBr } from '../../../../utils/formatNumber';

interface ProductItemProps {
    price: number,
    name: string | undefined,
    photo: string | undefined,
    id: number,
    productQty: number
}

const ProductItem = ({
    price,
    photo,
    name,
    id,
    productQty
}: ProductItemProps) => {

    return (
        <View>
            <View style={styles.Container}>
                <View style={styles.ProductInfoContainer}>
                    <Image
                        source={{ uri: photo }}
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
                <ButtonMoreOrLess
                    id={id}
                    productQty={productQty}
                />
            </View>
            <View style={styles.SeparatorContainer}>
                <View style={styles.Separator} />
            </View>
        </View>
    );
};

export default ProductItem;
