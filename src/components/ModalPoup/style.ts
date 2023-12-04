import { StyleSheet } from 'react-native'
import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        height: '35%',
        borderRadius: 20,
        elevation: 20,
      }
});

export { styles };