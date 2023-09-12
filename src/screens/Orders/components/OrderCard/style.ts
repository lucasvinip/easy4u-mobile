import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from 'react-native'
import theme from "../../../../styles/theme";

const styles = StyleSheet.create({
    Container: {
        height: RFValue(120),
        width: RFValue(326),
        backgroundColor: '#F3F3F3',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 4, height: 5 },
        shadowOpacity: 10,
        shadowRadius: 6,
        elevation: 3,
    },
    ContainerItems: {
        flexDirection: 'row', justifyContent: 'space-evenly'
    },
    Img: {
        width: RFValue(80),
        height: RFValue(80),
        justifyContent: 'center'
    },
    Title: {
        fontSize: RFValue(16),
        width: RFValue(128),
        color: theme.COLORS.Black393939,
        fontFamily: theme.FONTS.Popp500
    },
    Date: {
        color: theme.COLORS.Gray888888,
        fontSize: RFValue(10),
        fontFamily: theme.FONTS.Popp400,
        paddingTop: RFValue(5)
    },
    R$: {
        color: theme.COLORS.Black393939,
        fontSize: RFValue(12),
        fontFamily: theme.FONTS.Popp700
    },
    Price: {
        color: theme.COLORS.OrangeFF6C44,
        fontSize: RFValue(12),
        fontFamily: theme.FONTS.Popp600
    },
    Status: {
        color: theme.COLORS.Gray949494,
        fontSize: RFValue(11),
        fontFamily: theme.FONTS.Popp600
    }
});

export { styles }