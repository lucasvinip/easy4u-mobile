import { StyleSheet } from 'react-native'
import theme from "../../../../styles/theme";

const styles = StyleSheet.create({
    Container: {
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Card: {
        height: 140,
        width: 350,
        backgroundColor: '#F3F3F3',
        borderRadius: 15,
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
        justifyContent: 'space-evenly'
    },
    Text: {
        fontSize: 16,
        width: '60%',
        color: theme.COLORS.Black393939,
        fontFamily: theme.FONTS.Popp500
    },
    ContainerPriceHeart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    Heart: {
        color: theme.COLORS.Black000000,
        fontSize: 20,
        justifyContent: 'flex-end'
    },
    R$: {
        color: theme.COLORS.Black393939,
        fontSize: 12,
        fontFamily: theme.FONTS.Popp700
    },
    Price: {
        color: theme.COLORS.OrangeFF6C44,
        fontSize: 12,
        fontFamily: theme.FONTS.Popp600
    },
});

export { styles }