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
  },
  HeaderSubText2: {
    fontFamily: theme.FONTS.Popp400,
    fontSize: RFValue(14),
    color: theme.COLORS.Orange3FF9D00,
    textAlign: 'right'
  },
  ContainerButton: {
    paddingTop: 25,
    alignItems: 'center',
    gap: 15,
    paddingBottom: 20,
  },
  PrivacySecurityText: {
    textAlign: 'center',
    fontSize: RFValue(14),
    fontFamily: theme.FONTS.Popp400,
    color: theme.COLORS.Gray868686,
  },
  TextError: {
    fontFamily: theme.FONTS.Popp400,
    color: theme.COLORS.RedF15050,
    textAlign: 'center'
  },
  TextSucess: {
    fontFamily: theme.FONTS.Popp400,
    color: theme.COLORS.Green23A26D,
    textAlign: 'center'
  },
  headerModal: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  }
});

export { styles };
