import theme from '../../../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container: {
        width: 360,
        height: 140,
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
    CardItems: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '90%'
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
        width: 198,
        fontSize: RFValue(11),
        fontFamily: theme.FONTS.Popp400, color: theme.COLORS.Gray888888
    },
    Title3: {
        color: theme.COLORS.Black393939,
        fontSize: RFValue(11),
        fontFamily: theme.FONTS.Popp700
    },
    Title4: {
        color: theme.COLORS.OrangeFF6C44,
        fontSize: RFValue(12),
        fontFamily: theme.FONTS.Popp700
    },
    ContainerImg: {
        justifyContent: 'center'
    },
    Img: {
        width: 100,
        height: 100
    }
});

export { styles };