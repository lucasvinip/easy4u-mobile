import theme from "../../styles/theme";
import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.COLORS.Whiteffffff
  },
  Container: {
    marginLeft: 18,
    marginRight: 18,
    justifyContent: 'center'
  },
  ContainerHeader: {
    height: '50%',
    justifyContent: 'flex-end'
  },
  HeaderText: {
    fontFamily: theme.FONTS.Popp500,
    fontSize: 30,
    width: 300
  },
  HeaderSubText: {
    fontFamily: theme.FONTS.Popp400,
    fontSize: 16,
    color: theme.COLORS.Gray868686,
    width: 270
  },
  ContainerButton:{
    paddingTop: 25,
    alignItems: 'center'
  }
});

export { styles };
