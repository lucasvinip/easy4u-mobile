import theme from '../../../../styles/theme';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container: {
        height: '75%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    HeaderCard: {
        width: 125,
        height: 120,
        borderRadius: 100,
        alignItems: 'flex-end',
        backgroundColor:theme.COLORS.OrangeF6752C

    },
    CardImg: {
        width: 118,
        height: 118,
        borderRadius: 100,
        borderWidth: .5,
        borderColor: theme.COLORS.Gray868686,
    },
})

export { styles };