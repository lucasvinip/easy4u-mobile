import React from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import theme from '../../../../styles/theme';
import ModalPoup from '../../../../components/ModalPoup/Modal';
import Button from '../../../../components/Button/Button';
import { AppTexts} from '../../../../assets/strings';
import { styles } from './styles';


interface ModalProps {
    setModalContent: () => void,
    modalContent: boolean,
    onPressBuying: () => void,
    onPressGoCart: () => void

}

const Modal: React.FC<ModalProps> = ({setModalContent, modalContent, onPressBuying, onPressGoCart}) => {


    return (
        <ModalPoup visible={modalContent} width={'75%'} height={'25%'}>
            <View style={styles.Container}>
                <View style={styles.bGetOut}>
                    <TouchableOpacity onPress={setModalContent}>
                        <FontAwesome name='times-circle' size={30} color={theme.COLORS.OrangeF6752C} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ContainerContent}>
                    <Text style={styles.Title}>
                        {AppTexts.Order_Add_Cart}
                    </Text>
                    <View style={styles.ContainerButtons}>
                        <View style={styles.Btts}>
                            <Button
                                text={AppTexts.Keep_Buying}
                                background={theme.COLORS.GrayC4C4C4}
                                width={'100%'}
                                height={35.15}
                                borderRadius={5}
                                fontSize={17}
                                fontFamily={theme.FONTS.Popp600}
                                onPress={onPressBuying}
                            />
                            <Button
                                text={AppTexts.Go_Cart}
                                background={theme.COLORS.OrangeF6752C}
                                width={'60%'}
                                height={35.15}
                                borderRadius={5}
                                fontSize={17}
                                fontFamily={theme.FONTS.Popp600}
                                onPress={onPressGoCart}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ModalPoup>
    );
}

export default Modal;