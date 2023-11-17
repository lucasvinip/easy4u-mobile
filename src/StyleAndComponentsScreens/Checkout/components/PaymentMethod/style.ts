import { Platform, StyleSheet } from 'react-native'
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
    Container: {
        backgroundColor: theme.COLORS.Whiteffffff,
        borderRadius: 100,
        borderStyle: "solid",
        borderWidth: 2,
        width: '35%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Touchable: {
        width: '100%',
        flexDirection: 'column',
        gap: 5,
        alignItems: "center"
    },
    TouchableIcon: {
        color: theme.COLORS.Orange2FFA24B,
        fontSize: 28,
        textAlign: 'center'
    },
    Pix: {
      textAlign: 'center'
  },
    TouchableText: {
        color: theme.COLORS.Black000000,
        fontFamily: theme.FONTS.Popp600,
        fontSize: 12,
        textAlign: 'center'
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
