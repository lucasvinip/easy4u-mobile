import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { AppTexts } from '../../../../assets/strings';
import ButtonMoreOrLess from '../../../../components/ButtonMoreOrLess/ButtonMoreOrLess';
import ButtonAddCart from '../ButtonCart/ButtonAddCart';

import { styles } from './style';
// import { ShoppingContext } from '../../../../context/shoppingCart';

interface CardMainProps {
    name: string | undefined,
    price: any,
    description: string | undefined,
}

const CardMain = ({
    name,
    price,
    description,
}: CardMainProps) => {
    const [quantity, setQuantity] = useState<number>(1)
    const [totalPrice, setTotalPrice] = useState<any>(price)

    const currentPrice = () => {
        setTotalPrice(price)
    }
    const handleButtonMinus = () => {
        if (quantity > 1) {
            const updatedQuantity = quantity - 1;
            setQuantity(updatedQuantity);
            const updatedPrice = price * updatedQuantity
            setTotalPrice(updatedPrice);
        }
    }
    const handleButtonPlus = () => {
        const updatedQuantity = quantity + 1;
        setQuantity(updatedQuantity);

        if (updatedQuantity >= 2) {
            const updatedPrice = price * updatedQuantity
            setTotalPrice(updatedPrice)
        }
    }

    useEffect(() => {
        currentPrice()
    }, [price]);

    return (
        <View style={styles.Container}>
            <View style={styles.ContainerHeader}>
                <Text style={styles.TypeProductName}>
                    {name}
                </Text>
                <View>
                    <Text style={styles.AmountText}>
                        {AppTexts.Amount}
                    </Text>
                    <ButtonMoreOrLess
                        quantity={quantity}
                        onPressMinus={handleButtonMinus}
                        onPressPlus={handleButtonPlus} />
                </View>
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
                <ButtonAddCart price={totalPrice} />
            </View>
        </View>
    );
};

export default CardMain;
