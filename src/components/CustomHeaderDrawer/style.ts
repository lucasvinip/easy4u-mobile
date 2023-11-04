import { StyleSheet } from 'react-native'
import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    ContainerHeader: {
        height: 120,
        justifyContent: 'space-around',
    },
    Header:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60%',
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
        fontSize: 28,
        color: theme.COLORS.WhiteEDF3EDEB,
        paddingTop: 5
    },
    ShoppingCartIcon:{
        fontSize: 26,
        color: theme.COLORS.WhiteEDF3EDEB,
    },
    Badge:{
        position: 'absolute',
        bottom: 25,
        left: 15, 
        backgroundColor: theme.COLORS.RedF15050,
        fontFamily: theme.FONTS.Popp600,
        fontSize: 12,
        paddingTop: 2,
        color: theme.COLORS.Whiteffffff,
    }
});

export { styles };