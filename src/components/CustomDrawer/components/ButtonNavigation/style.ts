import theme from '../../../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Button: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Icon: {
        color: theme.COLORS.Gray37C7C7A
    },
    Title: {
        color: theme.COLORS.Gray37C7C7A,
        fontSize: RFValue(13),
        fontFamily: theme.FONTS.Popp500,
        paddingTop: 5,
        width: '55%',
        paddingLeft: 10
    }
});


export { styles };