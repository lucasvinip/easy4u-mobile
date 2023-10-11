import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { DefaultTheme } from 'react-native-paper';

import { styles, shadowStyle } from '../../StyleAndComponentsScreens/Product/style';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';
import ButtonMoreOrLess from '../../components/ButtonMoreOrLess/ButtonMoreOrLess';
import InputText from '../../components/CustomTextInput/CustomTextInput';
import ButtonAddCart from '../../StyleAndComponentsScreens/Product/components/ButtonCart/ButtonAddCart';
import UseFonts from '../../styles/useFonts';
import { useGlobalSearchParams } from 'expo-router';

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: theme.COLORS.OrangeFF6C44,


    },
};

const Product = () => {
    const { name, price, photo } = useGlobalSearchParams();

    return (
        <UseFonts>
            <StatusBar
                style='dark'
                backgroundColor='transparent'
            />
            <SafeAreaView>
                <View style={styles.Background}>
                    <Image source={{uri: String(photo)}} style={styles.Img} />
                    <View style={styles.Backgroung2}>
                        <View style={styles.Screen}>
                            <View style={styles.Container}>
                                <View style={styles.ContainerIcon}>
                                    <TouchableOpacity style={styles.ContainerCircle}>
                                        <View style={[styles.Circle, , shadowStyle]}>
                                            <AntDesign name='heart' style={styles.Icon} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ContainerMain}>
                                    <View style={styles.Main}>
                                        <Text style={styles.TypeProductName}>
                                            {name}
                                        </Text>
                                        <View style={styles.ContainerAvailable}>
                                            <Text style={styles.AvailableText}>
                                                {AppTexts.Available}
                                            </Text>
                                        </View>
                                        <View style={styles.ContainerAmount}>
                                            <View>
                                                <View>
                                                    <Text style={styles.AmountText}>
                                                        {AppTexts.Amount}
                                                    </Text>
                                                    <ButtonMoreOrLess />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.ContainerButton}>
                                            <ButtonAddCart price={price} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    );
};

export default Product;


