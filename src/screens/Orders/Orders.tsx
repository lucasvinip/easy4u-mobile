import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Container } from './style';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';
import Button from '../../components/Button/Button';
import OrderCard from './components/OrderCard/OrderCard';

const Orders = () => {
    return (
        <SafeAreaView>
            <Container>
                <View style={{paddingTop: 15}}>
                    <OrderCard />
                </View>
            </Container>
        </SafeAreaView>
    )
};

export { Orders };