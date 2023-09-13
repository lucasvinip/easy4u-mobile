import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Keyboard, Pressable, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'expo-status-bar';



import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_900Black
} from '@expo-google-fonts/poppins'
import {
  Raleway_600SemiBold,
  Raleway_700Bold
} from '@expo-google-fonts/raleway'
import COLORS from './src/styles/theme'
import { ForgotPassword } from './src/screens/ForgotPassword/ForgotPassword';
import { Login } from './src/screens/Login/Login';
import { CreateAccount } from './src/screens/CreateAccount/CreateAccount';
import { ProfileSetting } from './src/screens/ProfileSetting/ProfileSetting';
import { Orders } from './src/screens/Orders/Orders';
import { FavoriteItens } from './src/screens/FavoriteItens/FavoriteItens';
import { Checkout } from './src/screens/Checkout/Checkout';
import { ShoppingCart } from './src/screens/ShoppingCart/ShoppingCart';


const App: React.FC = () => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black,
    Raleway_600SemiBold,
    Raleway_700Bold
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (

    <ThemeProvider theme={COLORS}>
      <StatusBar
        style='dark'
        translucent backgroundColor='transparent'
      />
      <Pressable style={{flex: 1}}
        onPress={Keyboard.dismiss}
        >
        <View onLayout={onLayoutRootView}>
          {/* <Login /> */}
          {/* <ForgotPassword
          /> */}
          {/* <CreateAccount/> */}
          {/* <ProfileSetting/> */}
          {/* <Orders/> */}
          {/* <FavoriteItens/> */}
          {/* <Checkout/> */}
          <ShoppingCart/>
        </View>
      </Pressable>
    </ThemeProvider>

  )
}

export default App;