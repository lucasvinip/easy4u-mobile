import { StyleSheet } from 'react-native'
import theme from '../../styles/theme';

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
        backgroundColor: theme.COLORS.Orange2FFA24B,
        padding: 10,
        borderRadius: 15,
        elevation: 15,
    },
    modalContent: {
        backgroundColor: theme.COLORS.Orange2FFA24B,
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    lottie: {
        marginRight: 10,
    },
    modalText: {
        fontSize: 13,
        fontFamily: theme.FONTS.Raleway700,
        marginBottom: 1.5
    },
});

export { styles };