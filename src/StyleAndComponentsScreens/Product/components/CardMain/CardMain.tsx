import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { AppTexts } from '../../../../assets/strings';
import ButtonMoreOrLess from '../../../../components/ButtonMoreOrLess/ButtonMoreOrLess';
import ButtonAddCart from '../ButtonCart/ButtonAddCart';

import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
// import { decrementQuantity, incrementQuantity } from '../../../../redux/features/shoppingCart/shoppingCartSlice';
// import { handleButtonMinus } from '../../../../redux/features/shoppingCart/shoppingCartSlice';
// import { ShoppingContext } from '../../../../context/shoppingCart';

interface CardMainProps {
    name: string | undefined,
    price: any,
    description: string | undefined,
    id: number,
    photo: string | undefined,
}

const CardMain = ({
    name,
    price,
    description,
    id,
    photo,
}: CardMainProps) => {
    return (
        <View style={styles.Container}>
            <View style={styles.ContainerHeader}>
                <Text style={styles.TypeProductName}>
                    {name}
                </Text>
            </View>
            <View style={styles.ContainerDescription}>
                <Text style={styles.TitleDescription}>
                    {description}
                </Text>
            </View>
            <View style={styles.ContainerMain}>
                <Text style={styles.AvailableText}>
                    {AppTexts.Available}
                </Text>
            </View>
            <View style={styles.ContainerButton}>
                <ButtonAddCart
                    price={price}
                    id={id}
                    name={name}
                    photo={photo}
                />
            </View>
        </View>
    );
};

export default CardMain;
