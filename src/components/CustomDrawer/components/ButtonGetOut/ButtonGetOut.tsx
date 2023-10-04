import React from 'react';
import { TouchableOpacity, Text, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style'
import { AppTexts } from '../../../../assets/strings';
import { Link, router } from "expo-router"
import AsyncStorage from '@react-native-async-storage/async-storage';

const ButtonGetOut = () => {

    return (
        <Link replace href={'/'} asChild>
            <TouchableOpacity style={styles.Button} onPress={() => {
                AsyncStorage.removeItem("token")
            }}>
                <AntDesign name='logout' style={styles.Icon} />
                <Text style={styles.Title}>{AppTexts.Get_Out}</Text>
            </TouchableOpacity>
        </Link>
    );
};

export default ButtonGetOut;