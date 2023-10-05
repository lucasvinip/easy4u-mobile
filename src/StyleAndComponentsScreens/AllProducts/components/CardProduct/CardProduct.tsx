import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { AppTexts } from '../../../../assets/strings';

import { styles, shadowStyle } from './style';
import { Link } from 'expo-router';

interface ProductsProps {
    name: string,
    price: number
}

const CardProduct = ({name, } : ProductsProps) => {
    return (
        <View style={[styles.Container, shadowStyle]}>
            <Link href={'/Product'} asChild>
                <TouchableOpacity>
                    <View style={styles.ContainerCard}>
                        <View style={styles.CardItems}>
                            <View style={styles.Description}>
                                <Text style={styles.Title1}>
                                    {name}
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
            </Link>
        </View>
    )
};

export default CardProduct;