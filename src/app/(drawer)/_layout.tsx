import React from 'react';
import { View } from 'react-native';
import { Drawer } from 'expo-router/drawer'

import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer />}
      defaultStatus='open'
    >
      <Drawer.Screen name='AllProducts' options={{ title: '', headerTransparent: true, drawerLabel: AppTexts.Start }} />
      <Drawer.Screen name='Orders' options={{ headerTransparent: true }} />
      <Drawer.Screen name='FavoriteItens' options={{ drawerLabel: AppTexts.Favorites }} />
      <Drawer.Screen name='ProfileSetting' options={{ drawerLabel: AppTexts.Favorites, headerShown: false}} />
    </Drawer>
  );
};

export default Layout;