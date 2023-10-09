import React, { useState } from 'react';
import { View, } from 'react-native';
import { Card, DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

import theme from '../styles/theme';
import TouchTextAlter from '../StyleAndComponentsScreens/ProfileSetting/components/TouchTextAlter/TouchTextAlter';
import InputText from '../components/CustomTextInput/CustomTextInput';
import { AppTexts } from '../assets/strings';
import Button from '../components/Button/Button';
import { styles } from '../StyleAndComponentsScreens/ProfileSetting/style';
import UseFonts from '../styles/useFonts';
import Camera from '../StyleAndComponentsScreens/ProfileSetting/components/Camera/Camera';

const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',
    },
};

const ProfileSetting = () => {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const pickImageAsync = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                quality: 1,
            });

            if (!result.canceled)
                setSelectedImage(result.assets[0].uri);
            else
                alert(AppTexts.Didnt_Choose_Image);

        } catch (error) {
            console.error('Error picking an image:', error);
        }
    };

    return (
        <UseFonts>
            <SafeAreaView style={{ backgroundColor: theme.COLORS.White2F3F3F3 }}>
                <View style={styles.Screen}>
                    <View style={styles.Container}>
                        <View style={styles.ContainerHeader}>
                            <Camera onPress={pickImageAsync} selectedImage={selectedImage} placeholderImageSource={require('../assets/img/user.png')} />
                        </View>
                        <InputText
                            label='NOME COMPLETO'
                            mode='flat'
                            keyboardType='default'
                            underlineColor={theme.COLORS.Gray868686}
                            theme={themeTextInput}
                            background='white'
                            fontSize={12}
                            fontFamily={theme.FONTS.Popp400}
                            paddingTop={30}
                            data={name}
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
                            paddingTop={30}
                            data={email}
                        />
                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchTextAlter />
                        </View>
                        <View style={styles.ContainerButton}>
                            <Button
                                text={AppTexts.Change_Settings}
                                fontFamily={theme.FONTS.Popp700}
                                background={theme.COLORS.OrangeFF6C44}
                                width={280}
                                height={42}
                                borderRadius={8}
                                fontSize={14}
                            />
                        </View>

                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    );
};

export default ProfileSetting;
