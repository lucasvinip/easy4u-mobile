import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { DefaultTheme } from 'react-native-paper';


// import { Container } from './styles';
import InputText from '../../components/TextInput/inputText';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';
import CardProduct from '../../StyleAndComponentsScreens/AllProducts/components/CardProduct/CardProduct';

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',


    },
};
const AllProducts = () => {
    return (
        <SafeAreaView style={{backgroundColor: 'orange'}}>
            
        </SafeAreaView>
    );
};

export default AllProducts;
