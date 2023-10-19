import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, router } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { styles, shadowStyle } from './style';

interface ProductsProps {
    id: number,
    name: string,
    price: number,
    description: string,
    photo: any,

}

const CardProduct = ({ id, name, price, description, photo }: ProductsProps) => {

    // const handleProductClick = async (productId: number) => {
    //     await AsyncStorage.setItem('productId', productId.toString())
    //     router.push('/Product')
    // }
    return (
        <Link href={{
            pathname: '/product/[id]',
            params: {id: id}
        }} asChild>
            <TouchableOpacity >
                <View style={[styles.Container, shadowStyle]}>
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
                </View>
            </TouchableOpacity>
        </Link>
    )
};

export default CardProduct;
