import { Skeleton } from '@rneui/themed';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {styles} from './style'

const SkeletonFavorites = () => {
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

{/* <View>
            <View style={{ backgroundColor: '#EDF3F6', width: 345, height: 135, justifyContent: 'center', borderRadius: 15, }}>
                <View style={{ width: 345, height: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
                    <View>
                        <Skeleton style={{ width: 80, height: 80, borderRadius: 15 }} animation='wave' LinearGradientComponent={LinearGradient} />
                    </View>
                    <View style={{ gap: 45 }}>
                        <Skeleton style={{ width: 130, height: 13 }} animation='wave' LinearGradientComponent={LinearGradient} />
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", width: 175 }}>
                            <Skeleton style={{ width: 20, height: 10 }} animation='wave' LinearGradientComponent={LinearGradient} />
                            <Skeleton style={{ width: 20, height: 10, borderRadius: 3 }} animation='wave' LinearGradientComponent={LinearGradient} />
                        </View>

                    </View>
                </View>
            </View>
        </View> */}