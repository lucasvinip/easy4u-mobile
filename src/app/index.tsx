import React, { useState } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/Button/Button';
import theme from '../styles/theme';
import { AppTexts } from '../assets/strings';
import InputText from '../components/CustomTextInput/CustomTextInput';
import { styles } from '../StyleAndComponentsScreens/Login/style';
import ButtonGoogle from '../StyleAndComponentsScreens/Login/components/ButtonGoogle/ButtonGoogle';
import UseFonts from '../hooks/useFonts';
import TouchText from '../StyleAndComponentsScreens/Login/components/TouchText/TouchText';
import { performApi } from '../utils/api';

const themeTextInput = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
  },
};

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [erro, setErro] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (email: string) => {
    setEmail(email);
    setErro("");
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
    setErro("");
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const data = await performApi.sendData("auth/signin", "POST", { email, password });
      if (data.statusCode !== 201) {
        setErro("Email ou Senha inserido de maneira inválida!");
      } else {
        await AsyncStorage.setItem("token", data.message);
        router.replace('/(drawer)/AllProducts');
      }
    } catch (error) {
      setErro("Ocorreu um erro durante o login.");
    } finally {
      setLoading(false);
    }
  };

  const disableErrorMessage = () => {
    setErro("")
  }


  return (
    <UseFonts>
      <StatusBar
        style='dark'
        translucent backgroundColor={theme.COLORS.Whiteffffff}
      />
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <View style={styles.Screen}>
          {loading && <ActivityIndicator
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: "100%",
              width: "100%"
            }} size={75} color={theme.COLORS.OrangeFF6C44}
          />
          }
          <View style={styles.Container}>
            <View style={styles.ContainerHeader}>
              <Text style={styles.HeaderText}>
                {AppTexts.Welcome}
              </Text>
              <Text style={styles.HeaderSubText}>
                {AppTexts.Enjoy_Cafeteria}
              </Text>
            </View>
            <View style={styles.ContainerInputs}>
              <InputText
                label='EMAIL'
                mode='flat'
                keyboardType='email-address'
                underlineColor={theme.COLORS.Gray868686}
                theme={themeTextInput}
                background='white'
                fontSize={12}
                fontFamily={theme.FONTS.Popp400}
                paddingTop={5}
                data={email}
                onChange={handleEmailChange}
                onFocus={disableErrorMessage}
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
                paddingTop={18}
                data={password}
                onChange={handlePasswordChange}
                onFocus={disableErrorMessage}
                secureTextEntry
              />
              {erro &&
                <Text style={{ color: theme.COLORS.RedF15050, fontFamily: theme.FONTS.Popp500, justifyContent: "center", textAlign: "center", marginTop: 15, fontSize: 12 }}>{erro}</Text>}
            </View>
            <View style={styles.ContainerClicks}>
              <TouchText title={AppTexts.Forgot_Password} href='/ForgotPassword' titleColor={theme.COLORS.Beige65E5959} />
              <Button
                text={AppTexts.Join}
                fontFamily={theme.FONTS.Popp700}
                background={theme.COLORS.OrangeFF6C44}
                width={310}
                height={40}
                borderRadius={4}
                fontSize={14}
                onPress={handleLogin}
              />
              <View style={styles.ClicksContainer}>
                <Text style={styles.ClicksText}>
                  {AppTexts.Dont_Have_Account}
                </Text>
                <TouchText title={AppTexts.Create_a_Account} href='/CreateAccount' titleColor={theme.COLORS.YellowEEA734} />
              </View>
            </View>
            <View style={styles.ContainerFooter}>
              <Text style={styles.FooterText}>
                {AppTexts.Or}
              </Text>
              <ButtonGoogle />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </UseFonts>
  )
};

export default Login;
