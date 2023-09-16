import { StyleSheet } from 'react-native'
import theme from '../../styles/theme';


const styles = StyleSheet.create({
  Container: {
    backgroundColor: theme.COLORS.Whiteffffff,
    marginLeft: 18,
    marginRight: 18,
    justifyContent: `center`
  },
  ContainerHeader: {
    justifyContent: 'center',
    height: '32%',
    alignItems: 'center',
  },
  HeaderCard: {
    width: 125,
    height: 120,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  CardImg: {
    width: 118,
    height: 118,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black'
  },
  ContainerButton: {
    paddingTop: 20,
    alignItems: 'center'
  }
});

export { styles };
