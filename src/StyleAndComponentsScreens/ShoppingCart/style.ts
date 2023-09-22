import theme from "../../styles/theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  Container: {
    backgroundColor: theme.COLORS.Whiteffffff,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: `center`
  },
  ContainerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 20
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
  ContainerMain:{
    marginBottom: 15,
    justifyContent: 'space-evenly' 
  },
  ConatinerFooter:{
    justifyContent: 'center',
     paddingTop: 20,
    height: 'auto' 
  }
});

export { styles }
