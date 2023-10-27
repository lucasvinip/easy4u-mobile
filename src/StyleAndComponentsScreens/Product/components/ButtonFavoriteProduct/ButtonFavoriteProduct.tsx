import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

import { styles, shadowStyle } from './style';
import theme from '../../../../styles/theme';
import { performApi } from '../../../../utils/api';

interface ButtonFavoriteProductProps {
    idProduct: any;
    favorite: boolean;
}

const ButtonFavoriteProduct = ({ idProduct, favorite }: ButtonFavoriteProductProps) => {
    const [isFavorite, setIsFavorite] = useState<boolean>();

    const postUrl = async (path: string) => {
        const token = await AsyncStorage.getItem("token");

        if (!token) {
            router.push('/');
        } else {
            try {
                const data = await performApi.sendIdData(path, "POST", token);
                return data;
            } catch (error) {
                alert("data not get: " + error);
            }
        }
    };

    const deleteUrl = async (path: string) => {
        const token = await AsyncStorage.getItem("token");

        if (!token) {
            router.push('/');
        } else {
            try {
                const data = await performApi.deleteData(path, token);
                return data;
            } catch (error) {
                alert("delete not get: " + error);
            }
        }
    };

    const handleFavoriteProduct = async (id: any) => {
        if (!isFavorite) {
            const apiDataPostFavoriteItem = await postUrl(`favorites/${id}`);
            console.log(apiDataPostFavoriteItem);
        } else {
            const apiDataDeleteFavoriteItem = await deleteUrl(`favorites/${id}`);
            console.log(apiDataDeleteFavoriteItem);
        }

        setIsFavorite(!isFavorite);
    };

    useEffect(() => {
        setIsFavorite(favorite);
    }, [favorite]);

    return (
        <TouchableOpacity style={styles.ContainerHeart} onPress={() => handleFavoriteProduct(idProduct)}>
            <View style={[styles.Heart, shadowStyle, {
                backgroundColor: isFavorite
                    ? theme.COLORS.RedF15050
                    : theme.COLORS.Gray949494,
            }]}>
                <AntDesign name='heart' style={styles.Icon} />
            </View>
        </TouchableOpacity>
    );
};

export default ButtonFavoriteProduct;
