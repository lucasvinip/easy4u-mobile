import React from 'react';
import { View, Text} from 'react-native';
import { AppTexts } from '../../../../assets/strings';
import ButtonMoreOrLess from '../../../../components/ButtonMoreOrLess/ButtonMoreOrLess';
import ButtonAddCart from '../ButtonCart/ButtonAddCart';

import {styles} from './style'

interface CardMainProps{
    name: any,
    price: any
}


const CardMain = ({name, price}: CardMainProps) => {
    return (
        <View style={styles.Main}>
            <Text style={styles.TypeProductName}>
                {name}
            </Text>
            <View style={styles.ContainerAvailable}>
                <Text style={styles.AvailableText}>
                    {AppTexts.Available}
                </Text>
            </View>
            <View style={styles.ContainerAmount}>
                <View>
                    <View>
                        <Text style={styles.AmountText}>
                            {AppTexts.Amount}
                        </Text>
                        <ButtonMoreOrLess />
                    </View>
                </View>
            </View>
            <View style={styles.ContainerButton}>
                <ButtonAddCart price={price} />
            </View>
        </View>
    );
};

export default CardMain;