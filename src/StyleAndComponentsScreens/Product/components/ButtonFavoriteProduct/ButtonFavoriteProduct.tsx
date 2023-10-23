import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';


import { styles, shadowStyle } from './style';
import theme from '../../../../styles/theme';
import { performApi } from '../../../../utils/api';

interface ButtonFavoriteProductProps {
    idProduct: any
}

const ButtonFavoriteProduct = ({ idProduct }: ButtonFavoriteProductProps) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false)


    const getUrl = async (path: string) => {
        const token = await AsyncStorage.getItem("token")

        if (!token) {
            router.push('/');
        } else {
            try {
                const data = await performApi.sendIdData(path, "POST", token)
                return data
            } catch (error) {
                alert("data not get:" + error)
            }
        }
    }
    const deleteUrl = async (path: string) => {
        const token = await AsyncStorage.getItem("token")

        if (!token) {
            router.push('/');
        } else {
            try {
                const data = await performApi.deleteData(path, token)
                return data
            } catch (error) {
                alert("delete not get:" + error)
            }
        }
    }
    const handleFavotiteProduct = async (id: any) => {
        setIsFavorite(!isFavorite)
        const apiDataFavoriteItem = await getUrl(`favorites/${id}`)
        console.log(apiDataFavoriteItem)
        console.log(id);
        
        if (!apiDataFavoriteItem)
            alert("erro!")
        else {
            try {
                if(!isFavorite == true)
                    apiDataFavoriteItem
                else{
                    const apiDataDeleteItem = await deleteUrl(`favorites/${id}`)
                    apiDataDeleteItem
                    console.log(apiDataDeleteItem);
                    
                }
            } catch (error) {
                alert("delete not get:" + error)
            }
        }
    }

    return (
        <TouchableOpacity style={styles.ContainerHeart} onPress={() => handleFavotiteProduct(idProduct)}>
            <View style={[styles.Heart, , shadowStyle, {
                backgroundColor: isFavorite == true
                    ? theme.COLORS.RedF15050
                    : theme.COLORS.Gray949494,
            }]}>
                <AntDesign name='heart' style={styles.Icon} />
            </View>
        </TouchableOpacity>
    );
};

export default ButtonFavoriteProduct;