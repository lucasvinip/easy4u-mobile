import React, { useEffect, useRef, useState } from 'react';
import {
    Modal,
    View,
    Animated,
    StyleSheet,
    Text
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

import { AppTexts } from '../../assets/strings';

interface TopModalProps {
    visible: boolean;
}

const TopModal: React.FC<TopModalProps> = ({ visible }) => {
    const [showModal, setShowModal] = useState<boolean>(visible);
    const translateY = useRef(new Animated.Value(0)).current;

    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(translateY, {
                toValue: 20,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translateY, {
                toValue: -50,
                duration: 300,
                useNativeDriver: true,
            }).start(() => setShowModal(false));
        }
    };

    useEffect(() => {
        toggleModal();
    }, [visible]);

    return (
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackground}>
                <Animated.View style={[styles.modalContainer, { transform: [{ translateY }] }]}>
                    <View style={styles.modalContent}>
                        <View style={styles.iconContainer}>
                            <LottieView
                                autoPlay
                                style={{}}
                                source={require('../../assets/lottie/Animation1701813693711.json')}
                            />
                            <Text style={styles.modalText}>{AppTexts.Oops_Choose_Payment}</Text>
                        </View>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 70,
        width: '80%',
    },
    modalContainer: {
        width: '100%',
        height: 'auto',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
        elevation: 15,
    },
    modalContent: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
    },
    iconContainer: {
        flexDirection: 'row',
        backgroundColor: 'green',
        width: '100%'
    },
    modalText: {
        fontSize: 14,
        color: '#333',
    },
});

export default TopModal;
