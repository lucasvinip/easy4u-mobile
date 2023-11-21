import { StyleSheet } from 'react-native'
import theme from '../../styles/theme';

const styles = StyleSheet.create({
    Error: {
        color: theme.COLORS.RedF15050,
        fontFamily: theme.FONTS.Popp500,
        fontSize: 12,
        
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export { styles };