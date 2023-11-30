import theme from '../../../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
    Container: {
        width: 345,
        height: 132,
        backgroundColor: theme.COLORS.Whiteffffff,
        borderRadius: 15,
        marginBottom: 37
    },
    ContainerCard: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    CardItemsTimePreparing: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '80%',
    },
    CardItems: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '57%',
    },
    Description: {
        justifyContent: 'space-between',
        height: '83%',
    },
    Title1: {
        fontSize: RFValue(15.5),
        fontFamily: theme.FONTS.Popp400
    },
    Title2: {
        fontSize: 14,
        fontFamily: theme.FONTS.Popp400, color: theme.COLORS.Gray888888,
        textAlign: 'center',
        width: '80%'
    },
    Title3: {
        color: theme.COLORS.Black393939,
        fontSize: RFValue(11),
        fontFamily: theme.FONTS.Popp700
    },
    ContainerPriceAndTime: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        justifyContent: 'space-around',
    },
    Title4: {
        color: theme.COLORS.OrangeFF6C44,
        fontSize: RFValue(12),
        fontFamily: theme.FONTS.Popp700
    },
    ContainerTime: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '37%'
    },
    Icon: {
        marginBottom: 3
    },
    TitleTime: {
        marginBottom: 3,
        fontFamily: theme.FONTS.Raleway600,
        color: theme.COLORS.Gray37C7C7A
    },
    ContainerImg: {
        justifyContent: 'center',
    },
    Img: {
        width: 100,
        height: 100,
        borderRadius: 20
    }
});

const shadowStyle = {
    ...Platform.select({
        ios: {
            shadowColor: '#ffff',
            shadowOffset: { width: 1, height: 3 },
            shadowOpacity: 50,
            shadowRadius: 3,
            elevation: 2
        },
        android: {
            elevation: 2,
        },
    }),
};

export { styles, shadowStyle };