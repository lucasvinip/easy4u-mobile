import React from 'react';
import { TextInput, DefaultTheme } from 'react-native-paper';
import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';


interface InputTextProps {
  label: string,
  mode: 'flat' | 'outlined'
  keyboardType: 'default' | 'email-address',
  underlineColor: string,
  theme: typeof DefaultTheme
  fontSize?: number,
  fontFamily?: typeof theme.FONTS.Popp400,
  background?: string,
  paddingTop?: number
};

const InputText = ({
  label,
  mode,
  keyboardType,
  underlineColor,
  theme,
  fontSize,
  fontFamily,
  background,
  paddingTop }: InputTextProps) => {
  const styles = StyleSheet.create({
    TextInput: {
      backgroundColor: background,
      fontSize: fontSize,
      fontFamily: fontFamily,
      paddingTop: paddingTop,
    },
  });

  return <TextInput
    label={label}
    mode={mode}
    keyboardType={keyboardType}
    underlineColor={underlineColor}
    theme={theme}
    style={styles.TextInput}
  />
};

export default InputText;


{/* <TextInput
            theme={themaTextInput}
            style={{ fontSize: 12, fontFamily: theme.FONTS.Popp400, backgroundColor: 'white', color: 'blue' }}
            label={"EMAIL"}
            mode='flat'
            keyboardType='email-address'
            underlineColor='#F3F2F2'
          />
          <TextInput
            theme={themaTextInput}
            style={{ fontSize: 12, fontFamily: theme.FONTS.Popp400, backgroundColor: 'white', paddingTop: 18}}
            label={"EMAIL"}
            secureTextEntry
            keyboardType='default'
            mode='flat'
            underlineColor='#F3F2F2'
          /> */}