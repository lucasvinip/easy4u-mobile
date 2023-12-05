import { Skeleton } from '@rneui/themed';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {styles} from './style'
import React from 'react';

const SkeletonFavorites: React.FC = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.Card}>
                <View style={styles.ContainerItems}>
                    <View>
                        <Skeleton style={styles.Img} animation='wave' LinearGradientComponent={LinearGradient} />
                    </View>
                    <View style={styles.ContainerTexts}>
                        <Skeleton style={styles.Text} animation='wave' LinearGradientComponent={LinearGradient} />
                        <View style={styles.ContainerPriceAndDelete}>
                            <Skeleton style={styles.Price} animation='wave' LinearGradientComponent={LinearGradient} />
                            <Skeleton style={styles.Delete} animation='wave' LinearGradientComponent={LinearGradient} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
};


export default SkeletonFavorites;
