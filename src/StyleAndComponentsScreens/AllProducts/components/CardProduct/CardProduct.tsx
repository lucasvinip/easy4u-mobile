import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { styles, shadowStyle } from './style';
import { Link } from 'expo-router';

interface ProductsProps {
    id: number
    name: string,
    price: number,
    description: string,
    photo: any
}

const CardProduct = ({ name, price, description, photo, id}: ProductsProps) => {
    return (
        <View style={[styles.Container, shadowStyle]}>
            <Link href={{
                pathname: '/product/[id]',
                params: {id: id}
            }} asChild>
                <TouchableOpacity>
                    <View style={styles.ContainerCard}>
                        <View style={styles.CardItems}>
                            <View style={styles.Description}>
                                <Text style={styles.Title1}>
                                    {name}
                                </Text>
                                <Text style={styles.Title2}>
                                    {description}
                                </Text>
                                <Text>
                                    <Text style={styles.Title3}>R$</Text> <Text style={styles.Title4}> {price}</Text>
                                </Text>
                            </View>
                            <View style={styles.ContainerImg}>
                                <Image source={{ uri: photo }} style={styles.Img} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Link>
        </View>
    )
};

export default CardProduct;