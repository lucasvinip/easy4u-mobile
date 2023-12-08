import React, { useEffect } from 'react';
import { TouchableOpacity, Text,  } from 'react-native';


import { styles } from './style';

interface FilterProductsProps{
    productType: string,
    onPress: () => void 
}

const TypeProduct: React.FC<FilterProductsProps> = ({productType, onPress}) => {
    return (
        <TouchableOpacity style={styles.Container} onPress={onPress}>
            <Text style={styles.Title}>
                {productType}
            </Text>
        </TouchableOpacity>
    );
}

export default TypeProduct;