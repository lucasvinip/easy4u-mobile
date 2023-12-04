import React, { useState, useEffect } from 'react';
import { View, Modal } from 'react-native';
import { BaseToastProps, ErrorToast, ToastConfig, ToastOptions } from 'react-native-toast-message'; // Adicionei o tipo ToastConfig
import { styles } from './style';

interface ToastProps {
    onVisible: boolean;
}

const Toast: React.FC<ToastProps> = () => {

    const toastConfig: ToastOptions | BaseToastProps = {
        position: "top",
        autoHide: true,
        visibilityTime: 3000,
        text1: "Olá Mundo!",
        topOffset: 10 
    };

    return (
        <ErrorToast {...toastConfig} style={{position: "sticky"}}/>
    );
};

export default Toast;
