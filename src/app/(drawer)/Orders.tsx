import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


import { styles } from '../../StyleAndComponentsScreens/Orders/style';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';
import Button from '../../components/Button/Button';
import OrderCard from '../../StyleAndComponentsScreens/Orders/components/OrderCard/OrderCard';
import UseFonts from '../../styles/useFonts';
import ProductItem from '../../StyleAndComponentsScreens/ShoppingCart/components/ProductItem/ProductItem';

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
                                <TouchableOpacity style={{ height: 435, width: 349, backgroundColor: theme.COLORS.White2F3F3F3, borderRadius: 30 }}>
                                    <View>
                                        <View>
                                            <Text style={{ color: theme.COLORS.Gray949494, fontSize: 13, fontFamily: theme.FONTS.Popp400, textAlign: 'right', marginTop: 10, width: '96%' }}>
                                                10/08/2023
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', width: '98%', alignItems: 'center', justifyContent: 'space-around' }}>
                                            <Image source={require('../../assets/img/cheesy-bread.png')} />
                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 16,
                                                        fontFamily: theme.FONTS.Popp400
                                                    }}
                                                >
                                                    {AppTexts.Croassaint_Queijo}
                                                </Text>
                                                <Text>
                                                    <Text style={{}}>R$</Text> <Text style={{}}> 5,00</Text>
                                                </Text>
                                            </View>
                                            <View>
                                                <View style={{}}>
                                                    <Text>
                                                        1
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