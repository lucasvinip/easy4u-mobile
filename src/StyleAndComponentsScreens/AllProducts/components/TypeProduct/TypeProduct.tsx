import React, { useEffect } from 'react';
import { TouchableOpacity, Text, Alert, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { AppTexts } from '../../../../assets/strings';
import { styles } from './style';
import { performApi } from '../../../../utils/api';

interface FilterProductsProps{
    productType: string
}


const TypeProduct = ({productType}: FilterProductsProps) => {
    return (
        <TouchableOpacity style={styles.Container}>
            <Text style={styles.Title}>
                {productType}
            </Text>
        </TouchableOpacity>
    );
}

export default TypeProduct;