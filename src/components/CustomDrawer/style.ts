import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Drawer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.COLORS.Gray2Rgba255249243047,
        alignItems: 'center'
    },
    Container: {
        height: '90%',
        width: '95%',
        backgroundColor: 'green'
    },
    Content: {
        alignItems: 'center',
        height: '100%'
    },
    ContainerHeader: {
        width: '95%',
        height: '30%',
        justifyContent: 'flex-end',
        backgroundColor: 'blue'

    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Image: {
        width: 60,
        height: 60,
        borderRadius: 5,
        justifyContent: 'center'
    },
    Texts: {
        justifyContent: 'space-between',
        height: '30%',
    },
    Name: {
        fontFamily: theme.FONTS.Raleway600,
        fontSize: RFValue(16)
    },
    Email: {
        fontFamily: theme.FONTS.Raleway600,
        fontSize: RFValue(14),
        color: theme.COLORS.Gray37C7C7A
    },
    Balance: {
        fontFamily: theme.FONTS.Raleway600,
        fontSize: RFValue(13),
        color: theme.COLORS.Gray37C7C7A
    },
    ContainerMain: {
        backgroundColor: 'pink',
        height: '50%',
        width: '95%',
        justifyContent: 'center'
    },
    Main:{
        backgroundColor: 'purple',
        height: '80%',
        justifyContent: 'space-evenly'
    }
});

export { styles };