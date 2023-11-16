import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.COLORS.Whiteffffff,
  },
  Container: {
    backgroundColor: theme.COLORS.Whiteffffff,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-between'
  },
  ContainerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '23%'
  },
  ContainerMain: {
    justifyContent: 'space-between',
    height: '48%'
  },
  TitleMain: {
    textAlign: 'center',
    width: '65%',
    fontFamily: theme.FONTS.Raleway600,
    fontSize: 18
  },
  ContainerFooter: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '25%'
  },
  ContainerPayment: {
    alignItems: 'center',
    width: '100%',
  },
  TitlePayment: {
    color: theme.COLORS.Gray949494,
    fontFamily: theme.FONTS.Popp300,
    fontSize: 12
  },
  Payment: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '65%',
    alignContent: 'center'
  }
});


export { styles }