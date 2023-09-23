import React from 'react';
import { View } from 'react-native';
import { Drawer } from 'expo-router/drawer'
import { createDrawerNavigator } from '@react-navigation/drawer'; 

import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';

const Layout = () => {
  return (
    <Drawer 
    drawerContent={(props) => <CustomDrawer title='lucas'/>}
    >
      <Drawer.Screen name='AllProducts' options={{title: '', headerTransparent: true, drawerLabel: AppTexts.Start}} />
      <Drawer.Screen name='Orders' options={{headerTransparent: true}} />
      <Drawer.Screen name='FavoriteItens' options={{drawerLabel: AppTexts.Favorites}} />
      <Drawer.Screen name='ProfileSetting' options={{drawerLabel: AppTexts.Profile_Settings}} />
    </Drawer>
  );
};

export default Layout;