import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from 'react-native'
import theme from "../../../../styles/theme";

const styles = StyleSheet.create({
    Container: {
        borderColor: theme.COLORS.Whiteffffff,
        borderWidth: .5,
        borderRadius: 20,
        width: 'auto',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 11
    },
    Title: {
        fontFamily: theme.FONTS.Popp400,
        fontSize: RFValue(12.5),
        color: theme.COLORS.WhiteEDF3EDEB,
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
});

export { styles };