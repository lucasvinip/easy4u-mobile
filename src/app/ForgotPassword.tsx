import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DefaultTheme } from 'react-native-paper';
import { Alert, Modal, Pressable, Text, View } from 'react-native'


import Button from '../components/Button/Button';
import theme from '../styles/theme';
import InputText from '../components/CustomTextInput/CustomTextInput';
import { AppTexts } from '../assets/strings';
import {
    styles
} from '../StyleAndComponentsScreens/ForgotPassword/style';
import UseFonts from '../styles/useFonts';
import { StatusBar } from 'expo-status-bar';
import { performApi } from '../utils/api';



const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',


    },
};



const ForgotPassword = () => {

    const [email, setEmail] = useState<string>("");
    const [sucess, setSucess] = useState<string>("");
    const [erro, setErro] = useState<string>("");
    const [modalVisible, setModalVisible] = useState<boolean>(false);


    const handleEmailFromUser = (email: string) => {
        setEmail(email);
    };

    const sendForgotPassword = async () => {
        const data = await performApi.sendData("forgot-password", "POST", { email })
        if (data.statusCode === 201) {
            setModalVisible(true)
            setSucess("Email enviado com sucesso!")
        } else {
            setErro("Houve um erro ao enviar o email, tente novamente!")
        }
    };

    return (
        <UseFonts>
            <StatusBar
                style='dark'
                translucent backgroundColor={theme.COLORS.Whiteffffff}
            />
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
                    style={{flex: 1, justifyContent: 'center', alignItems: "center"}}
                    >
                    <View>
                        <View>
                            <Text style={styles.TextSucess}>{sucess}</Text>
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text >Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <View style={styles.Screen}>
                    <View style={styles.Container}>
                        <View style={styles.ContainerHeader}>
                            <Text style={styles.HeaderText}>
                                {AppTexts.Forgot_my_Password}
                            </Text>
                            <Text style={styles.HeaderSubText}>
                                {AppTexts.Put_your_Email}
                            </Text>
                        </View>
                        <InputText
                            label='EMAIL'
                            mode='flat'
                            keyboardType='email-address'
                            underlineColor={theme.COLORS.Gray868686}
                            theme={themeTextInput}
                            background='white'
                            fontSize={12}
                            fontFamily={theme.FONTS.Popp400}
                            data={email}
                            onChange={handleEmailFromUser}

                        />
                        <View style={styles.ContainerButton}>
                            <Button
                                text={AppTexts.Reset_Password.toUpperCase()}
                                fontFamily={theme.FONTS.Popp700}
                                background={theme.COLORS.OrangeFF6C44}
                                width={260}
                                height={40}
                                borderRadius={8}
                                fontSize={14}
                                onPress={sendForgotPassword}
                            />
                            {erro && <Text style={styles.TextError}>{erro}</Text>}
                            
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    )
};

export default ForgotPassword;