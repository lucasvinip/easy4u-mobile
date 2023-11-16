import { StyleSheet, Platform } from 'react-native';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
  Container: {
    height: '85%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  ContainerHeader: {
    justifyContent: 'space-evenly',
    width: '95%',
    height: 'auto'
  },
  TypeProductName: {
    fontFamily: theme.FONTS.Popp600,
    fontSize: 26,
    width: '60%',
    textAlign: 'center',
    height: 'auto',
  },
  ContainerDescription: {
    width: '100%',
    height: '30%',
  },
  TitleDescription: {
    fontFamily: theme.FONTS.Raleway600,
    color: theme.COLORS.Gray37C7C7A,
    fontSize: 15,
    width: 'auto',
    height: 'auto',
    textAlign: 'left',
    marginLeft: 5
  },
  ContainerMain: {
    height: '57%',
    width: '100%',
    justifyContent: 'center',
  },
  AvailableText: {
    fontFamily: theme.FONTS.Popp600,
    color: theme.COLORS.GrayC4C4C4,
    fontSize: 15,
    width: '35%',
    textAlign: 'right'
  },
  AvailableProducts: {
    height: '70%', // You can adjust this as needed
    width: 'auto',
    justifyContent: 'center',
  },
  ContainerProducts: {
    height: '100%',
    flexDirection: 'row',
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

