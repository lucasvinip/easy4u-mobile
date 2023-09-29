import React from 'react';
import { View } from 'react-native';
import { Drawer } from 'expo-router/drawer'
import { AntDesign } from '@expo/vector-icons';

import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';
import { Stack } from 'expo-router';
import CustomHeaderNavigation from '../../components/CustomHeaderDrawer/CustomHeaderDrawer';
import CustomHeaderDrawer from '../../components/CustomHeaderDrawer/CustomHeaderDrawer';

const Layout = () => {
  return (
    <Drawer
      drawerContent={() => <CustomDrawer />}
      screenOptions={{
        drawerType: 'slide',
      }}
      >
      <Drawer.Screen
        name='AllProducts'
        options={{
          title: '',
          headerTransparent: true,
          drawerLabel: AppTexts.Start,
          header: () => (<CustomHeaderDrawer/>)
        }} />

    </Drawer>
  );
};

export default Layout;