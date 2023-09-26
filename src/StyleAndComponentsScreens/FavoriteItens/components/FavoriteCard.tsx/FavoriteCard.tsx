import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import { styles } from './style';

interface ItemsFavoriteProps {
    id: string;
    title: string;
    date: string;
    price: string;
    status: string;
    imageURL: string;
}

const data: ItemsFavoriteProps[] = [
    {
        id: '1',
        title: 'Croissant de Chocolate',
        date: '10/08/2023',
        price: '5,50',
        status: 'Pedido Aberto',
        imageURL: 'https://picsum.photos/700',
    },
    {
        id: '2',
        title: 'Croissant de Morango',
        date: '12/08/2023',
        price: '4,80',
        status: 'Pedido Fechado',
        imageURL: 'https://picsum.photos/701',
    },
    {
        id: '3',
        title: 'Croissant de Morango',
        date: '12/08/2023',
        price: '4,80',
        status: 'Pedido Fechado',
        imageURL: 'https://picsum.photos/701',
    },
    {
        id: '4',
        title: 'Croissant de Morango',
        date: '12/08/2023',
        price: '4,80',
        status: 'Pedido Fechado',
        imageURL: 'https://picsum.photos/701',
    },
    {
        id: '5',
        title: 'Croissant de Morango',
        date: '12/08/2023',
        price: '4,80',
        status: 'Pedido Fechado',
        imageURL: 'https://picsum.photos/701',
    },
    {
        id: '6',
        title: 'Croissant de Morango',
        date: '12/08/2023',
        price: '4,80',
        status: 'Pedido Fechado',
        imageURL: 'https://picsum.photos/701',
    },
    {
        id: '7',
        title: 'Croissant de Morango',
        date: '12/08/2023',
        price: '4,80',
        status: 'Pedido Fechado',
        imageURL: 'https://picsum.photos/701',
    },
];

function FavoriteCard() {
    const renderItem = ({item}: {item: ItemsFavoriteProps}) => (
        <TouchableOpacity style={styles.Container} >
            <View style={styles.Card}>
                <View style={styles.ContainerItems}>
                    <Image source={{ uri: item.imageURL }} style={styles.Img} />
                    <View style={styles.ContainerTexts}>
                        <Text style={styles.Text}>
                            {item.title}
                        </Text>
                        <View style={styles.ContainerPriceHeart}>
                            <Text>
                                <Text style={styles.R$}>R$</Text> <Text style={styles.Price}>{item.price}</Text>
                            </Text>
                            <TouchableOpacity>
                                <AntDesign name='delete' style={styles.Heart} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}

        />
    )
}

export { FavoriteCard };