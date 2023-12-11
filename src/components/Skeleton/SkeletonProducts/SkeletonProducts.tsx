import { Skeleton } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles, shadowStyle } from './style'
import React from 'react';

const SkeletonProducts: React.FC = () => {
    return (
        <View style={[styles.Container, shadowStyle]}>
            <View style={styles.ContainerCard}>
                <View style={styles.CardItems}>
                    <View style={styles.Description}>
                        <Skeleton style={styles.Name} animation='wave' LinearGradientComponent={LinearGradient} />
                        <View style={styles.About}>
                            <Skeleton style={styles.Title} animation='wave' LinearGradientComponent={LinearGradient} />
                            <Skeleton style={styles.Title2} animation='wave' LinearGradientComponent={LinearGradient} />
                            <Skeleton style={styles.Title3} animation='wave' LinearGradientComponent={LinearGradient} />
                        </View>
                        <Skeleton style={styles.TitlePrice} animation='wave' LinearGradientComponent={LinearGradient} />
                    </View>
                    <View style={styles.ContainerImg}>
                        <Skeleton style={styles.Img} animation='wave' LinearGradientComponent={LinearGradient} />
                    </View>
                </View>
            </View>
        </View>
    )
}


export default SkeletonProducts