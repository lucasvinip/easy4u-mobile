import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black
} from '@expo-google-fonts/poppins';
import {
    Raleway_600SemiBold,
    Raleway_700Bold
} from '@expo-google-fonts/raleway';
import COLORS from '../styles/theme'
import { Keyboard, Pressable, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'expo-status-bar';


const UseFonts = () => {
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
            <Pressable
                onPress={Keyboard.dismiss}
            >
                <View onLayout={onLayoutRootView}></View>
            </Pressable>
        </ThemeProvider>
    )
}

export default UseFonts;