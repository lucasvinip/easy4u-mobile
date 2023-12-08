import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DefaultTheme } from 'react-native-paper';
import {
    Text,
    View,
    ActivityIndicator
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/Button/Button';
import theme from '../styles/theme';
import InputText from '../components/CustomTextInput/CustomTextInput';
import { AppTexts } from '../assets/strings';
import { styles } from '../StyleAndComponentsScreens/ForgotPassword/style';
import UseFonts from '../hooks/useFonts';
import { performApi } from '../utils/api';

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',
    },
};

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [sucess, setSucess] = useState<string>("");
    const [erro, setErro] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleEmailFromUser = (email: string) => {
        setEmail(email);
    };

    const sendForgotPassword = async () => {
        setLoading(true);

        try {
            const data = await performApi.sendData("forgot-password", "POST", { email });
            if (data.statusCode === 201) {
                setLoading(false);
                setSucess("Email enviado com sucesso!");
                setErro("");
            } else {
                setLoading(false);
                setErro("Houve um erro ao enviar o email, tente novamente!");
                setSucess("");
            }
        } catch (error) {
            setErro("Houve um erro ao enviar o email, tente novamente!");
            setSucess("");
        } finally {
            setLoading(false);
        }
    };

    return (
        <UseFonts>
            <StatusBar
                style='dark'
                translucent backgroundColor={theme.COLORS.Whiteffffff}
            />
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <View style={styles.Screen}>
                    {loading && (
                        <ActivityIndicator
                            style={{ justifyContent: 'center', alignItems: 'center', height: "100%", width: "100%" }}
                            size={75}
                            color={theme.COLORS.OrangeFF6C44}
                        />
                    )}
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
                            data={email}
                            onChange={handleEmailFromUser}
                            secureTextEntry
                        />
                        <View style={styles.ContainerButton}>
                            {sucess && <Text style={styles.TextSucess}>{sucess}</Text>}
                            {erro && <Text style={styles.TextError}>{erro}</Text>}
                            <Button
                                text={AppTexts.Reset_Password.toUpperCase()}
                                fontFamily={theme.FONTS.Popp700}
                                background={theme.COLORS.OrangeFF6C44}
                                width={260}
                                height={40}
                                borderRadius={8}
                                fontSize={14}
                                onPress={sendForgotPassword}
                                
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    )
};

export default ForgotPassword;
