import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import {
    getDownloadURL,
    uploadBytes,
    ref,
    deleteObject
} from 'firebase/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

import theme from '../styles/theme';
import TouchTextAlter from '../StyleAndComponentsScreens/ProfileSetting/components/TouchTextAlter/TouchTextAlter';
import InputText from '../components/CustomTextInput/CustomTextInput';
import { AppTexts } from '../assets/strings';
import Button from '../components/Button/Button';
import { styles } from '../StyleAndComponentsScreens/ProfileSetting/style';
import UseFonts from '../hooks/useFonts';
import Camera from '../StyleAndComponentsScreens/ProfileSetting/components/Camera/Camera';
import { performApi } from '../utils/api';
import { useToken } from '../hooks/useToken';
import { storage } from '../../firebaseConfig';


const themeTextInput = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',
    },
};

type userInfo = {
    name: string;
    email: string;
    photo: string;
}

const defaultPhoto = require("../assets/img/user.png")

const ProfileSetting = () => {
    const [userSetting, setUserSetting] = useState<userInfo>();
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const token = useToken();

    const userPhotoProfile = userSetting?.photo ? { uri: userSetting?.photo } : defaultPhoto


    const uploadImage = async (uri: string): Promise<any> => {
        const blob = await new Promise<Blob>((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.onload = function () {
                resolve(xhr.response)
            }
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError('Network request failed'))
            }
            xhr.responseType = 'blob'
            xhr.open('GET', uri, true)
            xhr.send(null)
        })

        try {
            const storageRef = ref(storage, `image-${Date.now()}`)
            console.log("Storage REF: " + storageRef)
            const result = await uploadBytes(storageRef, blob)

            return await getDownloadURL(storageRef)
        } catch (error) {
            alert(`Error : ${error}`)
        }
    };

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                quality: 1,
            });

            if (!result.canceled) {
                setLoading(true)
                const uploadURL = await uploadImage(result.assets[0].uri);
                await AsyncStorage.setItem("savedImage", uploadURL)


                setTimeout(() => {
                    setLoading(false);

                }, 2000);

                setSelectedImage(uploadURL);
            } else {
                alert(AppTexts.Didnt_Choose_Image);
            }
        } catch (error) {
            console.error('Error picking an image:', error);
        }
    };
    const deleteImage = async () => {
        const deleteRef = ref(storage, selectedImage)

        try {
            deleteObject(deleteRef).then(() => {
                setSelectedImage('')
                setLoading(true)
                setInterval(() => {
                    setLoading(false)
                }, 200)
            })
        } catch (error) {
            alert(`Error : ${error}`)
        }
    }
    const saveImage = async () => {
        const foto = await AsyncStorage.getItem("savedImage")
        const updateUserImage = await performApi.updateData("users", token, { photo: foto })
        return updateUserImage
    }

    useEffect(() => {
        const getSettings = async () => {
            const data = await performApi.getData("auth/me", token)
            setUserSetting(data)
        }
        getSettings()
    }, [token])

    return (
        <UseFonts>
            <SafeAreaView style={{ backgroundColor: theme.COLORS.White2F3F3F3 }}>
                <View style={styles.Screen}>
                    <View style={styles.Container}>
                        <View style={styles.ContainerHeader}>
                            {loading && <ActivityIndicator style={{ justifyContent: 'flex-end', alignItems: 'center', height: "50%", width: "100%", position: 'absolute', zIndex: 1 }} size={40} color={theme.COLORS.GrayRgba255249243041} />}
                            <Camera
                                selectedImage={selectedImage}
                                placeholderImageSource={userPhotoProfile}
                                buttuTypeIcon={selectedImage}
                                postPhoto={pickImage}
                                deletePhoto={deleteImage}
                            />
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
                            data={userSetting?.name}
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
                            data={userSetting?.email}
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
                                onPress={() => saveImage()}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>
    );
};

export default ProfileSetting;
