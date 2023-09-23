import React from 'react';
import { Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

interface CustomDrawerProps {
    title?: string,
    textWith?: number,
    padding?: number
  }

const CustomDrawer = ({ title, textWith, padding} : CustomDrawerProps) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: theme.FONTS.Popp600,
          fontSize: RFValue(14),
          textAlign: 'center',
          paddingTop: padding,
          width: textWith
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default CustomDrawer;
