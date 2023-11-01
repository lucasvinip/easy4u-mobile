import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { AppTexts } from '../../../../assets/strings';
import { styles, shadowStyle } from './style'
import { addCartItem } from '../../../../redux/features/counter/counterSlice';


interface ButtonAddCartProps {
    id: number
    price: any,
    quantity: number
}

const ButtonAddCart = ({ price, id, quantity}: ButtonAddCartProps) => {

    const dispatch = useDispatch();

    const addedItems = useSelector(state => state)
    console.log(addedItems);
    

    const handleAddCart = () =>{
        const item: any = {id, price, quantity}
        console.log(item);
        
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

