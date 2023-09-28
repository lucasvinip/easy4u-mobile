import { StyleSheet } from 'react-native'
import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    ContainerHeader: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Title: {
        alignItems: 'center',
    },
    TitleProduct: {
        fontFamily: theme.FONTS.Popp500,
        color: theme.COLORS.WhiteEDF3EDEB,
        fontSize: RFValue(13.5),
        paddingTop: 3.5
    },
    ContainerIcons: {
        width: '90%',
        justifyContent: 'center'
    },
    Icons:{
        flexDirection: 'row',
        justifyContent: 'space-between',


    },  
    MenuIcon:{
        fontSize: 25,
        color: theme.COLORS.WhiteEDF3EDEB,
        paddingTop: 6
    },
    ShoppingCartIcon:{
        fontSize: 25,
        color: theme.COLORS.WhiteEDF3EDEB,
    }
});

export { styles };