import { StyleSheet, Platform} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  Container: {
    height: '100%'
  },
  Img: {
    width: '100%',
    height: '48%',
    borderRadius: 15
  },
  ContainerMain: {
    backgroundColor: theme.COLORS.Gray2Rgba255249243047,
    width: '100%',
    height: '100%',
    borderRadius: 38,
    zIndex: 1
  },
  Main: {
    paddingLeft: 18,
    paddingRight: 18,
    width: '100%',
    height: '100%'
  },
  ContainerIcon: {
    width: '92%',
    height: '6%',
    justifyContent: 'flex-end'
  },
  Icon: {
    color: theme.COLORS.RedF15050,
    fontSize: 30,
    textAlign: 'right',
  },
  TypeProductName: {
    fontFamily: theme.FONTS.Popp600,
    fontSize: 22
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
    textAlign: 'center'
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
    textAlign: 'left',
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
      elevation: 6,
    },
  }),
};

export { styles, shadowStyle};

