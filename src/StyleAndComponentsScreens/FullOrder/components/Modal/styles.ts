import { StyleSheet } from "react-native";
import theme from "../../../../styles/theme";

const styles = StyleSheet.create({
    Container: {
        alignItems: "center",
        justifyContent: 'center',
        height: '100%'
    },
    bGetOut: {
        alignSelf: 'flex-end',
        marginTop: 45,
        width: '10%'
    },
    ContainerContent: {
        alignItems: "center",
        height: '100%',
        justifyContent: 'center'
    },
    Title: {
        fontSize: 16,
        textAlign: "center",
        paddingBottom: 8,
        fontFamily: theme.FONTS.Raleway700
    },
    ContainerButtons: {
        width: '80%',
        flexDirection: "row",
    },
    Btts: {
        alignItems: 'center',
        justifyContent: "space-evenly",
        width: '100%',
        height: '64%'
    }
});


export { styles }