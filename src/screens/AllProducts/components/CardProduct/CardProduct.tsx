import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import { AppTexts } from '../../../../assets/strings';
import theme from '../../../../styles/theme';

// import { Container } from './styles';

const CardProduct = () => {
    return (
        <TouchableOpacity style={{width: 330,height: 140, backgroundColor: theme.COLORS.Whiteffffff, borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{ alignItems: 'center', height: '100%', justifyContent: 'center'}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center'}}>
                    <View style={{ justifyContent: 'space-around', height: '80%', }}>
                        <Text style={{ fontSize: 18, fontFamily: theme.FONTS.Popp400 }}>
                            Salgados Assados
                        </Text>
                        <Text style={{ width: 198, fontSize: 13, fontFamily: theme.FONTS.Popp400, color: theme.COLORS.Gray888888 }}>
                            {AppTexts.Check_Baked_Snacks}
                        </Text>
                        <Text>
                            <Text style={{ color: theme.COLORS.Black393939, fontSize: 14, fontFamily: theme.FONTS.Popp700 }}>R$</Text> <Text style={{ color: theme.COLORS.OrangeFF6C44, fontSize: 14, fontFamily: theme.FONTS.Popp700 }}> 5,00</Text>
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Image source={require('../../../../assets/img/cheesy-bread.png')} style={{ width: 100, height: 100 }} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default CardProduct;