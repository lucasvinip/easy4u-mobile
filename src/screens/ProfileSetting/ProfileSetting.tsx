import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Card, DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import theme from '../../styles/theme';
import TouchTextAlter from './components/TouchTextAlter'
import InputText from '../../components/TextInput/inputText';
import { AppTexts } from '../../assets/strings';
import Button from '../../components/Button/Button';
import {
    Container,
    ContainerHeader,
    ContainerButton
} from './style'

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',


    },
};

const ProfileSetting = () => (
    <SafeAreaView>

        <Container>

            <ContainerHeader>

                <Card style={{ width: 125, height: 120, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{ width: 118, height: 118, borderRadius: 100, borderWidth: 1, borderColor: 'black' }} />
                    <TouchableOpacity>
                        <AntDesign name='camera' style={{
                            color: theme.COLORS.BlackRgba3419081,
                            fontSize: 20,
                            textAlign: 'right',
                        }} />
                    </TouchableOpacity>
                </Card>

            </ContainerHeader>

            <InputText
                label='NOME COMPLETO'
                mode='flat'
                keyboardType='default'
                underlineColor={theme.COLORS.Gray868686}
                theme={themeTextInput}
                background='white'
                fontSize={12}
                fontFamily={theme.FONTS.Popp400}
            />
            <TouchTextAlter />
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
            <TouchTextAlter />
            <InputText
                label='SENHA'
                mode='flat'
                keyboardType='default'
                underlineColor={theme.COLORS.Gray868686}
                theme={themeTextInput}
                background='white'
                fontSize={12}
                fontFamily={theme.FONTS.Popp400}

            />
            <TouchTextAlter />

            <ContainerButton>

                <Button
                    text={AppTexts.Change_Settings}
                    fontFamily={theme.FONTS.Popp700}
                    background={theme.COLORS.OrangeFF6C44}
                    width={260}
                    height={40}
                    borderRadius={4}
                    fontSize={14}
                />

            </ContainerButton>

        </Container>

    </SafeAreaView >
);

export { ProfileSetting };