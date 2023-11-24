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
  ContainerCard: {
    borderColor: theme.COLORS.Black393939,
    borderWidth: 0.5,
    height: '90%',
    width: '90%',
    borderRadius: 18,
    justifyContent: 'space-between',
  },
  Card: {
    width: '95%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  CardContent: {
    height: '80%',
    width: '100%',
  },
  ContainerContent: {
    width: '100%',
    height: '20%' ,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: theme.COLORS.Gray949494
  },
  TitleName: {
    fontFamily: theme.FONTS.Popp400,
    fontSize: 15,
  },
  ContainerSeparator: {
    position: 'relative',
    marginLeftLeft: 200,
    flexDirection: 'row'
  },
  LineSeparator: {
    borderRightWidth: 1,
    height: 150,
    marginHorizontal: 10,
    position: 'absolute',
    borderRightColor: theme.COLORS.Gray949494
  },
  TitleTotal: {
    fontFamily: theme.FONTS.Popp400,
    fontSize: 15,
  },
  ContainerCardMain: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  CardMain: {
    width: '100%',
    height: '100%',
  },
  CardFooter: {
    backgroundColor: theme.COLORS.Orange4FE724C,
    width: '100%',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: '12%',
    justifyContent: 'center'
  },
  ContentFooter: {
    alignItems: 'center'
  },
  TitlesFooter: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  TitleCardFooter: {
    color: theme.COLORS.Whiteffffff,
    fontFamily: theme.FONTS.Raleway700,
    fontSize: 15
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
  },
  HeaderModal: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  VerifyBalance: {
    color: theme.COLORS.Orange4FE724C,
    fontFamily: theme.FONTS.Popp600,
    fontSize: 22
  },
  VerifyPursche: {
    color: theme.COLORS.Black000000,
    fontFamily: theme.FONTS.Popp600,
    fontSize: 22,
    textAlign: 'center'
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250
  },
  Align: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export { styles }