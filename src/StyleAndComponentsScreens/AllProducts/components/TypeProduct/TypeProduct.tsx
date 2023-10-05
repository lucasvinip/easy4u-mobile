import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { AppTexts } from '../../../../assets/strings';
import { styles } from './style';
import { performApi } from '../../../../utils/api';

const getTokenFromUser = async () => {
    console.log( await AsyncStorage.getItem("token"));
    return await AsyncStorage.getItem("token")
}

const handleUrl = async () =>{
    getTokenFromUser()
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWF0aGV1c1NpcXVlaXJhIiwiaWQiOjE3NCwiaWF0IjoxNjk2NDY2NzgxLCJleHAiOjE2OTY0NjczODF9.A9ohpMsrjYwol0eyNQNcfm18mlXHJOCVho8dgJaRmZQ'
    let header = `Bearer ${token}`
    const data = await performApi.getData('products', header)
    console.log(data);
    
}

handleUrl()

const TypeProduct = () => {
    return (
        <TouchableOpacity style={styles.Container}>
            <Text style={styles.Title}>
                {AppTexts.All_Products}
            </Text>
        </TouchableOpacity>
    );
}

export default TypeProduct;