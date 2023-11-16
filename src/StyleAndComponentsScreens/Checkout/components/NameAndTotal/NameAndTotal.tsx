// Seu componente ContainerTotal.js
import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import { styles } from './style';

interface ProductItemProps {
    price: number,
    name: string | undefined,
    id: number
}

const NameAndTotal = ({ price, name }: ProductItemProps) => {


    return (
        <View style={styles.Main}>
            <View style={styles.ContentMain}>
                <View style={styles.NameAndQuantityProduct}>
                    <Text style={styles.NameTitle}>
                        {name}
                    </Text>
                    <Text style={styles.QuantityTitle}>
                        1 x
                    </Text>
                </View>
                <Text style={styles.MainTitle}>
                    {price}
                </Text>
            </View>
        </View>
    );
};

export default NameAndTotal;
