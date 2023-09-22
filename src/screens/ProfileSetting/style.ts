import { StyleSheet } from 'react-native'
import theme from '../../styles/theme';


const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.COLORS.Whiteffffff
  },
  Container: {
    marginLeft: 18,
    marginRight: 18,
    justifyContent: `center`
  },
  ContainerHeader: {
    justifyContent: 'center',
    height: '42%',
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
