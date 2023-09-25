import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';


const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.COLORS.Whiteffffff
  },
  Container: {
    backgroundColor: theme.COLORS.Whiteffffff,
    marginLeft: 18,
    marginRight: 18,
    justifyContent: 'center',
    
  },
  ContainerHeader: {
    justifyContent: 'flex-end',
    height: '21%',
  },
  HeaderText: {
    width: 320,
    fontFamily: theme.FONTS.Popp500,
    fontSize: RFValue(30)
  },
  HeaderSubText: {
    width: 350,
    fontFamily: theme.FONTS.Popp400,
    fontSize: RFValue(15),
    color: theme.COLORS.Gray868686
  },
  ContainerInputs: {
    paddingTop: 15
  },
  ContainerClicks: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '29%'
  },
  ClicksText: {
    fontSize: RFValue(11),
    fontFamily: theme.FONTS.Popp300,
    color: theme.COLORS.Beige65E5959
  },
  ClicksContainer: {
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'space-evenly'
  },
  ContainerFooter: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '16%'
  },
  FooterText: {
    fontSize: RFValue(15),
    fontFamily: theme.FONTS.Popp400
  },
  ContainerButton: {
    paddingTop: 20,
    alignItems: 'center'
  }
});

export {styles}
