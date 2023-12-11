import theme from "../../../../styles/theme";
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    lottieAnimation: {
        height: '72%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        paddingBottom: 8,
        fontFamily: theme.FONTS.Raleway700,
    },
    buttonContainer: {
        width: '80%',
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    buttonText: {
        fontSize: 17,
        fontFamily: theme.FONTS.Popp600,
    },
    bGetOut: {
        alignSelf: 'flex-end',
        marginTop: 10,
        width: '10%'
    },
});

export { styles }
