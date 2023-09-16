import {StyleSheet} from 'react-native'
import theme from "../../styles/theme";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: theme.COLORS.Whiteffffff,
    marginLeft: 18,
    marginRight: 18,
    justifyContent: `center`
  },
  ContainerHeader: {
    justifyContent: 'flex-end',
    height: '32%'
  },
  HeaderText:{
    fontSize: 30,
    fontFamily: theme.FONTS.Popp500,
    width: 300 
  },
  HeaderSubText:{
    fontFamily: theme.FONTS.Popp400,
    color: theme.COLORS.Gray868686,
    fontSize: 16,
    width: 336,
    justifyContent: 'space-around'
  },
  HeaderSubText2:{
    fontFamily: theme.FONTS.Popp400,
    fontSize: 16,
    color: theme.COLORS.Orange3FF9D00,
  },
  ContainerButton:{
    paddingTop: 45,
    alignItems: 'center'
  },
  PrivacySecurityText:{
    paddingTop: 25,
     textAlign: 'center',
      fontSize: 16,
       fontFamily: theme.FONTS.Popp400,
        color: theme.COLORS.Gray868686
  }
});

export {styles};
