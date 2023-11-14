import { StyleSheet, Platform } from 'react-native';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
    ContainerHeart: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Heart: {
        borderRadius: 100,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Icon: {
        color: theme.COLORS.Gray4F5F3EF,
        fontSize: 40,
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

