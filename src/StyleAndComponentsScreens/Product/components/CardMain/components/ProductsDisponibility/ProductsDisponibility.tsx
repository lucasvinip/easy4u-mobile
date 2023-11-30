import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles, shadowStyle } from './style';

interface ProductsDisponibilityProps {
    id: number | undefined,
    name: string | undefined,
    photo: string | undefined,
    productType: string | undefined

}

const ProductsDisponibility = ({
    id,
    name,
    photo,
    productType
}: ProductsDisponibilityProps) => {
    return (
        <View style={[styles.Products, shadowStyle]}>
            <View style={styles.AboutProducts}>
                <Image source={{uri: photo}} style={styles.Img} />
                <View style={styles.NameAndDescription}>
                    <Text style={styles.Name}>{name}</Text>
                    <Text style={styles.Description}>Verifique nossa infinidade de {productType}</Text>
                    <View style={styles.ContainerIcon}>
                        <MaterialCommunityIcons name={'cart-plus'} style={styles.Icon} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProductsDisponibility;