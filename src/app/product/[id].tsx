import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';

import { styles, shadowStyle } from '../../StyleAndComponentsScreens/Product/style';
import UseFonts from '../../styles/useFonts';
import { router, useLocalSearchParams } from 'expo-router';
import CardMain from '../../StyleAndComponentsScreens/Product/components/CardMain/CardMain';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { performApi } from '../../utils/api';

interface CardProductProps{
    name: string,
    price: number,
    photo: string
}

const Product = () => {
    const [dataProduct, setDataProduct] = useState<CardProductProps | null>(null)

    const { id } = useLocalSearchParams()
    
    const url = async (path: string) => {
        const token = await AsyncStorage.getItem("token")

        if (!token) {
            router.push('/');
        } else {
            try {
                const data = await performApi.getData(path, token)
                return data
            } catch (error) {
                return null;
            }
        }

    }

    const handleCardProducts = async () => {
        const apiDataProducts = await url(`products/${id}`)
        
        try {
            if(!apiDataProducts)
                alert("erro!")
            else{
                const data = await apiDataProducts
                setDataProduct(data)
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        handleCardProducts()
    }, []);

    return (
        <UseFonts>
            <StatusBar
                style='dark'
                backgroundColor='transparent'
            />
            <SafeAreaView>
                <View style={styles.Background}>
                    <Image source={{uri: String(dataProduct?.photo)}} style={styles.Img} />
                    <View style={{ height: '9%', width: '15%', justifyContent: 'flex-end', alignItems: 'center' }}>
                    </View>
                    <View style={styles.Backgroung2}>
                        <View style={styles.Screen}>
                            <View style={styles.Container}>
                                <View style={styles.ContainerIcon}>
                                    <TouchableOpacity style={styles.ContainerCircle}>
                                        <View style={[styles.Circle, , shadowStyle]}>
                                            <AntDesign name='heart' style={styles.Icon} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ContainerMain}>
                                    <CardMain name={dataProduct?.name} price={dataProduct?.price} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    );
};

export default Product;


