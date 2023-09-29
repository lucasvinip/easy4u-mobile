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
    // marginBottom: 430,
    width: '90%',
    alignItems: 'flex-end',
    zIndex: 1
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
  },
  Container: {
    height: '100%',
    marginRight: 15,
    marginLeft: 15,
    justifyContent: 'center',
  },
  ContainerMain: {
    height: '99%',
  },
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
    paddingBottom: 20
  },
  AvailableText: {
    fontFamily: theme.FONTS.Popp600,
    fontSize: RFValue(14)
  },
  AvailableScroll: {
    height: '20%',
    width: '70%'
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
    fontSize: RFValue(10.5)
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

