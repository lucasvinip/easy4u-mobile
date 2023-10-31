import { Skeleton } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SkeletonProducts = () => {
    return (
        <View style={{ backgroundColor: '#EDF3F6', width: 345, height: 132, justifyContent: 'center', borderRadius: 15 }}>
            <View style={{ width: 300, height: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
                <View style={{ gap: 5, marginTop: 20 }}>
                    <Skeleton style={{ width: 130, height: 7, marginBottom: 12 }} animation='wave' LinearGradientComponent={LinearGradient} />
                    <View style={{ gap: 5 }}>
                        <Skeleton style={{ width: 170, height: 4 }} animation='wave' LinearGradientComponent={LinearGradient} />
                        <Skeleton style={{ width: 170, height: 4 }} animation='wave' LinearGradientComponent={LinearGradient} />
                        <Skeleton style={{ width: 170, height: 4 }} animation='wave' LinearGradientComponent={LinearGradient} />
                    </View>
                    <Skeleton style={{ width: 20, height: 10, marginTop: 10 }} animation='wave' LinearGradientComponent={LinearGradient} />
                </View>
                <View>
                    <Skeleton style={{ width: 80, height: 80 }} animation='wave' LinearGradientComponent={LinearGradient} />
                </View>
            </View>
        </View>
    )
}


export default SkeletonProducts