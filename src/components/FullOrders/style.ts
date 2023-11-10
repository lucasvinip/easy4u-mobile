import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";


const styles = StyleSheet.create({
    Container: {
        borderColor: theme.COLORS.Black393939,
        borderWidth: 0.5,
        height: '90%',
        width: "90%",
        borderRadius: 18
    },
    HeaderContainer: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    HeaderProduct: {
        fontFamily: theme.FONTS.Popp600,
        fontSize: 16,
    },
    HeaderTotal: {
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
    ProductName: {
        fontFamily: theme.FONTS.Popp400,
        fontSize: 14,
        color: theme.COLORS.Gray5E5959
        
    },
    ProductQntd: {
        fontFamily: theme.FONTS.Popp500,
        color: theme.COLORS.GrayC4C4C4
    },
    Total: {
        fontFamily: theme.FONTS.Popp500,
    },
    TotalOrder: {
        gap: 235,
        marginTop: "25%",
        marginLeft: 15,
        marginVertical: 6,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default styles;