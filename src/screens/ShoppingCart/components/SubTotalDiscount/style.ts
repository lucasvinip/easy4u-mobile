import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
    Card: {
        backgroundColor: theme.COLORS.Gray4F5F3EF,
        width: 'auto',
        height: 160,
        borderRadius: 5,
    },
    ContentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    labelText: {
        fontSize: 14,
        fontFamily: theme.FONTS.Popp400,
    },
    valueText: {
        fontSize: 15,
        fontFamily: theme.FONTS.Popp500,
        height: 'auto',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { styles}