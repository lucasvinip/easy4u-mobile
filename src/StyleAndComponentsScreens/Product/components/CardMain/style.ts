import { StyleSheet, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
  Main: {
    height: '90%',
    justifyContent: 'space-around',
  },
  TypeProductName: {
    fontFamily: theme.FONTS.Popp600,
    fontSize: RFValue(20),
    width: '64%',
    textAlign: 'center'
  },
  ContainerAvailable: {
    backgroundColor: 'green',
    height: '50%',
  },
  AvailableText: {
    fontFamily: theme.FONTS.Popp600,
    fontSize: RFValue(14)
  },
  AvailableScroll: {
    height: '100%',
    width: '100%',
    flexWrap: 'wrap'
  },
  ScrollText: {
    fontFamily: theme.FONTS.Popp500,
    fontSize: 12,
    color: theme.COLORS.Gray37C7C7A,
    textAlign: 'center',
  },
  ContainerAmount: {
    height: '12%',
    width: '100%',
    alignItems: 'flex-end'
  }, 
  AmountText: {
    width: '100%',
    color: theme.COLORS.Gray37C7C7A,
    fontFamily: theme.FONTS.Popp600,
    fontSize: RFValue(10.5)
  },
  ContainerButton: {
    alignItems: 'center'
  }
});

const shadowStyle = {
  ...Platform.select({
    ios: {
      shadowColor: '#dcb4b4',
      shadowOffset: { width: 2, height: 5 },
      shadowOpacity: 1,
      shadowRadius: 3,
    },
    android: {
      elevation: 2,
    },
  }),
};

export { styles, shadowStyle };

