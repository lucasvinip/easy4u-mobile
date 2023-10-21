import theme from '../../../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Input: {
        width: 330,
        height: 50,
        borderColor: 'gray',
        paddingLeft: 12,
        paddingTop: 5,
        backgroundColor: theme.COLORS.Gray2Rgba255249243047,
        borderRadius: 30,
        fontSize: RFValue(14.5),
        fontFamily: theme.FONTS.Popp400,
        color: theme.COLORS.White2F3F3F3
    },
    ButtonSearch:{
        flexDirection: 'column',
        justifyContent: 'center'
    },
    Icon: {
        position: 'absolute',
        right: 14,
        fontSize: 25,
        color: theme.COLORS.Whiteffffff
    }

});

export { styles };