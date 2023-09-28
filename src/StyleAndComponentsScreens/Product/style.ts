import { StyleSheet, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: theme.COLORS.Beige65E5959,
    height: '100%',
    width: '100%'
  },
  Background: {
    backgroundColor: theme.COLORS.White2F3F3F3,
    height: '100%',
    width: '100%'
  },
  Img: {
    width: '100%',
    height: '48%',
    borderRadius: 15,
    position: 'absolute'
  },
  Backgroung2: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  ContainerIcon: {
    width: '85%',
    height: '61%',
    alignItems: 'flex-end',
    position: 'absolute'
  },
  ContainerCircle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  Circle: {
    borderRadius: 100,
    width: 48,
    height: 48,
    backgroundColor: theme.COLORS.OrangeFF6C44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Icon: {
    color: theme.COLORS.Gray4F5F3EF,
    fontSize: RFValue(25),
  },
  Screen: {
    backgroundColor: theme.COLORS.Gray4F5F3EF,
    width: '100%',
    height: '58%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'absolute',
  },
  Container: {
    height: '100%',
    marginRight: 15,
    marginLeft: 15,
    justifyContent: 'center',
    zIndex: 3,

  },
  ContainerMain: {
    height: '99%',
    justifyContent: 'center',
  },
  Main: {
    height: '100%',
    justifyContent: 'space-evenly',

  },
  TypeProductName: {
    fontFamily: theme.FONTS.Popp600,
    fontSize: RFValue(18),
  },
  ContainerAvailable: {
    paddingBottom: 20
  },
  AvailableText: {
    fontFamily: theme.FONTS.Popp600,
    fontSize: 16
  },
  AvailableScroll: {
    height: '15%',
    width: '50%'
  },
  ScrollText: {
    fontFamily: theme.FONTS.Popp500,
    fontSize: 12,
    color: theme.COLORS.Gray37C7C7A,
    textAlign: 'center',
  },
  ContainerObservationAmount: {
    height: '12%'
  },
  ObservationAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%'
  },
  ContainerObservation: {
    alignItems: 'center'
  },
  ObservationText: {
    textAlign: 'left',
    width: '85%',
    color: theme.COLORS.Gray37C7C7A,
    fontFamily: theme.FONTS.Popp600,
    fontSize: 12
  },
  AmountText: {
    width: '100%',
    color: theme.COLORS.Gray37C7C7A,
    fontFamily: theme.FONTS.Popp600,
    fontSize: 12
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

