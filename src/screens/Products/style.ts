import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  Container: {
    height: '100%'
  },
  Img: {
    width: '100%',
    height: '48%',
    borderRadius: 15
  },
  ContainerMain: {
    backgroundColor: theme.COLORS.Gray2Rgba255249243047,
    width: '100%',
    height: '100%',
    borderRadius: 38
  },
  Main: {
    paddingLeft: 18,
    paddingRight: 18,
    width: '100%',
    height: '100%'
  },
  ContainerIcon: {
    width: '92%',
    height: '6%',
    justifyContent: 'flex-end'
  }
});

export { styles };