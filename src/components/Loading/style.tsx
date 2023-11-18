import { StyleSheet } from 'react-native'
import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    VerifyBalance: {
        color: theme.COLORS.Orange4FE724C,
        fontFamily: theme.FONTS.Popp600,
        fontSize: 22
      },
      Align: {
        gap: 35,
        justifyContent: 'center',
        alignItems: 'center'
      },

});

export { styles };