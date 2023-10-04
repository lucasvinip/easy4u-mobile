import theme from '../../styles/theme';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.COLORS.Whiteffffff
  },
  Container: {
    backgroundColor: theme.COLORS.Whiteffffff,
    alignItems: 'center',
    height: '100%'
  }
  ,
  ContainerItens: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 42
  }
});

export { styles }
