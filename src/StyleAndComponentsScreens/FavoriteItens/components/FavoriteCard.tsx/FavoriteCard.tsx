import React from 'react';
import {
    View,
    Image,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import { styles, shadowStyle } from './style';

interface ItemsFavoriteProps {
    name: string;
    price: string;
    photo: string;
    onPress: () => void;
}

function FavoriteCard({name, photo, price, onPress}:ItemsFavoriteProps) {
    return (
        <View style={[styles.Container]} >
            <TouchableOpacity style={[styles.Card, shadowStyle]}>
                <View style={styles.ContainerItems}>
                    <Image source={{ uri: photo }} style={styles.Img} />
                    <View style={styles.ContainerTexts}>
                        <Text style={styles.Text}>
                            {name}
                        </Text>
                        <View style={styles.ContainerPrice}>
                            <Text>
                                <Text style={styles.R$}>R$</Text> <Text style={styles.Price}>{price}</Text>
                            </Text>
                            <TouchableOpacity onPress={onPress}>
                                <AntDesign name='delete' style={styles.Delete} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default FavoriteCard;