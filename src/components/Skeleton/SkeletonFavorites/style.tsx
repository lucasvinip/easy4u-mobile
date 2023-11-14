import theme from '../../../styles/theme';

import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
    Container: {
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Card: {
        height: 135,
        width: 360,
        backgroundColor: theme.COLORS.GrayEDF3F6,
        borderRadius: 15,
        justifyContent: 'center',
    },
    ContainerItems: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    Img: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        borderRadius: 10
    },
    ContainerTexts: {
        width: '50%',
        justifyContent: 'space-evenly',
    },
    Text: {
        width: '86%',
        height: '16%'
    },
    ContainerPriceAndDelete: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%',
        alignItems: 'center'
    },
    Price: {
        width: '20%',
        height: 10,
    },
    Delete: {
        width: '10%',
        height: 12,
        borderRadius: 3
    },
});

const shadowStyle = {
    ...Platform.select({
        ios: {
            shadowColor: '#ffff',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 2,
            shadowRadius: 1,
        },
        android: {
            elevation: .8,
        },
    }),
};

export { styles, shadowStyle };


{/* <View style={{ backgroundColor: '#EDF3F6', width: 345, height: 135, justifyContent: 'center', borderRadius: 15 }}>
<View style={{ width: 345, height: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
    <View>
        <Skeleton style={{ width: 80, height: 80, borderRadius: 15 }} animation='wave' LinearGradientComponent={LinearGradient} />
    </View>
    <View style={{ gap: 45 }}>
        <Skeleton style={{ width: 130, height: 13}} animation='wave' LinearGradientComponent={LinearGradient} />
        <View style={{flexDirection: 'row', justifyContent: "space-between", width: 175}}>
            <Skeleton style={{ width: 20, height: 10}} animation='wave' LinearGradientComponent={LinearGradient} />
            <Skeleton style={{ width: 20, height: 10, borderRadius: 3}} animation='wave' LinearGradientComponent={LinearGradient} />
        </View>

    </View>
</View>
</View> */}