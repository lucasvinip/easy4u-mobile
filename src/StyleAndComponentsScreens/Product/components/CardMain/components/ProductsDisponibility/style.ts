import { StyleSheet, Platform } from 'react-native';
import theme from '../../../../../../styles/theme';

const styles = StyleSheet.create({
    Products: {
        backgroundColor: theme.COLORS.BeigeRgba237243237092,
        height: 92,
        width: '62%',
        borderRadius: 25,
        marginRight: 20
    },
    AboutProducts: {
        flexDirection: 'row',
        width: '100%',
        height: '100%'
    },
    Img: {
        height: '100%',
        width: '36%',
        borderRadius: 20
    },
    NameAndDescription: {
        justifyContent: 'space-evenly',
        width: '60%',
        alignItems: 'center',
    },
    Name: {
        fontFamily: theme.FONTS.Popp600,
        fontSize: 12,
        width: '50%',
        textAlign: 'center',

    },
    Description: {
        fontFamily: theme.FONTS.Popp500,
        fontSize: 9,
        textAlign: 'center',
        color: theme.COLORS.Gray37C7C7A
    },

});

const shadowStyle = {
    ...Platform.select({
        ios: {
            shadowColor: '#dcb4b4',
            shadowOffset: { width: 2, height: 5 },
            shadowOpacity: 1,
            shadowRadius: 3,
        },
        android: {
            elevation: 2,
        },
    }),
};

export { styles, shadowStyle };

