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
    height: '70%',
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
    width: 55,
    height: 55,
    backgroundColor: theme.COLORS.OrangeFF6C44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Icon: {
    color: theme.COLORS.Gray4F5F3EF,
    fontSize: RFValue(30),
  },
  Screen: {
    backgroundColor: theme.COLORS.Gray4F5F3EF,
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
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

