import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import { AppTexts } from '../../../../assets/strings';
import theme from '../../../../styles/theme';

import { styles } from './style';

const CardProduct = () => {
    return (
        <TouchableOpacity style={styles.Container}>
            <View style={styles.ContainerCard}>
                <View style={styles.CardItems}>
                    <View style={styles.Description}>
                        <Text style={styles.Title1}>
                            Salgados Assados
                        </Text>
                        <Text style={styles.Title2}>
                            {AppTexts.Check_Baked_Snacks}
                        </Text>
                        <Text>
                            <Text style={styles.Title3}>R$</Text> <Text style={styles.Title4}> 5,00</Text>
                        </Text>
                    </View>
                    <View style={styles.ContainerImg}>
                        <Image source={require('../../../../assets/img/cheesy-bread.png')} style={styles.Img} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default CardProduct;