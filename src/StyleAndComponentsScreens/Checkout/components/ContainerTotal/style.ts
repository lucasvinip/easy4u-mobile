import { StyleSheet } from 'react-native'
import theme from "../../../../styles/theme";

const styles = StyleSheet.create({
    Card: {
        borderColor: theme.COLORS.Black393939,
        borderWidth: 0.5,
        height: '90%',
        width: '90%',
        borderRadius: 18,
        justifyContent: 'space-between'
    },
    ContainerCard: {
        width: '95%',
        justifyContent: 'flex-end',
        alignSelf: 'center'
    },
    Container: {
        height: '70%',
        width: '100%',
    },
    ContainerHeader: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        width: '100%',
        borderBottomColor: theme.COLORS.Gray949494
    },
    HeaderProduct: {
        fontFamily: theme.FONTS.Popp400,
        fontSize: 15,
    },
    HeaderTotal: {
        fontFamily: theme.FONTS.Popp400,
        fontSize: 15,
    },
    ContainerSeparator: {
        position: 'relative',
        marginLeftLeft: 200,
        flexDirection: 'row'
    },
    LineSeparator: {
        borderRightWidth: 1,
        height: 150,
        marginHorizontal: 10,
        position: 'absolute',
        borderRightColor: theme.COLORS.Gray949494
    },
    HeaderProductContainer: {
        alignItems: 'center',
    },

    HeaderProductSubtitle: {
        fontFamily: theme.FONTS.Popp400,
        fontSize: 12,
        color: theme.COLORS.Gray5E5959,
    },

    HeaderTotalContainer: {
        alignItems: 'center',
    },

    HeaderTotalSubtitle: {
        fontFamily: theme.FONTS.Popp400,
        fontSize: 12,
        color: theme.COLORS.Gray5E5959,
    },
    ContainerMain: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    Main: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
    ContentMain: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 5
    },
    NameAndQuantityProduct: {
        flexDirection: 'row',
        width: '70%',
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
    ContainerFooter: {
        backgroundColor: theme.COLORS.Orange4FE724C,
        width: '100%',
        borderBottomLeftRadius: 20.5,
        borderBottomRightRadius: 20.5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        height: '12%',
        justifyContent: 'center'
    },
    Footer: {
        alignItems: 'center'
    },
    ContentFooter: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
    },
    FooterTitle: {
        color: theme.COLORS.Whiteffffff,
        fontFamily: theme.FONTS.Raleway700,
        fontSize: 15
    }
});

export { styles };
