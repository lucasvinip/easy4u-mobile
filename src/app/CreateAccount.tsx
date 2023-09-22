import React from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Link } from 'expo-router';

import UseFonts from '../styles/useFonts';
import { styles } from '../StyleAndComponentsScreens/CreateAccount/style';
import { AppTexts } from '../assets/strings';
import InputText from '../components/TextInput/inputText';
import theme from '../styles/theme';
import Button from '../components/Button/Button';

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',
    },
};

const CreateAccount = () => {
    return (
        <UseFonts>
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <View style={styles.Screen}>

                    <View style={styles.Container}>
                        <View style={styles.ContainerHeader}>
                            <Text style={styles.HeaderText}>
                                {AppTexts.Create_a_Account_now}
                            </Text>
                            <Text style={styles.HeaderSubText}>
                                {AppTexts.Join_Name_Email_Password}
                                <Link href={'/'} asChild>
                                    <Text style={styles.HeaderSubText2}> {AppTexts.Already_Account}
                                    </Text>
                                </Link>
                            </Text>
                        </View >
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <InputText
                                label='NOME COMPLETO'
                                mode='flat'
                                keyboardType='default'
                                underlineColor={theme.COLORS.Gray868686}
                                theme={themeTextInput}
                                background='white'
                                fontSize={12}
                                fontFamily={theme.FONTS.Popp400}
                                paddingTop={12}
                            />
                            <InputText
                                label='EMAIL'
                                mode='flat'
                                keyboardType='email-address'
                                underlineColor={theme.COLORS.Gray868686}
                                theme={themeTextInput}
                                background='white'
                                fontSize={12}
                                fontFamily={theme.FONTS.Popp400}
                                paddingTop={14}
                            />
                            <InputText
                                label='SENHA'
                                mode='flat'
                                keyboardType='default'
                                underlineColor={theme.COLORS.Gray868686}
                                theme={themeTextInput}
                                background='white'
                                fontSize={12}
                                fontFamily={theme.FONTS.Popp400}
                                paddingTop={14}
                            />

                            <View style={styles.ContainerButton}>
                                <Button
                                    text={AppTexts.Join}
                                    fontFamily={theme.FONTS.Popp700}
                                    background={theme.COLORS.OrangeFF6C44}
                                    width={290}
                                    height={43}
                                    borderRadius={8}
                                    fontSize={14}
                                />
                            </View>

                            <Text style={styles.PrivacySecurityText}>
                                {AppTexts.Privacy_Security}
                            </Text>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    );
};

export default CreateAccount;
