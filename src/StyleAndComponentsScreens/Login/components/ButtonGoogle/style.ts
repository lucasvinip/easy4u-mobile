import { StyleSheet, Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
    Container: {
        backgroundColor: theme.COLORS.Blue4285F4,
        borderRadius: 8,
        width: 275,
        height: 40,
        alignItems: 'center'
    },
    Touchable: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
        
    },
    TouchableIcon: {
        color: theme.COLORS.White2F3F3F3,
        fontSize: RFValue(24),
        paddingTop: 7
    },
    TouchableText: {
        color: 'white',
        fontFamily: theme.FONTS.Popp700,
        
        paddingTop: 10,
    }
});

export { styles };

