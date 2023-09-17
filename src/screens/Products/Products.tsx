import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { DefaultTheme } from 'react-native-paper';

import { styles } from './style';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';
import ButtonMoreOrLess from '../../components/ButtonMoreOrLess/ButtonMoreOrLess';
import InputText from '../../components/TextInput/inputText';
import ButtonContinue from './components/ButtonContinue/ButtonContinue';

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: theme.COLORS.OrangeFF6C44,


    },
};

const Products = () => {
    return (
        <View>
            <StatusBar
                style='dark'
                backgroundColor='transparent'
            />
            <View style={styles.Container}>
                <Image source={require('../../assets/img/lanche.png')} style={styles.Img} />
                <View>
                    <View style={styles.ContainerMain}>
                        <View style={styles.Main}>
                            <View style={{ width: '92%', height: '6%', justifyContent: 'flex-end' }}>
                                <AntDesign name='heart' style={{
                                    color: theme.COLORS.RedF15050,
                                    fontSize: 30,
                                    textAlign: 'right',
                                }} />
                            </View>
                            <View>
                                <Text style={{ fontFamily: theme.FONTS.Popp600, fontSize: 22 }}>
                                    Salgado Assado
                                </Text>
                            </View>
                            <View style={{paddingBottom: 20}}>
                                <Text style={{ fontFamily: theme.FONTS.Popp600, fontSize: 16 }}>
                                    {AppTexts.Available}
                                </Text>
                                <ScrollView style={{ height: '15%', width: '50%'}} showsVerticalScrollIndicator={false}>
                                    <Text style={{fontFamily: theme.FONTS.Popp500, fontSize: 12 , color: theme.COLORS.Gray37C7C7A, textAlign: 'center'}} >{AppTexts.Croassaint_Chocolate}</Text>
                                    <Text style={{fontFamily: theme.FONTS.Popp500, fontSize: 12 , color: theme.COLORS.Gray37C7C7A, textAlign: 'center'}} >{AppTexts.Croassaint_Chocolate}</Text>
                                    <Text style={{fontFamily: theme.FONTS.Popp500, fontSize: 12 , color: theme.COLORS.Gray37C7C7A, textAlign: 'center'}} >{AppTexts.Croassaint_Chocolate}</Text>
                                    <Text style={{fontFamily: theme.FONTS.Popp500, fontSize: 12 , color: theme.COLORS.Gray37C7C7A, textAlign: 'center'}} >{AppTexts.Croassaint_Chocolate}</Text>
                                    <Text style={{fontFamily: theme.FONTS.Popp500, fontSize: 12 , color: theme.COLORS.Gray37C7C7A, textAlign: 'center'}} >{AppTexts.Croassaint_Chocolate}</Text>
                                    <Text style={{fontFamily: theme.FONTS.Popp500, fontSize: 12, color: theme.COLORS.Gray37C7C7A, textAlign: 'center'}} >{AppTexts.Croassaint_Chocolate}</Text>
                                    <Text style={{fontFamily: theme.FONTS.Popp500, fontSize: 12 , color: theme.COLORS.Gray37C7C7A, textAlign: 'center'}} >{AppTexts.Croassaint_Chocolate}</Text>
                                </ScrollView>
                            </View>
                            <View style={{ height: '12%' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%' }}>
                                    <View style={{ alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={{ textAlign: 'left', width: '85%', color: theme.COLORS.Gray37C7C7A, fontFamily: theme.FONTS.Popp600, fontSize: 12 }}> {AppTexts.Any_Observation}</Text>
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
                                        <Text style={{ textAlign: 'left', width: '100%', color: theme.COLORS.Gray37C7C7A, fontFamily: theme.FONTS.Popp600, fontSize: 12}}>
                                            {AppTexts.Amount}
                                        </Text>
                                        <ButtonMoreOrLess />
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <ButtonContinue/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export { Products };
