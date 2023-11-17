import { StyleSheet } from "react-native";
import theme from "../../../../styles/theme";

const styles = StyleSheet.create({
    Container:{

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
    NameTitle: {
        fontFamily: theme.FONTS.Popp300,
        fontSize: 15
    },
    QuantityTitle: {
        fontFamily: theme.FONTS.Raleway700,
        color: theme.COLORS.Gray949494,
    },
    MainTitle: {
        fontFamily: theme.FONTS.Raleway700,
        fontSize: 15
    },
    HeaderProduct: {
        fontFamily: theme.FONTS.Popp600,
        fontSize: 16,
    },
    ProductInfo: {
        gap: 60,
        marginLeft: 15,
        marginVertical: 6,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    Total: {
        fontFamily: theme.FONTS.Popp500,
    },
    TotalOrder: {
        
    },
});

export {styles}