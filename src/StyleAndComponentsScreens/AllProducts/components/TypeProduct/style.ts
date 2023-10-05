import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from 'react-native'
import theme from "../../../../styles/theme";

const styles = StyleSheet.create({
    Container: {
        borderColor: theme.COLORS.YellowEEA734,
        borderWidth: .5,
        borderRadius: 5,
        width: 80,
        height: 25,
        backgroundColor: theme.COLORS.GrayRgba255249243041,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Title: {
        fontFamily: theme.FONTS.Popp400,
        fontSize: RFValue(13.5),
        color: theme.COLORS.WhiteEDF3EDEB,
        textAlign: 'center',
    },
});

export { styles };