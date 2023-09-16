import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import Button from '../../components/Button/Button';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';
import InputText from '../../components/TextInput/inputText';
import {
  styles
} from './style';
import ButtonGoogle from './components/ButtonGoogle/ButtonGoogle';



const themeTextInput = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',


  },
};


const Login = () => {

  return (
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
          <TouchableOpacity>
            <Text style={styles.ClicksText}>
              {AppTexts.Forgot_Password}
            </Text>
          </TouchableOpacity>
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
            <TouchableOpacity>
              <Text style={styles.ClicksContainerText1}>
                {AppTexts.Dont_Have_Account}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.ClicksContainerText2}>
                {AppTexts.Create_a_Account}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ContainerFooter}>
          <Text style={styles.FooterText}>
            {AppTexts.Or}
          </Text>
          <ButtonGoogle/>
        </View>
      </View>
    </SafeAreaView>
  )
};

export { Login };


