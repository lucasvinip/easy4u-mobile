import React from 'react';
import { Text, ScrollView } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


import {
    Container,
    ContainerHeader,
    ContainerButton
} from './style'
import { AppTexts } from '../../assets/strings';
import InputText from '../../components/TextInput/inputText';
import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import Button from '../../components/Button/Button';

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',


    },
};

const CreateAccount = () => {
    return (
        <SafeAreaView>
            <Container>

                <ContainerHeader>

                    <ContainerHeader.Text>
                        {AppTexts.Create_a_Account_now}
                    </ContainerHeader.Text>

                    <ContainerHeader.SubText>
                        {AppTexts.Join_Name_Email_Password}
                        <ContainerHeader.SubText2>  {AppTexts.Already_Account}</ContainerHeader.SubText2>
                    </ContainerHeader.SubText>

                </ContainerHeader>
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
                        label='CPF'
                        mode='flat'
                        keyboardType='numeric'
                        underlineColor={theme.COLORS.Gray868686}
                        theme={themeTextInput}
                        background='white'
                        fontSize={12}
                        fontFamily={theme.FONTS.Popp400}
                        paddingTop={14}
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
                </ScrollView>
                <ContainerButton>

                    <Button
                        text={AppTexts.Join}
                        fontFamily={theme.FONTS.Popp700}
                        background={theme.COLORS.OrangeFF6C44}
                        width={260}
                        height={40}
                        borderRadius={4}
                        fontSize={14}
                    />

                </ContainerButton>

                <Text style={{ paddingTop: 25, textAlign: 'center', fontSize: RFValue(14), fontFamily: theme.FONTS.Popp400, color: theme.COLORS.Gray868686 }}>
                    {AppTexts.Privacy_Security}
                </Text>

            </Container>

        </SafeAreaView>
    )
};

export { CreateAccount };