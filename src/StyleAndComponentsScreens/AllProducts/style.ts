import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    SafeAreaView: {
        backgroundColor: theme.COLORS.Orange4FE724C,
        height: '100%',
        width: '100%'
    },
    ColorOrange: {
        backgroundColor: theme.COLORS.Orange4FE724C,
        height: '100%',
        width: '100%'
    },
    ContainerColorBeige: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        position: 'absolute'
    },
    ColorBeige: {
        backgroundColor: theme.COLORS.WhiteEDF3EDEB,
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 118,
        borderTopRightRadius: 118,
        borderEndWidth: 1,
        borderStartWidth: 1,
        borderColor: theme.COLORS.Beige65E5959,
        position: 'absolute'
    },
    Container: {
        height: '100%',
        marginTop: 10,
        marginLeft: 18,
        marginRight: 18,
    },
    ContainerHeader: {
        height: '28%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Header: {
        height: '60%',
        justifyContent: 'space-around'
    },
    ContainerInput: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    ContainerTypeProduct: {
        flexDirection: 'row',
        width: '98%',
        height: '20%',
        alignItems: 'center'
    },
    TypeProduct: {
        flexDirection: 'row',
        height: '100%'
    },
    ContainerMain: {
        alignItems: 'center',
        height: 'auto'
    },
    Main: {
        height: 'auto'
    }
});

export { styles };