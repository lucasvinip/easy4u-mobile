import theme from '../../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
    Container: {
        width: 345,
        height: 132,
        backgroundColor: theme.COLORS.GrayEDF3F6,
        borderRadius: 15,
        marginBottom: 35
    },
    ContainerCard: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    CardItems: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '90%'
    },
    Description: {
        justifyContent: "space-evenly",
        height: '90%',
        width: '55%'
    },
    Name: {
        width: '90%',
        height: '10%',
        marginBottom: 12
    },
    About: {
        height: '22%',
        width: '100%',
        justifyContent: 'space-between'
    },
    Title: {
        width: '84%',
        height: '30%'
    },
    Title2: {
        width: '75%',
        height: '25%'
    },
    Title3: {
        width: '65%',
        height: '20%'
    },
    TitlePrice: {
        width: '18%',
        height: '7%',
        marginTop: 10
    },
    ContainerImg: {
        justifyContent: 'center'
    },
    Img: {
        width: 100,
        height: 100,
        borderRadius: 20
    }
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


// <View style={styles.Container}>
//             <View style={styles.ContainerCard}>
//                 <View style={styles.CardItems}>
//                     <View style={styles.Description}>
//                         <Skeleton style={{ width: 130, height: 7, marginBottom: 12 }} animation='wave' LinearGradientComponent={LinearGradient} />
//                         <View style={{ height: '22%', width: '100%' ,justifyContent: 'space-between' }}>
//                             <Skeleton style={{ width: '88%', height: '30%' }} animation='wave' LinearGradientComponent={LinearGradient} />
//                             <Skeleton style={{ width: '75%', height: '25%' }} animation='wave' LinearGradientComponent={LinearGradient} />
//                             <Skeleton style={{ width: '65%', height: '20%' }} animation='wave' LinearGradientComponent={LinearGradient} />
//                         </View>
//                         <Skeleton style={styles.TitlePrice} animation='wave' LinearGradientComponent={LinearGradient} />
//                     </View>
//                     <View style={styles.ContainerImg}>
//                         <Skeleton style={styles.Img} animation='wave' LinearGradientComponent={LinearGradient} />
//                     </View>
//                 </View>
//             </View>
//         </View>