import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';
import { Link } from 'expo-router';

interface CustomDrawerProps {
  title: string,
  textWith?: number,
  padding?: number
}

const CustomDrawer = ({ title, textWith, padding }: CustomDrawerProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Link href={'/(drawer)/Orders'} asChild>
        <TouchableOpacity >
          <Text style={{ textAlign: 'center' }}>
            {title}
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default CustomDrawer;
