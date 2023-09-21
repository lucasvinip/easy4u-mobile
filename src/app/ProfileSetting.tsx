import * as React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Card, DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import theme from '../styles/theme';
import TouchTextAlter from '../screens/ProfileSetting/components/TouchTextAlter'
import InputText from '../components/TextInput/inputText';
import { AppTexts } from '../assets/strings';
import Button from '../components/Button/Button';
import {
    styles
} from '../screens/ProfileSetting/style'
import HeaderNamePage from '../components/HeaderNamePage/HeaderNamePage';
import UseFonts from '../assets/useFonts';

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',
    },
};

const ProfileSetting = () => (
    <UseFonts>
        <SafeAreaView>
            <View style={styles.Container}>
                <View style={styles.ContainerHeader}>
                    <Card style={styles.HeaderCard}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.CardImg} />
                        <TouchableOpacity>
                            <AntDesign name='camera' style={{
                                color: theme.COLORS.BlackRgba3419081,
                                fontSize: 20,
                                textAlign: 'right',
                            }} />
                        </TouchableOpacity>
                    </Card>
                </View>
                <ScrollView>
                    <InputText
                        label='NOME COMPLETO'
                        mode='flat'
                        keyboardType='default'
                        underlineColor={theme.COLORS.Gray868686}
                        theme={themeTextInput}
                        background='white'
                        fontSize={12}
                        fontFamily={theme.FONTS.Popp400}
                        paddingTop={18}
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
                    />
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchTextAlter />
                    </View>
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

                    <View style={{ alignItems: 'flex-end', paddingBottom: 15 }}>
                        <TouchTextAlter />
                    </View>

                    <View style={styles.ContainerButton}>
                        <Button
                            text={AppTexts.Change_Settings}
                            fontFamily={theme.FONTS.Popp700}
                            background={theme.COLORS.OrangeFF6C44}
                            width={280}
                            height={42}
                            borderRadius={8}
                            fontSize={14}
                        />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView >
    </UseFonts>
);

export default ProfileSetting;