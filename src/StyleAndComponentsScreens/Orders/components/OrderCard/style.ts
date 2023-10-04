import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet, Platform } from 'react-native'
import theme from "../../../../styles/theme";

const styles = StyleSheet.create({
    Container: {
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Card: {
        height: 140,
        width: 360,
        backgroundColor: '#F3F3F3',
        borderRadius: 22,
    },
    DateOpen:{
        width: '32%',
        color: theme.COLORS.Gray949494,
        fontSize: 13,
        fontFamily: theme.FONTS.Popp400,
        marginTop: 10,
        textAlign: 'center',
    },
    DateClosed: {
        color: theme.COLORS.Gray949494,
        fontSize: 13,
        fontFamily: theme.FONTS.Popp400,
        textAlign: 'right',
        marginTop: 10,
        width: '96%'
    },
    ContainerItems: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Items: {
        flexDirection: 'row',
        width: '83%',
        justifyContent: 'space-around'
    },
    Img: {
        width: 80,
        height: 80,
        borderRadius: 25
    },
    Titles: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    OrderTitleOpen: {
        fontSize: 16,
        fontFamily: theme.FONTS.Popp500,
        width: 185,
        textAlign: 'right'
    },
    OrderTitle: {
        fontSize: 16,
        fontFamily: theme.FONTS.Popp500,
        width: 185,
    },

});

const shadowStyle = {
    ...Platform.select({
        ios: {
            shadowColor: '#ffff',
            shadowOffset: { width: 2, height: 10 },
            shadowOpacity: 40,
            shadowRadius: 5,
        },
        android: {
            elevation: 2,
        },
    }),
};

export { styles, shadowStyle}