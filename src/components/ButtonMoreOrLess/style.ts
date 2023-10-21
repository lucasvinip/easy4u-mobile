import { StyleSheet } from "react-native";
import theme from '../../styles/theme'

const styles = StyleSheet.create({
  QuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MinusButton: {
    backgroundColor: theme.COLORS.Orange2FFA24B,
    height: 26,
    width: 26,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MinusIcon: {
    color: theme.COLORS.White2F3F3F3,
    fontSize: 21,
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
    fontSize: 14,
    color: theme.COLORS.Black393939,
    fontFamily: theme.FONTS.Popp600,
  },
  PlusButton: {
    backgroundColor: theme.COLORS.Orange2FFA24B,
    height: 26,
    width: 26,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlusIcon: {
    color: theme.COLORS.White2F3F3F3,
    fontSize: 21,
    textAlign: 'right',
  },
});

export {styles}