import React from 'react';
import { Image, View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppTexts } from '../../assets/strings';


import {styles} from './style'

const Checkout = () => {
    return (
        <SafeAreaView>
            <View style={styles.Container}>
                <View style={styles.ContainerHeader}>
                    <Image source={require('../../assets/img/easyPhoto.png')} />
                </View>
                <View>
                    <View style={{}}>
                        <Text>{AppTexts.Easy_you}</Text>
                        <View style={{borderBlockColor: 'black', borderBottomWidth: 1, height: '100%'}}>
                            <View>
                                
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export { Checkout };