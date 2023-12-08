import React from 'react';
import { View, Text, Image } from 'react-native';
import { Skeleton } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { shadowStyle, styles } from '../../../StyleAndComponentsScreens/Orders/components/OrderCard/style';

const SkeletonOrdersAble = () => {
    return (
        <View style={{ paddingBottom: 30, alignItems: 'center', justifyContent: 'center' }}>
            <View style={[styles.Card, shadowStyle]}>
                <View>
                    <View>
                        <Skeleton
                            style={{ width: '32%', height: 8, marginBottom: 10, marginTop: 10, marginLeft: 6}}
                            animation='wave'
                            LinearGradientComponent={LinearGradient}
                        />
                    </View>
                    <View style={styles.ContainerItems}>
                        <View style={styles.Items}>
                            <View style={styles.Titles}>
                                <Skeleton
                                    style={{ width: 115, height: 16, marginBottom: 10, alignSelf: 'flex-end', marginRight: -15 }}
                                    animation='wave'
                                    LinearGradientComponent={LinearGradient}
                                />
                                <Skeleton
                                    style={{ width: 140, height: 24, borderRadius: 30 }}
                                    animation='wave'
                                    LinearGradientComponent={LinearGradient}
                                />
                            </View>
                            <Skeleton
                                style={{ width: 80, height: 80, borderRadius: 25 }}
                                animation='wave'
                                LinearGradientComponent={LinearGradient}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SkeletonOrdersAble;
