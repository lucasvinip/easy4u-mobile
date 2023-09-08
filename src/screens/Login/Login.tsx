import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  Container,
  ContainerHeader,
  ContainerInputs,
  ContainerClicks,
  ContainerFooter,
} from './style';
import { DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import Button from '../../components/Button/Button';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';
import InputText from '../../components/TextInput/inputText';



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

      <Container>

        <ContainerHeader>

          <ContainerHeader.Text>
            {AppTexts.Welcome}
          </ContainerHeader.Text>

          <ContainerHeader.SubText>
            {AppTexts.Enjoy_Cafeteria}
          </ContainerHeader.SubText>

        </ContainerHeader>

        <ContainerInputs>

          <InputText
            label='EMAIL'
            mode='flat'
            keyboardType='email-address'
            underlineColor={theme.COLORS.Gray7868686}
            theme={themeTextInput}
            background='white'
            fontSize={RFValue(12)}
            fontFamily={theme.FONTS.Popp400}
          />
          <InputText
            label='SENHA'
            mode='flat'
            keyboardType='default'
            underlineColor={theme.COLORS.Gray7868686}
            theme={themeTextInput}
            background='white'
            fontSize={RFValue(12)}
            fontFamily={theme.FONTS.Popp400}
            paddingTop={RFValue(18)}
          />

        </ContainerInputs>

        <ContainerClicks>

          <ContainerClicks.Text>
            {AppTexts.Forgot_Password}
          </ContainerClicks.Text>

          <Button
            text={AppTexts.Join}
            fontFamily={theme.FONTS.Popp700}
            background={theme.COLORS.OrangeFF6C44}
            width={RFValue(278)}
            heigh={RFValue(35)}
            borderRadius={RFValue(4)}
          />

          <ContainerClicks.Container>

            <ContainerClicks.Container.Text1>
              {AppTexts.Dont_Have_Account}
            </ContainerClicks.Container.Text1>
            <ContainerClicks.Container.Text2>
              {AppTexts.Create_a_Account}
            </ContainerClicks.Container.Text2>

          </ContainerClicks.Container>

        </ContainerClicks>

        <ContainerFooter>

          <ContainerFooter.Text>
            {AppTexts.Or}
          </ContainerFooter.Text>

          <ContainerFooter.Touchable>

            <ContainerFooter.Touchable.View>

              <AntDesign name='googleplus' style={{
                paddingRight: RFValue(33.5),
                color: theme.COLORS.White2F3F3F3,
                fontSize: 28,
                paddingTop: RFValue(7.2)
              }} />

              <Text style={{
                color: 'white',
                fontFamily: theme.FONTS.Popp700,
                paddingTop: RFValue(9.5)
              }}>
                {AppTexts.Connect_Google.toUpperCase()}
              </Text>

            </ContainerFooter.Touchable.View>
            
          </ContainerFooter.Touchable>

        </ContainerFooter>

      </Container>

    </SafeAreaView>
  )
};

export { Login };


