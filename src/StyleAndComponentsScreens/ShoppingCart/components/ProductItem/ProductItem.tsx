import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import { AppTexts } from '../../../../assets/strings';
import { styles } from './style'
import ButtonMoreOrLess from '../../../../components/ButtonMoreOrLess/ButtonMoreOrLess';
import { useDispatch } from 'react-redux';
// import { decrementQuantity, incrementQuantity } from '../../../../redux/features/shoppingCart/shoppingCartSlice';

interface ProductItemProps {
    price: number,
    name: string | undefined,
    photo: string | undefined,
    quantity: number
}

const ProductItem = ({
    price,
    photo,
    name,
    quantity
}: ProductItemProps) => {

    console.log("bababa" + quantity);


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
                    onPressMinus={() => console.log("minus")}
                    onPressPlus={() => console.log("plus")}
                    quantity={quantity}
                    price={price}
                />
            </View>
            <View style={styles.SeparatorContainer}>
                <View style={styles.Separator} />
            </View>
        </View>
    );
};

export default ProductItem;
