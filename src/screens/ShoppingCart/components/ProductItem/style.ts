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
  QuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MinusButton: {
    backgroundColor: theme.COLORS.Orange2FFA24B,
    height: 20,
    width: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MinusIcon: {
    color: theme.COLORS.White2F3F3F3,
    fontSize: 20,
    textAlign: 'right',
  },
  QuantityTextContainer: {
    backgroundColor: theme.COLORS.GrayRgba255249243041,
    height: 21,
    width: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  QuantityText: {
    fontSize: 12,
    color: theme.COLORS.Black393939,
    fontFamily: theme.FONTS.Popp600,
  },
  PlusButton: {
    backgroundColor: theme.COLORS.Orange2FFA24B,
    height: 20,
    width: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlusIcon: {
    color: theme.COLORS.White2F3F3F3,
    fontSize: 15,
    textAlign: 'right',
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