import { StyleSheet } from 'react-native'
import theme from "../../styles/theme";
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.COLORS.Whiteffffff
  },
  Container: {
    marginLeft: 18,
    marginRight: 18,
    justifyContent: 'center',
    height: '100%',
  },
  ContainerHeader: {
    justifyContent: 'flex-end',
    height: '32%'
  },
  HeaderText: {
    fontSize: 30,
    fontFamily: theme.FONTS.Popp500,
    width: 300
  },
  HeaderSubText: {
    fontFamily: theme.FONTS.Popp400,
    color: theme.COLORS.Gray868686,
    fontSize: RFValue(14),
    width: 336,
    justifyContent: 'space-around'
  },
  HeaderSubText2: {
    fontFamily: theme.FONTS.Popp400,
    fontSize: RFValue(14),
    color: theme.COLORS.Orange3FF9D00,
  },
  ContainerButton: {
    paddingTop: 25,
    alignItems: 'center',
    paddingBottom: 20,
  },
  PrivacySecurityText: {
   
    textAlign: 'center',
    fontSize: RFValue(14) ,
    fontFamily: theme.FONTS.Popp400,
    color: theme.COLORS.Gray868686,
  }
});

export { styles };
