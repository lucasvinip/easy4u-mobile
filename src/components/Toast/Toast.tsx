import React, { useEffect, useRef, useState } from 'react';
import {
    Modal,
    View,
    Animated,
    Text,
    DimensionValue
} from 'react-native';
import LottieView from 'lottie-react-native';

import { AppTexts } from '../../assets/strings';
import { styles } from './style'

interface TopModalProps {
    visible: boolean,
    src: any,
    text: string,
    width: DimensionValue;
    height: DimensionValue;
}

const TopModal: React.FC<TopModalProps> = ({
    visible,
    src,
    text,
    width,
    height
}) => {
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
                                style={[styles.lottie, { width: width, height: height }]}
                                source={src}
                            />
                            <Text style={styles.modalText}>{text}</Text>
                        </View>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
};



export default TopModal;
