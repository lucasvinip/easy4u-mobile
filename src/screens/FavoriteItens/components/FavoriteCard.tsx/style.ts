import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from 'react-native'
import theme from "../../../../styles/theme";

const styles = StyleSheet.create({
    Container: {
        height: RFPercentage(17),
        width: RFPercentage(52),
        backgroundColor: '#F3F3F3',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        
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
    Heart: {
        color: theme.COLORS.RedF15050,
        fontSize: RFValue(20),
        paddingTop: RFValue(2),
        paddingLeft: RFValue(19)
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