import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from 'react-native'
import theme from "../../../../styles/theme";

const styles = StyleSheet.create({
    Title: {
        paddingRight: 15,
        fontFamily: theme.FONTS.Popp400,
        fontSize: RFValue(13.5),
        color: theme.COLORS.WhiteEDF3EDEB
    },
});

export { styles };