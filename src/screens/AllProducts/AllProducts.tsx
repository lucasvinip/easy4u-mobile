import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { DefaultTheme } from 'react-native-paper';


// import { Container } from './styles';
import InputText from '../../components/TextInput/inputText';
import theme from '../../styles/theme';
import { AppTexts } from '../../assets/strings';
import CardProduct from './components/CardProduct/CardProduct';

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',


    },
};
const AllProducts = () => {
    return (
        <SafeAreaView>
            <View style={{
                backgroundColor: theme.COLORS.OrangeFF6C44,
                height: '100%',
                width: '100%',
                borderRadius: 100
            }}>
                <View style={{
                    marginLeft: 18,
                    marginRight: 18,
                }}>
                    <View style={{ height: '28%', justifyContent: 'flex-end' }}>
                        <AntDesign name='shoppingcart' style={{
                            color: theme.COLORS.White2F3F3F3,
                            fontSize: 30,
                            textAlign: 'right',
                            width: '95%',
                            paddingBottom: 15
                        }} />
                    </View>
                    <View style={{}}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <InputText
                                label='Pesquisar'
                                mode='outlined'
                                keyboardType='default'
                                underlineColor={theme.COLORS.Gray2Rgba255249243047}
                                theme={themeTextInput}
                                background='white'
                                fontSize={12}
                                fontFamily={theme.FONTS.Popp400}
                                width={310}
                            />
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.container}>
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    <Text>{AppTexts.All_Products}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    <Text>{AppTexts.All_Products}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    <Text>{AppTexts.All_Products}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    <Text>{AppTexts.All_Products}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    <Text>{AppTexts.All_Products}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    <Text>{AppTexts.All_Products}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    <Text>{AppTexts.All_Products}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    <Text>{AppTexts.All_Products}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    <Text>{AppTexts.All_Products}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    <Text>{AppTexts.All_Products}</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    <ScrollView>
                        <CardProduct />
                    </ScrollView>

                </View>

            </View>
        </SafeAreaView>
    );
};

export { AllProducts };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Layout em linha
        alignItems: 'center', // Alinhamento vertical ao centro
        justifyContent: 'space-between'
    },
    item: {
        width: 100, // Largura de cada item
        height: 100, // Altura de cada item
        backgroundColor: 'lightgray', // Cor de fundo
        justifyContent: 'center', // Alinhamento horizontal ao centro
        alignItems: 'center', // Alinhamento vertical ao centro
        marginHorizontal: 10, // Espaçamento horizontal entre os itens
    },
});