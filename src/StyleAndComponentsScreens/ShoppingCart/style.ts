import theme from "../../styles/theme";
import { StyleSheet } from "react-native";


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
    justifyContent: `space-between`,
    height: '100%',
    marginTop: 40
  },
  ContainerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  HeaderText: {
    color: theme.COLORS.Gray37C7C7A,
    fontSize: 14,
    fontFamily: theme.FONTS.Popp400
  },
  HeaderLine: {
    backgroundColor: theme.COLORS.Gray4F5F3EF,
    height: 30,
    width: '98%'
  },
  ContainerMain: {
    justifyContent: 'space-evenly',
    height: 'auto',
  },
  ContainerFooter: {
    paddingTop: 8,
    height: 'auto',
  },
  ContainerFooterSingleItem: {
    paddingTop: 10,
    marginTop: 10,
  }
});

export { styles }
