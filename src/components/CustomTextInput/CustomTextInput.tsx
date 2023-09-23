import React from 'react';
import { TextInput, DefaultTheme } from 'react-native-paper';
import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';


interface CustomTextInputProps {
  label?: string,
  mode: 'flat' | 'outlined'
  keyboardType: 'default' | 'email-address' | 'numeric' | 'web-search',
  underlineColor?: string,
  theme: typeof DefaultTheme
  fontSize?: number,
  fontFamily?: typeof theme.FONTS.Popp400,
  background?: string,
  paddingTop?: number,
  borderRadius?: number,
  width?: number,
  height?: number,
  borderColor?: string
};

const CustomTextInput = ({
  label,
  mode,
  keyboardType,
  underlineColor,
  theme,
  fontSize,
  fontFamily,
  background,
  paddingTop,
  borderRadius,
  width,
  height,
  borderColor
}: CustomTextInputProps) => {
  const styles = StyleSheet.create({
    TextInput: {
      backgroundColor: background,
      fontSize: fontSize,
      fontFamily: fontFamily,
      paddingTop: paddingTop,
      borderRadius: borderRadius,
      borderColor: borderColor,
      width: width,
      height: height
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

export default CustomTextInput;
