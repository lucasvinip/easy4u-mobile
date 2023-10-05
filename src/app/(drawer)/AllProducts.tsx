import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DefaultTheme } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';


import { styles } from '../../StyleAndComponentsScreens/AllProducts/style'
import theme from '../../styles/theme';
import CardProduct from '../../StyleAndComponentsScreens/AllProducts/components/CardProduct/CardProduct';
import UseFonts from '../../styles/useFonts';
import CustomTextInput from '../../StyleAndComponentsScreens/AllProducts/components/CustomTextInput/CustomTextInput';
import TypeProduct from '../../StyleAndComponentsScreens/AllProducts/components/TypeProduct/TypeProduct';
import AsyncStorage from '@react-native-async-storage/async-storage';

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',


    },
};
const AllProducts = () => {
    // const getTokenFromUser = async () => {
    //     console.log(await AsyncStorage.getItem("token"))
    // // }

    // getTokenFromUser()

    return (
        <UseFonts>
            <StatusBar
                style='light'
                translucent backgroundColor={theme.COLORS.Orange4FE724C}
            />
            <SafeAreaView style={styles.SafeAreaView}>
                <View style={styles.ColorOrange}>
                    <View style={styles.ContainerColorBeige}>
                        <View style={styles.ColorBeige}></View>
                    </View>
                    <View style={styles.Container}>
                        <View style={styles.ContainerHeader}>
                            <View style={styles.Header}>
                                <View style={styles.ContainerInput}>
                                    <CustomTextInput />
                                </View>
                                <View style={styles.ContainerTypeProduct}>
                                    <ScrollView horizontal={true} contentContainerStyle={styles.TypeProduct} showsHorizontalScrollIndicator={false}>
                                        <TypeProduct />
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                        <ScrollView contentContainerStyle={styles.ContainerMain} showsVerticalScrollIndicator={false}>
                            <View style={styles.Main}>
                                <CardProduct />
                                <CardProduct />
                                <CardProduct />
                                <CardProduct />
                                <CardProduct />
                                <CardProduct />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    );
};

export default AllProducts;
