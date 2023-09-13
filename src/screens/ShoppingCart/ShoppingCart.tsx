import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppTexts } from '../../assets/strings';
import theme from '../../styles/theme';
import { Container } from './style';
import { AntDesign } from '@expo/vector-icons';
// import { Container } from './styles';

const ShoppingCart = () => {
    return (
        <SafeAreaView>
            <Container>
                <View>
                    <Text>3 items</Text>
                    <View style={{ backgroundColor: theme.COLORS.Gray4F5F3EF, height: RFPercentage(5) }} />
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Image source={require('../../assets/img/cheesy-bread.png')} style={{width: 76, height: 76}}/>
                        <View style={{alignContent: 'center', justifyContent: 'space-evenly'}}>
                            <Text style={{width: 99}}>{AppTexts.Croassaint_Chocolate}</Text>
                            <Text>R$ 5,50</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>
                            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                                <View style={{ backgroundColor: 'green', height: 20, width: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                    <AntDesign name='minus' style={{
                                        color: theme.COLORS.White2F3F3F3,
                                        fontSize: 20,
                                        textAlign: 'right',

                                    }} />
                                </View>
                            </View>
                            <View style={{ backgroundColor: 'green', height: 20, width: 60, borderRadius: 100, alignItems: 'center'}}>
                                <Text>1</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                                <View style={{ backgroundColor: 'green', height: 20, width: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                    <AntDesign name='plus' style={{
                                        color: theme.COLORS.White2F3F3F3,
                                        fontSize: 20,
                                        textAlign: 'right',

                                    }} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{}}/>
                </View>
            </Container>
        </SafeAreaView>
    )
};

export { ShoppingCart };