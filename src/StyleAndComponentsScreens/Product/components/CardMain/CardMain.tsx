import React from 'react';
import { View, Text } from 'react-native';
import { AppTexts } from '../../../../assets/strings';
import ButtonMoreOrLess from '../../../../components/ButtonMoreOrLess/ButtonMoreOrLess';
import ButtonAddCart from '../ButtonCart/ButtonAddCart';

import { styles } from './style'

interface CardMainProps {
    name: any,
    price: any,
    description: any
}


const CardMain = ({ name, price, description }: CardMainProps) => {
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
                    <ButtonMoreOrLess />
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
                <ButtonAddCart price={price} />
            </View>
        </View>
    );
};

export default CardMain;