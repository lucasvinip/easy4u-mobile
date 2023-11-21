import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { ErrorToast } from 'react-native-toast-message';
import { styles } from './style';

const Toast: React.FC = () => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true} // Certifique-se de controlar a visibilidade do modal conforme necessário
        >
            <View style={styles.modalContainer}>
                <View style={{}}>
                    <ErrorToast
                        activeOpacity={50}
                        text1='Selecione um Método de agamento'
                        text1Style={styles.Error}
                    />
                </View>
            </View>
        </Modal>
    );
}

export default Toast;
