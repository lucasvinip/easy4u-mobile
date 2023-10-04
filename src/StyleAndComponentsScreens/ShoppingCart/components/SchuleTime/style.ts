import theme from "../../../../styles/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    labelText: {
        width: '40%',
        textAlign: 'center',
        color: theme.COLORS.Gray5E5959,
        fontFamily: theme.FONTS.Popp600,
        fontSize: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: 150,
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
    },
    getNowButton: {
        borderColor: theme.COLORS.YellowFFAA2C,
    },
    selectTimeButton: {
        borderColor: theme.COLORS.Gray2Rgba255249243047,
    },
    buttonText: {
        fontFamily: theme.FONTS.Raleway700,
        textAlign: 'center',
    },
    getNowButtonText: {
        color: theme.COLORS.OrangeF6752C,
    },
    selectTimeButtonText: {
        color: theme.COLORS.Gray5E5959,
        width: 77,
    },
});

export {styles}