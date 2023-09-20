import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { DefaultTheme } from 'react-native-paper';

import { styles, shadowStyle} from './style';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';
import ButtonMoreOrLess from '../../components/ButtonMoreOrLess/ButtonMoreOrLess';
import InputText from '../../components/TextInput/inputText';
import ButtonAddCart from './components/ButtonCart/ButtonAddCart';

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: theme.COLORS.OrangeFF6C44,


    },
};

const Product = () => {
    return (
        <View>
            <StatusBar
                style='dark'
                backgroundColor='transparent'
            />
            <View style={styles.Container}>
                <Image source={require('../../../assets/img/lanche.png')} style={styles.Img} />
                <View>
                    <View style={styles.ContainerMain}>
                        <View style={styles.Main}>
                            <TouchableOpacity style={styles.ContainerIcon}>
                                <AntDesign name='heart' style={[styles.Icon, shadowStyle]} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.TypeProductName}>
                                    Salgado Assado
                                </Text>
                            </View>
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
                                <ButtonAddCart/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export  default Product;
