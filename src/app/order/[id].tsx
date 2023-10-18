import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppTexts } from '../../assets/strings';
import { styles } from '../../StyleAndComponentsScreens/Checkout/style'
import Button from '../../components/Button/Button';
import theme from '../../styles/theme';
import ButtonCredit from '../../StyleAndComponentsScreens/Checkout/components/ButtonCredit/ButtonCredit';
import ContainerTotal from '../../StyleAndComponentsScreens/Checkout/components/ContainerTotal/ContainerTotal';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';

const Order = (props: any) => {
    const navigation = useNavigation();
    const router = useRouter();
    const params = useLocalSearchParams();
    const {id} = props.match.params.id;

    console.log(id)

    return (
        <SafeAreaView>
            <View style={styles.Screen}>
                <View style={styles.Container}>
                    <View style={styles.ContainerHeader}>
                        <Image source={require('../../assets/img/easy.png')} style={{ width: 191, height: 65 }} />
                    </View>
                    <View style={styles.ContainerMain}>
                        <Text style={styles.TitleMain}>{AppTexts.Easy_you}</Text>
                        <View style={{ alignItems: 'center' }}>
                            <ContainerTotal />
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
            </View>
        </SafeAreaView>
    );
};

export default Order;