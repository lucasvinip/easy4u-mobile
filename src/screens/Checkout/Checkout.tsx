import React from 'react';
import { Image, View, Text, TouchableOpacity} from 'react-native';
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
                    <Text>{AppTexts.Easy_you}</Text>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ borderColor: 'black', borderBottomWidth: 1, height: 269, width: 346 }}>

                        </View>
                    </View>
                </View>
                <View style={styles.ContainerFooter}>
                    <ButtonCredit/>
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