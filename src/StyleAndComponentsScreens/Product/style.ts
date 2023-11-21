import { StyleSheet, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: theme.COLORS.Beige65E5959,
    height: '100%',
    width: '100%'
  },
  Background: {
    backgroundColor: theme.COLORS.White2F3F3F3,
    height: '100%',
    width: '100%'
  },
  Img: {
    width: '100%',
    height: '70%',
    borderRadius: 15,
    position: 'absolute'
  },
  Backgroung2: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  ContainerFavorite: {
    width: '90%',
    alignItems: 'flex-end',
    zIndex: 1
  },
  Screen: {
    backgroundColor: theme.COLORS.Gray4F5F3EF,
    width: '100%',
    height: '52%',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  },
  Container: {
    height: '100%',
    marginRight: 15,
    marginLeft: 15,
    justifyContent: 'center',
  },
  ContainerMain: {
    height: '99%',
  },
  Scroll: {
    height: '57%',
    width: '100%',
    justifyContent: 'center',
  }
});

const shadowStyle = {
  ...Platform.select({
    ios: {
      shadowColor: '#dcb4b4',
      shadowOffset: { width: 2, height: 5 },
      shadowOpacity: 1,
      shadowRadius: 3,
    },
    android: {
      elevation: 2,
    },
  }),
};

export { styles, shadowStyle };

