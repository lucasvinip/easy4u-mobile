import React from 'react';
import { View, Image, Text, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import { styles } from './style';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../../styles/theme';

interface ItemsFavorite {
    id: string;
    title: string;
    date: string;
    price: string;
    status: string;
    imageURL: string;
}

const data: ItemsFavorite[] = [
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
    const renderItem = ({ item }: { item: ItemsFavorite }) => (
        <View style={{ paddingBottom: RFValue(30), alignItems: 'center', justifyContent: 'center' }} >
            <View style={styles.Container}>
                <View style={styles.ContainerItems}>
                    <Image source={{ uri: item.imageURL }} style={styles.Img} />
                    <View style={{ justifyContent: 'space-evenly' }}>
                        <View style={{ flexDirection: 'row', alignContent: 'center'}}>
                            <Text style={styles.Title}>
                                {item.title}
                            </Text>
                            <AntDesign name='heart' style={styles.Heart} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                            <Text>
                                <Text style={styles.R$}>R$</Text> <Text style={styles.Price}>{item.price}</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
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