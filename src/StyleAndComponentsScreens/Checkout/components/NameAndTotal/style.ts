import { StyleSheet } from 'react-native'
import theme from "../../../../styles/theme";

const styles = StyleSheet.create({
    ContainerMain: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        
    },
    Main: {
        width: '100%',
        height: '95%',
        justifyContent: 'space-between',
    },
    ContentMain: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-between',
        marginTop: 5
    },
    NameAndQuantityProduct: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-around'
    },
    NameTitle:{
        fontFamily: theme.FONTS.Popp300,
        fontSize: 15
    },
    QuantityTitle:{
        fontFamily: theme.FONTS.Raleway700,
        color: theme.COLORS.Gray949494,
    },
    MainTitle: {
        fontFamily: theme.FONTS.Raleway700,
        fontSize: 15
    },
});

export { styles };
