import React from 'react';
import { Drawer } from 'expo-router/drawer'

import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
import { AppTexts } from '../../assets/strings';
import CustomHeaderDrawer from '../../components/CustomHeaderDrawer/CustomHeaderDrawer';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

const Layout: React.FC = () => {

  return (
    <Provider store={store}>
      <Drawer
        drawerContent={() => <CustomDrawer />}
        screenOptions={{
          drawerType: 'back',
        }}
      >
        <Drawer.Screen
          name='AllProducts'
          options={{
            title: '',
            headerTransparent: true,
            drawerLabel: AppTexts.Start,
            header: () => (<CustomHeaderDrawer />)
          }} />
      </Drawer>
    </Provider>
  );
};

export default Layout;