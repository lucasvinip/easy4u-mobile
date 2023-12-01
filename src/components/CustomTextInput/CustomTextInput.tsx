import React, { useState } from 'react';
import { TextInput, DefaultTheme } from 'react-native-paper';

import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';
import { useEffect } from 'react';



interface CustomTextInputProps {
  label?: string;
  mode: 'flat' | 'outlined';
  keyboardType: 'default' | 'email-address' | 'numeric' | 'web-search';
  underlineColor?: string;
  theme: typeof DefaultTheme;
  fontSize?: number;
  fontFamily?: typeof theme.FONTS.Popp400;
  background?: string;
  paddingTop?: number;
  borderRadius?: number;
  width?: number;
  height?: number;
  borderColor?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  data?: string;
  isPassword?: boolean;
  secureTextEntry?: boolean | undefined

}

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
  borderColor,
  onChange,
  onFocus,
  data,
  isPassword,
  secureTextEntry
}: CustomTextInputProps) => {

  const [inputValue, setInputValue] = useState<string>(data || "");

  useEffect(() => {
    if (data !== undefined) {
      setInputValue(data);
    }
  }, [data]);
  

  const handleInputChange = (text: string) => {
    setInputValue(text);

    if (onChange) {
      onChange(text);
    }
  };

  const handleInputFocus = () => {
    if (onFocus) {
      onFocus();
    }
  };

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

  return (
    <TextInput
      label={label}
      mode={mode}
      keyboardType={keyboardType}
      underlineColor={underlineColor}
      theme={theme}
      style={styles.TextInput}
      value={inputValue}
      onChangeText={handleInputChange}
      onFocus={handleInputFocus}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default CustomTextInput;
