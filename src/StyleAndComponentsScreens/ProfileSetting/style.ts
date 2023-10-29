import { StyleSheet } from 'react-native'
import theme from '../../styles/theme';


const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.COLORS.Whiteffffff,
  },
  Container: {
    marginLeft: 18,
    marginRight: 18,
    height: '100%',


  },
  ContainerHeader: {
    justifyContent: 'center',
    height: '35%',
  },
  HeaderCard: {
    width: 125,
    height: 120,
    borderRadius: 100,
    alignItems: 'center',
  },
  CardImg: {
    width: 118,
    height: 118,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black'
  },
  ContainerButton: {
    alignItems: 'center',
    height: '20%',
    justifyContent: 'flex-end'
  },

});

export { styles };
