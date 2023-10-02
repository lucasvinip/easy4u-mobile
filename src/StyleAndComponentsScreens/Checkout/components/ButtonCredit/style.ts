import { Platform, StyleSheet } from 'react-native'
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
    Container: {
        backgroundColor: theme.COLORS.Whiteffffff,
        borderRadius: 28,
        width: 315,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Touchable: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
        
    },
    TouchableIcon: {
        color: theme.COLORS.White2F3F3F3,
        fontSize: 28,
        paddingTop: 5
    },
    TouchableText: {
        color: theme.COLORS.Black000000,
        fontFamily: theme.FONTS.Popp600,
        paddingTop: 8
    }
});

const shadowStyle = {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
    }),
  };

export { styles, shadowStyle};
