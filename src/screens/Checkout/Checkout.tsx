import React from 'react';
import { Image, View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppTexts } from '../../assets/strings';


import { Container, ContainerHeader} from './style'

const Checkout = () => {
    return (
        <SafeAreaView>
            <Container>
                <ContainerHeader>
                    <Image source={require('../../assets/img/easyPhoto.png')} />
                </ContainerHeader>
                <View>
                    <View style={{}}>
                        <Text>{AppTexts.Easy_you}</Text>
                        <View style={{borderBlockColor: 'black', borderBottomWidth: 1, height: '100%'}}>
                        </View>
                    </View>
                </View>
            </Container>
        </SafeAreaView>
    );
};

export { Checkout };