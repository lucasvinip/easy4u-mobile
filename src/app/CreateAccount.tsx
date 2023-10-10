import React, { useState } from 'react';
import { Text, ScrollView, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import UseFonts from '../styles/useFonts';
import { styles } from '../StyleAndComponentsScreens/CreateAccount/style'
import { AppTexts } from '../assets/strings';
import InputText from '../components/CustomTextInput/CustomTextInput';
import theme from '../styles/theme';
import Button from '../components/Button/Button';
import { StatusBar } from 'expo-status-bar';
import { performApi } from '../utils/api';
import ModalPoup from '../components/ModalPoup/Modal';
import {router} from "expo-router"

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',
    },
};

const CreateAccount = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [sucess, setSucess] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [visible, setVisible] = useState<boolean>(false)

    const handleNameFromUser = (name: string) => setName(name)
    const handleEmailFromUser = (email: string) => setEmail(email)
    const handlePasswordFromUser = (password: string) => setPassword(password)
    const clearMessageErro = () => setError("")

    const sendNewRegister = async () => {
        try {
            const data = await performApi.sendData("auth/signup/customer", "POST", { name, email, password })
            console.log(data)
            if (data.statusCode !== 201) {
                setError("Email ou senha inválido!");
            } else {
                setVisible(true)
                setSucess("Falta pouco para seu cadastro! Verifique seu email")
            }
        } catch {
            setError("Houve um erro ao criar sua conta!")
        }
    }

    return (
        <UseFonts>
            <StatusBar
                style='dark'
                translucent backgroundColor={theme.COLORS.Whiteffffff}
            />
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <View style={styles.Screen}>
                    {visible && (
                        <ModalPoup visible={visible}>
                            <View style={{ alignItems: "center" }}>
                                <View style={styles.headerModal}>
                                    <TouchableOpacity onPress={() => { setVisible(false) }}>
                                        <Image source={require('../assets/img/x.png')} style={{ height: 30, width: 30 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', gap: 20 }}>
                                <Image source={(require("../assets/img/7efs.gif"))} style={{ height: 150, width: 150, marginVertical: 10 }} />
                                <Text style={styles.TextSucess}>{sucess}</Text>
                                <Button
                                    text={AppTexts.Back_to_Index}
                                    fontFamily={theme.FONTS.Popp700}
                                    background={theme.COLORS.OrangeF6752C}
                                    width={150}
                                    height={30}
                                    borderRadius={8}
                                    fontSize={10}
                                    onPress={() => router.push("/")}
                                />
                            </View>
                        </ModalPoup>
                    )}
                    <View style={styles.Container}>
                        <View style={styles.ContainerHeader}>
                            <Text style={styles.HeaderText}>
                                {AppTexts.Create_a_Account_now}
                            </Text>
                            <Text style={styles.HeaderSubText}>
                                {AppTexts.Join_Name_Email_Password}
                                <Link href={'/'} asChild>
                                    <Text style={styles.HeaderSubText2}> {AppTexts.Already_Account}
                                    </Text>
                                </Link>
                            </Text>
                        </View >
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <InputText
                                label='NOME COMPLETO'
                                mode='flat'
                                keyboardType='default'
                                underlineColor={theme.COLORS.Gray868686}
                                theme={themeTextInput}
                                background='white'
                                fontSize={12}
                                fontFamily={theme.FONTS.Popp400}
                                paddingTop={12}
                                data={name}
                                onChange={handleNameFromUser}
                                onFocus={clearMessageErro}
                            />
                            <InputText
                                label='EMAIL'
                                mode='flat'
                                keyboardType='email-address'
                                underlineColor={theme.COLORS.Gray868686}
                                theme={themeTextInput}
                                background='white'
                                fontSize={12}
                                fontFamily={theme.FONTS.Popp400}
                                paddingTop={14}
                                data={email}
                                onChange={handleEmailFromUser}
                                onFocus={clearMessageErro}
                            />
                            <InputText
                                label='SENHA'
                                mode='flat'
                                keyboardType='default'
                                underlineColor={theme.COLORS.Gray868686}
                                theme={themeTextInput}
                                background='white'
                                fontSize={12}
                                fontFamily={theme.FONTS.Popp400}
                                paddingTop={14}
                                data={password}
                                onChange={handlePasswordFromUser}
                                onFocus={clearMessageErro}
                            />
                            <View style={styles.ContainerButton}>
                                {error && (<Text style={styles.TextError}>{error}</Text>)}
                                <Button
                                    text={AppTexts.Join}
                                    fontFamily={theme.FONTS.Popp700}
                                    background={theme.COLORS.OrangeFF6C44}
                                    width={290}
                                    height={43}
                                    borderRadius={8}
                                    fontSize={14}
                                    onPress={sendNewRegister}
                                />
                            </View>
                            <Text style={styles.PrivacySecurityText}>
                                {AppTexts.Privacy_Security}
                            </Text>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    );
};

export default CreateAccount;
