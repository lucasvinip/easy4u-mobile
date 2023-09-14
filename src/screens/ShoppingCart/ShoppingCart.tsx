import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
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
                <ScrollView>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                        <Text style={{ color: theme.COLORS.Gray37C7C7A, fontSize: 14, fontFamily: theme.FONTS.Popp400 }}>3 items</Text>
                        <View style={{ backgroundColor: theme.COLORS.Gray4F5F3EF, height: RFPercentage(5), width: '98%' }} />
                    </View>

                    <View style={{ marginTop: 20, justifyContent: 'space-evenly' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '55%', justifyContent: 'space-around' }}>
                                <Image source={require('../../assets/img/cheesy-bread.png')} style={{ width: 76, height: 76 }} />
                                <View style={{ justifyContent: 'space-evenly' }}>
                                    <Text style={{ width: 99, fontFamily: theme.FONTS.Popp500, fontSize: 12.5 }}>{AppTexts.Croassaint_Chocolate}</Text>
                                    <Text style={{ fontFamily: theme.FONTS.Popp600, fontSize: 14 }}>R$ 5,50</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: theme.COLORS.Orange2FFA24B, height: 20, width: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name='minus' style={{
                                            color: theme.COLORS.White2F3F3F3,
                                            fontSize: 20,
                                            textAlign: 'right',
                                        }} />
                                    </View>
                                </View>
                                <View style={{ backgroundColor: theme.COLORS.GrayRgba255249243041, height: 21, width: 50, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 12, color: theme.COLORS.Black393939, fontFamily: theme.FONTS.Popp600 }}>1</Text>
                                </View>
                                <View
                                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => console.log('lucas')} style={{ backgroundColor: theme.COLORS.Orange2FFA24B, height: 20, width: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name='plus' style={{
                                            color: theme.COLORS.White2F3F3F3,
                                            fontSize: 15,
                                            textAlign: 'right',
                                        }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                            <View style={{ borderBlockColor: theme.COLORS.Gray5CDCDCD, borderBottomWidth: 1, width: 200 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '55%', justifyContent: 'space-around' }}>
                                <Image source={require('../../assets/img/cheesy-bread.png')} style={{ width: 76, height: 76 }} />
                                <View style={{ justifyContent: 'space-evenly' }}>
                                    <Text style={{ width: 99, fontFamily: theme.FONTS.Popp500, fontSize: 12.5 }}>{AppTexts.Croassaint_Chocolate}</Text>
                                    <Text style={{ fontFamily: theme.FONTS.Popp600, fontSize: 14 }}>R$ 5,50</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: theme.COLORS.Orange2FFA24B, height: 20, width: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name='minus' style={{
                                            color: theme.COLORS.White2F3F3F3,
                                            fontSize: 20,
                                            textAlign: 'right',
                                        }} />
                                    </View>
                                </View>
                                <View style={{ backgroundColor: theme.COLORS.GrayRgba255249243041, height: 21, width: 50, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 12, color: theme.COLORS.Black393939, fontFamily: theme.FONTS.Popp600 }}>1</Text>
                                </View>
                                <View
                                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => console.log('lucas')} style={{ backgroundColor: theme.COLORS.Orange2FFA24B, height: 20, width: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name='plus' style={{
                                            color: theme.COLORS.White2F3F3F3,
                                            fontSize: 15,
                                            textAlign: 'right',
                                        }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                            <View style={{ borderBlockColor: theme.COLORS.Gray5CDCDCD, borderBottomWidth: 1, width: 200 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '55%', justifyContent: 'space-around' }}>
                                <Image source={require('../../assets/img/cheesy-bread.png')} style={{ width: 76, height: 76 }} />
                                <View style={{ justifyContent: 'space-evenly' }}>
                                    <Text style={{ width: 99, fontFamily: theme.FONTS.Popp500, fontSize: 12.5 }}>{AppTexts.Croassaint_Chocolate}</Text>
                                    <Text style={{ fontFamily: theme.FONTS.Popp600, fontSize: 14 }}>R$ 5,50</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: theme.COLORS.Orange2FFA24B, height: 20, width: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name='minus' style={{
                                            color: theme.COLORS.White2F3F3F3,
                                            fontSize: 20,
                                            textAlign: 'right',
                                        }} />
                                    </View>
                                </View>
                                <View style={{ backgroundColor: theme.COLORS.GrayRgba255249243041, height: 21, width: 50, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 12, color: theme.COLORS.Black393939, fontFamily: theme.FONTS.Popp600 }}>1</Text>
                                </View>
                                <View
                                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => console.log('lucas')} style={{ backgroundColor: theme.COLORS.Orange2FFA24B, height: 20, width: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name='plus' style={{
                                            color: theme.COLORS.White2F3F3F3,
                                            fontSize: 15,
                                            textAlign: 'right',
                                        }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                            <View style={{ borderBlockColor: theme.COLORS.Gray5CDCDCD, borderBottomWidth: 1, width: 200 }} />
                        </View>
                    </View>
                    <View>
                        <Text>{AppTexts.Schedule_Time}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View>
                                <View style={{ width: 170, height: 62, borderRadius: 10, borderColor: theme.COLORS.YellowFFAA2C, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text>{AppTexts.Get_Now}</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{ width: 170, height: 62, borderRadius: 10, borderColor: theme.COLORS.YellowFFAA2C, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text>{AppTexts.Select_Time}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text>aaa</Text>
                                <Text>aaa</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text>aaa</Text>
                                <Text>aaa</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text>aaa</Text>
                                <Text>aaa</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        </SafeAreaView>
    )
};

export { ShoppingCart };


{/* <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative', justifyContent: 'center'}}>
<View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 0 }}>
    <View style={{ backgroundColor: theme.COLORS.Orange2FFA24B, height: 25, width: 25, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
        <AntDesign name='minus' style={{
            color: theme.COLORS.White2F3F3F3,
            fontSize: 20,
            textAlign: 'right',
        }} />
    </View>
</View>
<View style={{ backgroundColor: 'rgba(204, 204, 204, 0.31)', height: 25, width: 85, borderRadius: 8, alignItems: 'center', zIndex: 1, justifyContent: 'center'}}>
    <Text style={{fontSize: 12, color: theme.COLORS.Black393939, fontFamily: theme.FONTS.Popp600}}>3</Text>
</View>
<View 
 style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0 }}>
    <TouchableOpacity onPress={() => console.log('lucas')} style={{ backgroundColor: theme.COLORS.Orange2FFA24B, height: 30, width: 30, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
        <AntDesign name='plus' style={{
            color: theme.COLORS.White2F3F3F3,
            fontSize: 15,
            textAlign: 'right',
        }} />
    </TouchableOpacity>
</View>
</View> */}