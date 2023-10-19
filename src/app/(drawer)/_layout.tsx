import React from 'react';
import { Drawer } from 'expo-router/drawer'

import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
import { AppTexts } from '../../assets/strings';
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