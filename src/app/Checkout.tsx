import React from 'react';
import {
    Image,
    View,
    Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppTexts } from '../assets/strings';


import { styles } from '../StyleAndComponentsScreens/Checkout/style'
import Button from '../components/Button/Button';
import theme from '../styles/theme';
import PaymentMethodCredit from '../StyleAndComponentsScreens/Checkout/components/PaymentMethod/PaymentMethodCredit';
import ContainerTotal from '../StyleAndComponentsScreens/Checkout/components/ContainerTotal/ContainerTotal';
import PaymentMethodPix from '../StyleAndComponentsScreens/Checkout/components/PaymentMethod/PaymentMethodPix';

const Checkout = () => {
    return (
        <SafeAreaView>
            <View style={styles.Screen}>
                <View style={styles.Container}>
                    <View style={styles.ContainerHeader}>
                        <Image source={require('../assets/img/easy.png')} style={{ width: 191, height: 65 }} />
                    </View>
                    <View style={styles.ContainerMain}>
                        <Text style={styles.TitleMain}>{AppTexts.Easy_you}</Text>
                        <View style={{ alignItems: 'center' }}>
                            <ContainerTotal />
                        </View>
                    </View>
                    <View style={styles.ContainerFooter}>
                        <View style={styles.ContainerPayment}>
                            <Text style={styles.TitlePayment}>
                                {AppTexts.Choose_Payment_Method}
                            </Text>
                            <View style={styles.Payment}>
                                <PaymentMethodCredit />
                                <PaymentMethodPix />
                            </View>
                        </View>
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
            </View>
        </SafeAreaView>
    );
};

export default Checkout;