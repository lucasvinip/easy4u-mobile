import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


import { styles } from '../StyleAndComponentsScreens/Orders/style';
import theme from '../styles/theme';
import { AppTexts } from '../assets/strings';
import UseFonts from '../styles/useFonts';
import Button from '../components/Button/Button';
import {OrderCard} from '../StyleAndComponentsScreens/Orders/components/OrderCard/OrderCard';

const Orders = () => {
    return (
        <UseFonts>
            <StatusBar
                style='dark'
                translucent backgroundColor={theme.COLORS.GrayRgba255249243041}
            />
            <SafeAreaView style={{ backgroundColor: theme.COLORS.Whiteffffff }}>
                <View style={styles.Screen}>
                    <View style={styles.Container}>
                        <View style={{marginTop: 42}}>
                            <OrderCard />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    )
};

export default Orders;