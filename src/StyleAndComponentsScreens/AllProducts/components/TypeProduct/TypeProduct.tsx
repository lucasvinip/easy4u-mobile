import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { AppTexts } from '../../../../assets/strings';
import { styles } from './style';


const TypeProduct = () => {
    return (
        <TouchableOpacity>
            <Text style={styles.Title}>
                {AppTexts.All_Products}
            </Text>
        </TouchableOpacity>
    );
}

export default TypeProduct;