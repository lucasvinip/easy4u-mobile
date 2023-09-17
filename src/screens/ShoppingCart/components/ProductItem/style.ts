import { StyleSheet } from "react-native";
import theme from "../../../../styles/theme";

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginBottom: 10,
  },
  ProductInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '55%',
    justifyContent: 'space-around',
  },
  ProductImage: {
    width: 76,
    height: 76,
  },
  ProductTextContainer: {
    justifyContent: 'space-evenly',
  },
  ProductName: {
    width: 99,
    fontFamily: theme.FONTS.Popp500,
    fontSize: 12.5,
  },
  ProductPrice: {
    fontFamily: theme.FONTS.Popp600,
    fontSize: 14,
  },
  SeparatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  Separator: {
    borderBlockColor: theme.COLORS.Gray5CDCDCD,
    borderBottomWidth: 1,
    width: 200,
  },
});

export {styles}