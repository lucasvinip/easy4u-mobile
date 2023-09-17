import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppTexts } from '../../assets/strings';


import { styles } from './style'
import Button from '../../components/Button/Button';
import theme from '../../styles/theme';
import ButtonCredit from './components/ButtonCredit/ButtonCredit';

const Checkout = () => {
    return (
        <SafeAreaView>
            <View style={styles.Container}>
                <View style={styles.ContainerHeader}>
                    <Image source={require('../../assets/img/easyPhoto.png')} />
                </View>
                <View style={styles.ContainerMain}>
                    <Text style={{ textAlign: 'right', width: '50%', fontFamily: theme.FONTS.Popp400, fontSize: 16 }}>{AppTexts.Easy_you}</Text>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ borderColor: theme.COLORS.Gray37C7C7A, borderWidth: 0.5, height: 250, width: 346, borderRadius: 18 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', height: '80%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '65%' }}>
                                    <Text>{AppTexts.Name_Product}</Text>
                                    <Text>{AppTexts.Total}</Text>
                                </View>
                                <View style={[styles.line, styles.horizontalLine]} />
                                <View style={[styles.line, styles.verticalLine]} />
                                <View style={{}}>
                                    <View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '75%' }}>
                                            <Text>{AppTexts.Croassaint_Chocolate}</Text>
                                            <Text>{AppTexts.Total}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '75%', height: 'auto' }}>
                                            <Text>{AppTexts.Croassaint_Chocolate}</Text>
                                            <Text>{AppTexts.Total}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
                <View style={styles.ContainerFooter}>
                    <ButtonCredit />
                    <Button
                        text={AppTexts.Pay}
                        fontFamily={theme.FONTS.Popp700}
                        background={theme.COLORS.OrangeFF6C44}
                        width={260}
                        height={40}
                        borderRadius={48}
                        fontSize={14}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export { Checkout };

{/* <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, height: 'auto'}}>
                                
                            </View> */}