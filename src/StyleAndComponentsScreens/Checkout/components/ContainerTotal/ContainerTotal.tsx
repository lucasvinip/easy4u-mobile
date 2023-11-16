// Seu componente ContainerTotal.js
import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import { styles } from './style';
import { AppTexts } from '../../../../assets/strings';

const ContainerTotal = () => {
    return (
        <View style={styles.Card}>
            <View style={styles.ContainerCard}>
                <View style={styles.Container}>
                    <View style={styles.ContainerHeader}>
                        <View style={styles.Header}>
                            <Text style={styles.HeaderProduct}>{AppTexts.Name_Product}</Text>
                            <View style={styles.ContainerSeparator}>
                                <View style={styles.LineSeparator} />
                            </View>
                            <Text style={styles.HeaderTotal}>{AppTexts.Total}</Text>
                        </View>
                    </View>
                    <ScrollView contentContainerStyle={styles.ContainerMain} showsVerticalScrollIndicator={false}>
                        <ScrollView contentContainerStyle={styles.Main}>
                            <View style={styles.ContentMain}>
                                <View style={styles.NameAndQuantityProduct}>
                                    <Text style={styles.MainTitle}>
                                        {AppTexts.Total}
                                    </Text>
                                    <Text style={styles.MainTitle}>
                                        1 x
                                    </Text>
                                </View>
                                <Text style={styles.MainTitle}>
                                    R$ 0,00
                                </Text>
                            </View>
                        </ScrollView>
                    </ScrollView>
                </View>
            </View>
            <View style={styles.ContainerFooter}>
                <View style={styles.Footer}>
                    <View style={styles.ContentFooter}>
                        <Text style={styles.FooterTitle}>
                            {AppTexts.Total}
                        </Text>
                        <Text style={styles.FooterTitle}>
                            R$ 0,00
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ContainerTotal;
