import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DefaultTheme } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

import Button from '../../components/Button/Button';
import theme from '../../styles/theme';
import InputText from '../../components/TextInput/inputText';
import { AppTexts } from '../../assets/strings';
import {
    Container,
    ContainerHeader,
    ContainerButton
} from './style';


const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',


    },
};

const ForgotPassword = () => {
    return (
        <SafeAreaView>

            <Container>

                <ContainerHeader>

                    <ContainerHeader.Text>
                        {AppTexts.Forgot_my_Password}
                    </ContainerHeader.Text>
                    <ContainerHeader.SubText>
                        {AppTexts.Put_your_Email}
                    </ContainerHeader.SubText>

                </ContainerHeader>

                <InputText
                    label='EMAIL'
                    mode='flat'
                    keyboardType='email-address'
                    underlineColor={theme.COLORS.Gray868686}
                    theme={themeTextInput}
                    background='white'
                    fontSize={12}
                    fontFamily={theme.FONTS.Popp400}
                    paddingTop={12}
                />
                <ContainerButton>
                    <Button
                        text={AppTexts.Reset_Password.toUpperCase()}
                        fontFamily={theme.FONTS.Popp700}
                        background={theme.COLORS.OrangeFF6C44}
                        width={260}
                        height={40}
                        borderRadius={4}
                        fontSize={14}
                    />
                </ContainerButton>

            </Container>

        </SafeAreaView>
    )
};

export { ForgotPassword };