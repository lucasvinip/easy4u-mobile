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
import { formatNumberToTypeBr } from '../../../../utils/formatNumber';

interface ItemsFavoriteProps {
    name: string;
    price: number;
    photo: string;
    onDeleteFavorite: () => void;
    onSelectItem: () => void;
}

function FavoriteCard({name, photo, price, onDeleteFavorite, onSelectItem}:ItemsFavoriteProps) {

    const formattedPrice = formatNumberToTypeBr(price)

    return (
        <View style={[styles.Container]} >
            <TouchableOpacity style={[styles.Card, shadowStyle]} onPress={onSelectItem}>
                <View style={styles.ContainerItems}>
                    <Image source={{ uri: photo }} style={styles.Img} />
                    <View style={styles.ContainerTexts}>
                        <Text style={styles.Text}>
                            {name}
                        </Text>
                        <View style={styles.ContainerPrice}>
                            <Text>
                                <Text style={styles.Price}>{formattedPrice}</Text>
                            </Text>
                            <TouchableOpacity onPress={onDeleteFavorite}>
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