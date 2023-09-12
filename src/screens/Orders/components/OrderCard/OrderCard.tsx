import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {styles} from './style'

import theme from '../../../../styles/theme';
import { AppTexts } from '../../../../assets/strings';
import Button from '../../../../components/Button/Button';

interface Item {
    id: string;
    title: string;
    date: string;
    price: string;
    status: string;
    imageURL: string;
}

const data: Item[] = [
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

function OrderCard() {
    const renderItem = ({ item }: { item: Item }) => (
        item.status === 'Pedido Fechado' ? (
            <View style={{ paddingBottom: RFValue(30), alignItems: 'center', justifyContent: 'center' }} >
                <View style={styles.Container}>
                    <View style={styles.ContainerItems}>
                        <Image source={{ uri: item.imageURL }} style={styles.Img} />
                        <View style={{ justifyContent: 'space-evenly' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.Title}>
                                    {item.title}
                                </Text>
                                <Text style={styles.Date}>
                                    {item.date}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                                <Text>
                                    <Text style={styles.R$}>R$</Text> <Text style={styles.Price}>{item.price}</Text>
                                </Text>
                                <Text style={styles.Status}>
                                    {item.status}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        ) :
            <View style={{ paddingBottom: RFValue(30), alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.Container}>
                    <View style={styles.ContainerItems}>
                        <Image source={{ uri: 'https://picsum.photos/700' }} style={styles.Img} />
                        <View style={{ justifyContent: 'space-evenly' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.Title}>
                                    {item.title}
                                </Text>
                                <Text style={styles.Date}>{item.date}</Text>
                            </View>
                            <Button
                                text={AppTexts.Check_QRcode}
                                fontFamily={theme.FONTS.Popp700}
                                background={theme.COLORS.OrangeFF6C44}
                                width={120}
                                height={25}
                                borderRadius={100}
                                fontSize={10}
                            />
                        </View>
                    </View>
                </View>
            </View>

    );

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            
        />
    );
}

export default OrderCard;


