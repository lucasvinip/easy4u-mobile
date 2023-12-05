import { Skeleton } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

const SkeletonOrders: React.FC = () => {
    return (
        <View style={{ backgroundColor: '#EDF3F6', width: 345, height: 140, justifyContent: 'center', borderRadius: 15 }}>
            <View style={{ width: 345, height: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
                <View style={{ gap: 25}}>
                    <Skeleton style={{ width: 130, height: 7, marginBottom: 12 }} animation='wave' LinearGradientComponent={LinearGradient} />
                    <Skeleton style={{ width: 145, height: 14, marginTop: 10 }} animation='wave' LinearGradientComponent={LinearGradient} circle/>
                </View>
                <View>
                    <Skeleton style={{ width: 80, height: 80 }} animation='wave' LinearGradientComponent={LinearGradient} />
                </View>
            </View>
        </View>
    )
}


export default SkeletonOrders;