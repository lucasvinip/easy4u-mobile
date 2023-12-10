import { Platform, StyleSheet } from "react-native";
import theme from "../../../styles/theme";

const styles = StyleSheet.create({
    Products: {
        backgroundColor: theme.COLORS.GrayEDF3F6,
        height: '82%',
        width: 190,
        borderRadius: 25,
        marginRight: 20,
    },
    AboutProducts: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    Img: {
        height: '100%',
        width: '40%',
    },
    NameAndDescription: {
        justifyContent: 'space-around',
        width: '60%',
        alignItems: 'center',
    },
    Name: {
        width: '60%',
    },
    Description: {
        width: '80%',
        height: 12,
        marginBottom: 5,
    },
    ContainerIcon: {
        width: '80%',
        alignItems: 'flex-end',
    },
    Icon: {
        width: '15%',
        height: 9
    },
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