import React from 'react';
import { View } from 'react-native';
import {Drawer} from 'expo-router/drawer'
import { useIsFocused } from '@react-navigation/native';
// import { Container } from './styles';

const Layout = () => {
    const focused = useIsFocused()

    const handleFocus = () => {
        console.log('ola');
    } 
  return (
  <Drawer>
    <Drawer.Screen name='AllProducts'options={{}} listeners={{beforeRemove: handleFocus}}/>
  </Drawer>
  );
};

export default Layout;