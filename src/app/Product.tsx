import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { DefaultTheme } from 'react-native-paper';

import { styles, shadowStyle } from '../StyleAndComponentsScreens/Product/style';
import theme from '../styles/theme';
import { AppTexts } from '../assets/strings';
import ButtonMoreOrLess from '../components/ButtonMoreOrLess/ButtonMoreOrLess';
import InputText from '../components/CustomTextInput/CustomTextInput';
import ButtonAddCart from '../StyleAndComponentsScreens/Product/components/ButtonCart/ButtonAddCart';
import UseFonts from '../styles/useFonts';

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: theme.COLORS.OrangeFF6C44,


    },
};

const Product = () => {
    return (
        <UseFonts>
            <StatusBar
                style='dark'
                backgroundColor='transparent'
            />
            <SafeAreaView>
                <View style={styles.Background}>
                    <Image source={require('../assets/img/lanche.png')} style={styles.Img} />
                    <View style={styles.Backgroung2}>
                        <View style={styles.ContainerIcon}>
                            <TouchableOpacity style={styles.ContainerCircle}>
                                <View style={[styles.Circle, , shadowStyle]}>
                                    <AntDesign name='heart' style={styles.Icon} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.Screen}>
                            <View style={styles.Container}>
                                <View style={styles.ContainerMain}>
                                    <View style={styles.Main}>
                                        <Text style={styles.TypeProductName}>
                                            Salgado Assado
                                        </Text>
                                        <View style={styles.ContainerAvailable}>
                                            <Text style={styles.AvailableText}>
                                                {AppTexts.Available}
                                            </Text>
                                            <ScrollView style={styles.AvailableScroll} showsVerticalScrollIndicator={false}>
                                                <Text style={styles.ScrollText} >{AppTexts.Croassaint_Chocolate}</Text>
                                                <Text style={styles.ScrollText} >{AppTexts.Croassaint_Chocolate}</Text>
                                                <Text style={styles.ScrollText} >{AppTexts.Croassaint_Chocolate}</Text>
                                                <Text style={styles.ScrollText} >{AppTexts.Croassaint_Chocolate}</Text>
                                                <Text style={styles.ScrollText} >{AppTexts.Croassaint_Chocolate}</Text>
                                                <Text style={styles.ScrollText} >{AppTexts.Croassaint_Chocolate}</Text>
                                                <Text style={styles.ScrollText} >{AppTexts.Croassaint_Chocolate}</Text>
                                            </ScrollView>
                                        </View>
                                        <View style={styles.ContainerObservationAmount}>
                                            <View style={styles.ObservationAmount}>
                                                <View style={styles.ContainerObservation}>
                                                    <Text style={styles.ObservationText}> {AppTexts.Any_Observation}</Text>
                                                    <InputText
                                                        mode='flat'
                                                        keyboardType='default'
                                                        theme={themeTextInput}
                                                        background='white'
                                                        fontSize={12}
                                                        fontFamily={theme.FONTS.Popp400}
                                                        width={200}
                                                        height={21}
                                                    />
                                                </View>
                                                <View>
                                                    <Text style={styles.AmountText}>
                                                        {AppTexts.Amount}
                                                    </Text>
                                                    <ButtonMoreOrLess />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.ContainerButton}>
                                            <ButtonAddCart />
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


{/* <View>
                <StatusBar
                    style='dark'
                    backgroundColor='transparent'
                />
                <View style={styles.Container}>
                    <Image source={require('../assets/img/lanche.png')} style={styles.Img} />
                    <View>
                        <View style={styles.ContainerMain}>
                            <View style={styles.Main}>
                                <TouchableOpacity style={styles.ContainerIcon}>
                                    <AntDesign name='heart' style={[styles.Icon, shadowStyle]} />
                                </TouchableOpacity>
                                <View>
                                   
                                </View>
                                
                                <View style={styles.ContainerObservationAmount}>
                                    <View style={styles.ObservationAmount}>
                                        <View style={styles.ContainerObservation}>
                                            <Text style={styles.ObservationText}> {AppTexts.Any_Observation}</Text>
                                            <InputText
                                                mode='flat'
                                                keyboardType='default'
                                                theme={themeTextInput}
                                                background='white'
                                                fontSize={12}
                                                fontFamily={theme.FONTS.Popp400}
                                                width={200}
                                                height={21}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.AmountText}>
                                                {AppTexts.Amount}
                                            </Text>
                                            <ButtonMoreOrLess />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.ContainerButton}>
                                    <ButtonAddCart />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View> */}