// DeleteFavoriteModal.tsx

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { FontAwesome } from '@expo/vector-icons';

import theme from '../../../../styles/theme';
import Button from '../../../../components/Button/Button';
import ModalPoup from '../../../../components/ModalPoup/Modal';
import { AppTexts } from '../../../../assets/strings';
import { styles } from './styles';

interface DeleteFavoriteModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    deleteFavoriteItem: (id: number | undefined) => void;
    id: number | undefined;
}

const DeleteFavoriteModal: React.FC<DeleteFavoriteModalProps> = ({
    visible,
    setVisible,
    deleteFavoriteItem,
    id,
}) => {
    return (
        <ModalPoup visible={visible} width={'75%'} height={'30%'}>
            <View style={styles.modalContainer}>
                <View style={styles.bGetOut}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                        <FontAwesome name="times-circle" size={30} color={theme.COLORS.OrangeF6752C} />
                    </TouchableOpacity>
                </View>
                <View style={styles.lottieAnimation}>
                    <LottieView
                        autoPlay
                        style={styles.lottieAnimation}
                        source={require('../../../../assets/lottie/Animation1701906420429.json')}
                    />
                    <Text style={styles.text}>
                        {AppTexts.Exclude_Favorite}
                    </Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                text="Sim"
                                background={theme.COLORS.GrayC4C4C4}
                                width={58.15}
                                height={35.15}
                                borderRadius={5}
                                fontSize={17}
                                fontFamily={theme.FONTS.Popp600}
                                onPress={() => {
                                    setVisible(false);
                                    deleteFavoriteItem(id);
                                }}
                            />
                            <Button
                                text="Não"
                                background={theme.COLORS.OrangeF6752C}
                                width={58.15}
                                height={35.15}
                                borderRadius={5}
                                fontSize={17}
                                fontFamily={theme.FONTS.Popp600}
                                onPress={() => setVisible(false)}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ModalPoup>
    );
};

export default DeleteFavoriteModal;
