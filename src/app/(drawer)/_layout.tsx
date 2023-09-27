import React from 'react';
import { View } from 'react-native';
import { Drawer } from 'expo-router/drawer'
import { AntDesign } from '@expo/vector-icons';

import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';
import { Stack } from 'expo-router';
import CustomHeaderNavigation from '../../components/CustomHeaderNavigation/CustomHeaderNavigation';

const Layout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer />}
      screenOptions={{
        headerTintColor: '#FFF',
        drawerType: 'slide',
      }}
      
      >
      <Drawer.Screen
        name='AllProducts'
        options={{
          title: '',
          headerTransparent: true,
          drawerLabel: AppTexts.Start,
          header: (props) => (<CustomHeaderNavigation/>)
        }} />

    </Drawer>
  );
};

export default Layout;