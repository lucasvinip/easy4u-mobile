import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Skeleton } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { shadowStyle, styles } from '../../../StyleAndComponentsScreens/Orders/components/OrderCard/style';

const SkeletonOrdersDisable = () => {
    return (
        <View style={{ paddingBottom: 30, alignItems: 'center', justifyContent: 'center' }}>
            <View style={[styles.Card, shadowStyle]}>
                <View>
                    <View>
                        <Skeleton
                            style={{
                                width: '32%',
                                height: 8,
                                marginBottom: 10,
                                marginTop: 10,
                                marginLeft: 'auto',
                                marginRight: 6,
                            }}
                            animation='wave'
                            LinearGradientComponent={LinearGradient}
                        />
                    </View>
                    <View style={styles.ContainerItems}>
                        <View style={styles.Items}>
                            <Skeleton
                                style={{ width: 80, height: 80, borderRadius: 25 }}
                                animation='wave'
                                LinearGradientComponent={LinearGradient}
                            />
                            <View style={styles.Titles}>
                                <Skeleton
                                    style={{ width: 115, height: 16, marginBottom: 10, alignSelf: 'flex-start', marginLeft: -15 }}
                                    animation='wave'
                                    LinearGradientComponent={LinearGradient}
                                />
                                
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SkeletonOrdersDisable;
