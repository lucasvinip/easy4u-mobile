import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Stack } from 'expo-router';

import Button from '../components/Button/Button';
import theme from '../styles/theme';
import { AppTexts } from '../assets/strings';
import InputText from '../components/TextInput/inputText';
import {
  styles
} from '../screens/Login/style';
import ButtonGoogle from '../screens/Login/components/ButtonGoogle/ButtonGoogle';
import UseFonts from '../assets/useFonts';

const themeTextInput = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',


  },
};  


const Login = () => {

  return (
    <UseFonts>
      <SafeAreaView>
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
            />
          </View>
          <View style={styles.ContainerClicks}>
            <Link href={'/ForgotPassword'} asChild>
              <TouchableOpacity>
                <Text style={styles.ClicksText}>
                  {AppTexts.Forgot_Password}
                </Text>
              </TouchableOpacity>
            </Link>
            <Button
              text={AppTexts.Join}
              fontFamily={theme.FONTS.Popp700}
              background={theme.COLORS.OrangeFF6C44}
              width={310}
              height={40}
              borderRadius={4}
              fontSize={14}
            />
            <View style={styles.ClicksContainer}>
              <Link href={'/ProfileSetting'} asChild>
                <TouchableOpacity>
                  <Text style={styles.ClicksContainerText1}>
                    {AppTexts.Dont_Have_Account}
                  </Text>
                </TouchableOpacity>
              </Link>
              <Link href={'/CreateAccount'} asChild>
                <TouchableOpacity>
                  <Text style={styles.ClicksContainerText2}>
                    {AppTexts.Create_a_Account}
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
          <View style={styles.ContainerFooter}>
            <Text style={styles.FooterText}>
              {AppTexts.Or}
            </Text>
            <ButtonGoogle />
          </View>
        </View>
      </SafeAreaView>
    </UseFonts>
  )
};

export default Login;


