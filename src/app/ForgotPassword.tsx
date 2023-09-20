import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DefaultTheme } from 'react-native-paper';
import { Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


import Button from '../components/Button/Button';
import theme from '../styles/theme';
import InputText from '../components/TextInput/inputText';
import { AppTexts } from '../assets/strings';
import {
    styles
} from '../screens/ForgotPassword/style';
import UseFonts from '../assets/useFonts';
import { Link } from 'expo-router';
import HeaderNamePage from '../components/HeaderNamePage/HeaderNamePage';



const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',


    },
};



const ForgotPassword = () => {
    return (
        <UseFonts>
            <SafeAreaView>
               <HeaderNamePage href={'/'} name={AppTexts.Forgot_my_Password} width={300} paddingBottom={3}/>
                <View style={styles.Container}>
                    <View style={styles.ContainerHeader}>
                        <Text style={styles.HeaderText}>
                            {AppTexts.Forgot_my_Password}
                        </Text>
                        <Text style={styles.HeaderSubText}>
                            {AppTexts.Put_your_Email}
                        </Text>
                    </View>
                    <InputText
                        label='EMAIL'
                        mode='flat'
                        keyboardType='email-address'
                        underlineColor={theme.COLORS.Gray868686}
                        theme={themeTextInput}
                        background='white'
                        fontSize={12}
                        fontFamily={theme.FONTS.Popp400}

                    />
                    <View style={styles.ContainerButton}>
                        <Button
                            text={AppTexts.Reset_Password.toUpperCase()}
                            fontFamily={theme.FONTS.Popp700}
                            background={theme.COLORS.OrangeFF6C44}
                            width={260}
                            height={40}
                            borderRadius={8}
                            fontSize={14}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    )
};

export default ForgotPassword;