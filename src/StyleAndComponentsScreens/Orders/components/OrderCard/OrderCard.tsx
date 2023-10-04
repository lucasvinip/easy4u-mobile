import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    FlatList
} from 'react-native';


import { styles, shadowStyle} from './style';
import theme from '../../../../styles/theme';
import { AppTexts } from '../../../../assets/strings';
import Button from '../../../../components/Button/Button';

interface OrderCardProps {
    id: string,
    date: string,
    imageURL: string,
    status: string
}

const data: OrderCardProps[] = [
    {
        id: '1',
        date: '10/08/2023',
        imageURL: 'https://picsum.photos/700',
        status: 'Check Order'
    },
    {
        id: '2',
        date: '12/08/2023',
        imageURL: 'https://picsum.photos/701',
        status: 'Order Again'
    },
    {
        id: '3',
        date: '12/08/2023',
        imageURL: 'https://picsum.photos/701',
        status: 'Order Again'
    },
    {
        id: '4',
        date: '12/08/2023',
        imageURL: 'https://picsum.photos/701',
        status: 'Order Again'
    },
    {
        id: '5',
        date: '12/08/2023',
        imageURL: 'https://picsum.photos/701',
        status: 'Order Again'
    },
    {
        id: '6',
        date: '12/08/2023',
        imageURL: 'https://picsum.photos/701',
        status: 'Order Again'
    },
    {
        id: '7',
        date: '12/08/2023',
        imageURL: 'https://picsum.photos/701',
        status: 'Order Again'
    },
];

const OrderCard = () => {
    const renderItem = ({ item }: { item: OrderCardProps }) => (
        item.status == 'Check Order' ? (
            <View style={styles.Container}>
                <TouchableOpacity style={[styles.Card, shadowStyle]}>
                    <View>
                        <View>
                            <Text style={styles.DateOpen}>
                                {item.date}
                            </Text>
                        </View>
                        <View style={styles.ContainerItems}>
                            <View style={styles.Items}>

                                <View style={styles.Titles}>
                                    <Text
                                        style={styles.OrderTitleOpen}>
                                        Pedido #00{item.id}
                                    </Text>
                                    <Button
                                        text={AppTexts.Check_Order.toLocaleUpperCase()}
                                        fontFamily={theme.FONTS.Popp700}
                                        background={theme.COLORS.OrangeFF6C44}
                                        width={150}
                                        height={30}
                                        borderRadius={30}
                                        fontSize={10}
                                    />
                                </View>
                                <Image source={{ uri: item.imageURL }} style={styles.Img} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        ) : (
            <View style={styles.Container}>
                <TouchableOpacity style={[styles.Card, shadowStyle]}>
                    <View>
                        <View>
                            <Text style={styles.DateClosed}>
                                {item.date}
                            </Text>
                        </View>
                        <View style={styles.ContainerItems}>
                            <View style={styles.Items}>
                                <Image source={{ uri: item.imageURL }} style={styles.Img} />
                                <View style={styles.Titles}>
                                    <Text
                                        style={styles.OrderTitle}>
                                        Pedido #00{item.id}
                                    </Text>
                                    <Button
                                        text={AppTexts.Order_Again.toLocaleUpperCase()}
                                        fontFamily={theme.FONTS.Popp700}
                                        background={theme.COLORS.Gray888888}
                                        width={150}
                                        height={30}
                                        borderRadius={30}
                                        fontSize={10}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    )
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
        />
    );
};

export { OrderCard };

