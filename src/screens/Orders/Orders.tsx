import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Container } from './style';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';
import Button from '../../components/Button/Button';

const Orders = () => {
    return (
        <SafeAreaView>

            <Container>
                <View style={{ height: 130, width: 363, backgroundColor: '#F3F3F3', borderRadius: 15, alignContent: 'center', justifyContent: 'center', shadowOffset: { width: 10, height: 6 }, shadowOpacity: 0.5, shadowRadius: 4, elevation: 5}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Image source={require('../../assets/img/cheesyBread.png')} style={{ width: 90, height: 90, justifyContent: 'center' }} />
                        <View style={{justifyContent: 'space-evenly'}}>
                            <View style={{ flexDirection: 'row'}}>
                                <Text style={{ fontSize: 18, width: 150, color: theme.COLORS.Black393939, fontFamily: theme.FONTS.Popp500}}>
                                    {AppTexts.Croassaint_Chocolate}
                                </Text>
                                <Text style={{color: theme.COLORS.Gray888888, fontSize: 13, fontFamily: theme.FONTS.Popp400, paddingTop: 5}}>10/08/2023</Text>
                            </View>
                            <Button
                                text={AppTexts.Check_QRcode}
                                fontFamily={theme.FONTS.Popp700}
                                background={theme.COLORS.OrangeFF6C44}
                                width={120}
                                height={25}
                                borderRadius={100}
                                fontSize={10}
                            />
                        </View>

                    </View>
                </View>
            </Container>

        </SafeAreaView>
    )
};

export { Orders };