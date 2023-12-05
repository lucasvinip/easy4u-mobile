import { StyleSheet, Platform} from "react-native";
import theme from "../../../styles/theme";

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
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  ProductTextContainer: {
    justifyContent: 'space-evenly',
  },
  ProductName: {
    width: 99,
    height: 13
  },
  ProductName2:{
    width: 80,
    height: 10
  },
  ProductPrice: {
    width: '32%',
    height: 10,

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