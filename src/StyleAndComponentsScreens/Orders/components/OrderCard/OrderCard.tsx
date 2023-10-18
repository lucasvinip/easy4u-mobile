import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';


import { styles, shadowStyle } from './style';
import theme from '../../../../styles/theme';
import { AppTexts } from '../../../../assets/strings';
import Button from '../../../../components/Button/Button';

interface OrderCardProps {
    id: number,
    date: string,
    photo: string,
    status: string,
    onPress?: () => void
}

function OrderCard({ status, date, id, photo, onPress }: OrderCardProps) {
    return (
        status === 'ACTIVE' ? (
            <View style={styles.Container}>
                <TouchableOpacity style={[styles.Card, shadowStyle]} onPress={onPress}>
                    <View>
                        <View>
                            <Text style={styles.DateOpen}>
                                {date}
                            </Text>
                        </View>
                        <View style={styles.ContainerItems}>
                            <View style={styles.Items}>
                                <View style={styles.Titles}>
                                    <Text
                                        style={styles.OrderTitleOpen}>
                                        Pedido #00{id}
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
                                <Image source={{ uri: photo }} style={styles.Img} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        ) : (
            <View style={styles.Container}>
                <TouchableOpacity style={[styles.Card, shadowStyle]} onPress={onPress}>
                    <View>
                        <View>
                            <Text style={styles.DateClosed}>
                                {date}
                            </Text>
                        </View>
                        <View style={styles.ContainerItems}>
                            <View style={styles.Items}>
                            <Image source={{ uri: photo }} style={styles.Img} />
                                <View style={styles.Titles}>
                                    <Text
                                        style={styles.OrderTitle}>
                                        Pedido #00{id}
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
};


export default OrderCard