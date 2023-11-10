import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { AppTexts } from '../../../../assets/strings';
import { styles, shadowStyle } from './style'
import { addCartItem } from '../../../../redux/features/shoppingCart/shoppingCartSlice';


interface ButtonAddCartProps {
    id: number
    price: number,
    quantity?: number,
    photo: string | undefined,
    name: string | undefined

}

const ButtonAddCart = ({
    price,
    id,
    quantity,
    photo,
    name
}: ButtonAddCartProps) => {
    const dispatch = useDispatch();

    const handleAddCart = () => {
        const item: any = { id, price, quantity, name, photo }
        console.log("quantity quanto é" + item.quantity);
        
        dispatch(addCartItem(item))
    
    }

    return (
        <TouchableOpacity style={[styles.Container, shadowStyle]} onPress={handleAddCart}>
            <View style={styles.Touchable}>
                <Text style={styles.TouchableText}>
                    {AppTexts.Add_Cart}
                </Text>
                <Text style={styles.TouchableIcon}>
                    {price}
                </Text>
            </View>
        </TouchableOpacity>
    )
};
export default ButtonAddCart;

