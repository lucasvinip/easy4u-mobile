import { StyleSheet } from 'react-native'
import theme from '../../styles/theme';


const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.COLORS.Whiteffffff,
    marginTop: 20
  },
  Container: {
    marginLeft: 18,
    marginRight: 18,
    height: '100%',
    backgroundColor: theme.COLORS.Whiteffffff,

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
    backgroundColor: theme.COLORS.GrayRgba255249243041
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
