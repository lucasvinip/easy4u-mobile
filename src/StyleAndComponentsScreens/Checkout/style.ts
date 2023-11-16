import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.COLORS.Whiteffffff
  },
  Container: {
    backgroundColor: theme.COLORS.Whiteffffff,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-around'
  },
  ContainerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '28%'
  },
  ContainerMain: {
    justifyContent: 'space-evenly',
    height: '45%'
  },
  TitleMain: {
    textAlign: 'center',
    width: '65%',
    fontFamily: theme.FONTS.Raleway600,
    fontSize: 18
  },
  ContainerFooter: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '23.5%'
  },
});


export { styles }