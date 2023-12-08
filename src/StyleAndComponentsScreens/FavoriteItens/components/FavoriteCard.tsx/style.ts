import { StyleSheet, Platform } from 'react-native'
import theme from "../../../../styles/theme";

const styles = StyleSheet.create({
    Container: {
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Card: {
        height: 132,
        width: 345,
        backgroundColor: '#F3F3F3',
        borderRadius: 30,
        justifyContent: 'center',

    },
    ContainerItems: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    Img: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        borderRadius: 10
    },
    ContainerTexts: {
        width: '55%',
        justifyContent: 'space-evenly',
    },
    Text: {
        fontSize: 16,
        width: 'auto',
        color: theme.COLORS.Black393939,
        fontFamily: theme.FONTS.Popp500,
    },
    ContainerPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    Delete: {
        justifyContent: 'flex-end'
    },
    Price: {
        color: theme.COLORS.RedF15050,
        fontSize: 13,
        fontFamily: theme.FONTS.Popp600
    },
    Icon: {
        marginBottom: 3
    },
    TitleTime: {
        marginBottom: 3,
        fontFamily: theme.FONTS.Raleway600,
        color: theme.COLORS.Gray37C7C7A
    },
});

const shadowStyle = {
    ...Platform.select({
        ios: {
            shadowColor: '#ffff',
            shadowOffset: { width: 2, height: 10 },
            shadowOpacity: 40,
            shadowRadius: 5,
        },
        android: {
            elevation: 2,
        },
    }),
};

export { styles, shadowStyle }