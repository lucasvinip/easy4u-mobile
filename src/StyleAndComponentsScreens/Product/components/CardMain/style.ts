import { StyleSheet, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
  Container: {
    height: '92%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  ContainerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
  },
  TypeProductName: {
    fontFamily: theme.FONTS.Popp600,
    fontSize: RFValue(20),
    width: '90%',
    height: 'auto',
  },
  AmountText: {
    color: theme.COLORS.Gray37C7C7A,
    fontFamily: theme.FONTS.Popp600,
    fontSize: RFValue(10),
    textAlign: 'center'
  },
  ContainerDescription: {
    width: '100%',
    height:'12%',
  },
  TitleDescription:{
    fontFamily: theme.FONTS.Raleway600,
    color: theme.COLORS.Gray37C7C7A,
    fontSize: 14,
    width: 'auto',
    marginLeft: 30
  },
  ContainerMain: {
    backgroundColor: 'green',
    height: '57%',
    width: '100%'
  },
  AvailableText: {
    fontFamily: theme.FONTS.Popp600,
    fontSize: RFValue(15)
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

