import { StyleSheet, Platform } from 'react-native';
import theme from '../../../../../../styles/theme';

const styles = StyleSheet.create({
    Products: {
        backgroundColor: theme.COLORS.BeigeRgba237243237092,
        height: "90%",
        width: 205,
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
        justifyContent: 'space-around',
        width: '60%',
        alignItems: 'center',
    },
    Name: {
        fontFamily: theme.FONTS.Popp600,
        fontSize: 12,
        textAlign: 'center',
        width: '60%'
    },
    Description: {
        fontFamily: theme.FONTS.Popp500,
        fontSize: 9,
        color: theme.COLORS.Gray37C7C7A,
        textAlign: 'center',

    },
    ContainerIcon:{
        width: "91%",
        alignItems: 'flex-end'
    },
    Icon:{
        fontSize: 12,
        color: theme.COLORS.Orange4FE724C
    }
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