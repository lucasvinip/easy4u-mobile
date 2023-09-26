import React from 'react';
import { TouchableOpacity, Text, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {styles} from './style'
import { AppTexts } from '../../../../assets/strings';

const ButtonGetOut = () => {
    return (
        <TouchableOpacity style={styles.Button}>
            <AntDesign name='logout' style={styles.Icon} />
            <Text style={styles.Title}>{AppTexts.Get_Out}</Text>
        </TouchableOpacity>
    );
};

export default ButtonGetOut;