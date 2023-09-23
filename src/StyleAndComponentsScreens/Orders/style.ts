import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.COLORS.Whiteffffff
  },
  Container: {
    marginLeft: 18,
    marginRight: 18,
    justifyContent: 'center',
    alignItems:'center',
    height: '100%'
  }

});

export {styles};