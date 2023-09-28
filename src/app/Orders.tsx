import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


import { styles } from '../StyleAndComponentsScreens/Orders/style';
import theme from '../styles/theme';
import { AppTexts } from '../assets/strings';
import UseFonts from '../styles/useFonts';

const Orders = () => {
    return (
        <UseFonts>
            <StatusBar
                style='dark'
                translucent backgroundColor={theme.COLORS.Whiteffffff}
            />
            <SafeAreaView style={{ backgroundColor: theme.COLORS.Whiteffffff }}>
                <View style={styles.Screen}>
                    <View style={styles.Container}>
                        <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: '60%', width: '95%' }}>
                                <TouchableOpacity style={{ height: 'auto', width: 360, backgroundColor: theme.COLORS.White2F3F3F3, borderRadius: 30 }}>
                                    <View>
                                        <View>
                                            <Text style={{ color: theme.COLORS.Gray949494, fontSize: 13, fontFamily: theme.FONTS.Popp400, textAlign: 'right', marginTop: 10, width: '96%' }}>
                                                10/08/2023
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', width: '99%', alignItems: 'center', justifyContent: 'space-around', marginBottom: 18 }}>
                                            <Image source={require('../assets/img/cheesy-bread.png')} style={{ width: 80, height: 80 }} />
                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 16,
                                                        fontFamily: theme.FONTS.Popp500,
                                                        width: 185
                                                    }}
                                                >
                                                    {AppTexts.Croassaint_Queijo}
                                                </Text>
                                                <Text>
                                                    <Text style={{ fontFamily: theme.FONTS.Popp700, fontSize: 14 }}>R$</Text> <Text style={{ fontFamily: theme.FONTS.Popp700, fontSize: 14, color: theme.COLORS.OrangeFF6C44 }}> 5,00</Text>
                                                </Text>
                                            </View>
                                            <View style={{}}>
                                                <View style={{
                                                    backgroundColor: theme.COLORS.Gray5CDCDCD, height: 18, width: 40, borderRadius: 50, alignItems: 'center', justifyContent: 'center'
                                                }}>
                                                    <Text style={{ fontSize: 14, fontFamily: theme.FONTS.Popp600, textAlignVertical: 'top' }}>
                                                        20
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    )
};

export default Orders;