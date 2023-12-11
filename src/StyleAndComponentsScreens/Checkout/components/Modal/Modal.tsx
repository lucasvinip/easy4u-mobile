// CheckoutModal.tsx

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../../../../components/Button/Button';
import theme from '../../../../styles/theme';
import CPBoard from '../../../../components/CPBoard/CPBoard';
import { AppTexts } from '../../../../assets/strings';
import { styles } from '../../../../StyleAndComponentsScreens/Checkout/style';
import ModalPoup from '../../../../components/ModalPoup/Modal';
import Loading from '../../../../components/Loading/Loading';
import SucessOrder from '../SucessOrder';
import ErrorOrder from '../ErrorOrder';

interface CheckoutModalProps {
    visible: boolean;
    onClose: () => void;
    onConfirmOrder: () => void;
    loading: boolean;
    buttonClicked: boolean;
    pix: boolean;
    copy: string;
    qrCode: string;
    message: string;
    buttonOrder: boolean;
    buttonBack: boolean;
    formatBalance: string;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
    visible,
    onClose,
    onConfirmOrder,
    loading,
    buttonClicked,
    pix,
    copy,
    qrCode,
    message,
    buttonOrder,
    buttonBack,
    formatBalance,
}) => {
    return (
        <ModalPoup visible={visible} width={'80%'} height={'32%'}>
            <View style={styles.modalContainer}>
                {buttonClicked ? (
                    loading ? (
                        <Loading />
                    ) : (
                        <View style={styles.Align}>
                            {pix && <CPBoard copy={copy} qrcode={qrCode} visible={onClose} />}
                            {message && <Text style={styles.VerifyPursche}>{message}</Text>}
                            {buttonOrder && <SucessOrder onVisible={onClose} />}
                            {buttonBack && <ErrorOrder onVisible={onClose} />}
                        </View>
                    )
                ) : (
                    <View style={styles.ContainerModal}>
                        <View style={styles.bGetOut}>
                            <TouchableOpacity onPress={onClose}>
                                <FontAwesome name='times-circle' size={30} color={theme.COLORS.OrangeF6752C} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.Modal}>
                            <Text style={{ fontFamily: theme.FONTS.Raleway700, fontSize: 16 }}>
                                Seu saldo de créditos é: {formatBalance}
                            </Text>
                            <Text style={{ fontFamily: theme.FONTS.Raleway700, fontSize: 18, width: '40%', textAlign: 'center' }}>
                                {AppTexts.Confirm_Buy}
                            </Text>
                        </View>
                        <View style={styles.bConfirm}>
                            <Button
                                text={'Cofirmar'}
                                fontFamily={theme.FONTS.Popp700}
                                background={theme.COLORS.OrangeFF6C44}
                                width={100}
                                height={40}
                                borderRadius={48}
                                fontSize={14}
                                onPress={onConfirmOrder}
                            />
                        </View>
                    </View>
                )}
            </View>
        </ModalPoup>
    );
};

export default CheckoutModal;
