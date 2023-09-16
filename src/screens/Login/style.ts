import { StyleSheet } from 'react-native'
import theme from '../../styles/theme';


const styles = StyleSheet.create({
  Container: {
    backgroundColor: theme.COLORS.Whiteffffff,
    marginLeft: 18,
    marginRight: 18,
    justifyContent: `center`
  },
  ContainerHeader: {
    justifyContent: 'flex-end',
    height: '28%',
  },
  HeaderText: {
    width: 350,
    fontFamily: theme.FONTS.Popp500,
    fontSize: 30
  },
  HeaderSubText: {
    width: 350,
    fontFamily: theme.FONTS.Popp400,
    fontSize: 16,
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
    fontSize: 12,
    fontFamily: theme.FONTS.Popp300,
    color: theme.COLORS.Gray65E5959
  },
  ClicksContainer: {
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'space-evenly'
  },
  ClicksContainerText1: {
    fontSize: 12,
    fontFamily: theme.FONTS.Popp300,
    color: theme.COLORS.Gray65E5959
  },
  ClicksContainerText2: {
    fontSize: 12,
    fontFamily: theme.FONTS.Popp500,
    color: theme.COLORS.YellowEEA734
  },
  ContainerFooter: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '16%'
  },
  FooterText: {
    fontSize: 16,
    fontFamily: theme.FONTS.Popp400
  },
  ContainerButton: {
    paddingTop: 20,
    alignItems: 'center'
  }
});

export {styles}
