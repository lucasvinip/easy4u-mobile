import { Skeleton } from '@rneui/themed';
import { Platform, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../../styles/theme';

import { shadowStyle, styles } from './styles'

const SkeletonProduct: React.FC = () => {
    return (
        <View style={[styles.Products, shadowStyle]}>
            <View style={styles.AboutProducts}>
                <Skeleton
                    style={[styles.Img, { borderRadius: 20 }]}
                    animation='wave'
                    LinearGradientComponent={LinearGradient}
                />
                <View style={styles.NameAndDescription}>
                    <Skeleton
                        style={styles.Name}
                        animation='wave'
                        LinearGradientComponent={LinearGradient}
                    />
                    <Skeleton
                        style={styles.Description}
                        animation='wave'
                        LinearGradientComponent={LinearGradient}
                    />
                    <Skeleton
                        style={{width: '55%', height: 10, marginTop: -15}}
                        animation='wave'
                        LinearGradientComponent={LinearGradient}
                    />
                    <View style={styles.ContainerIcon}>
                        <Skeleton
                            style={styles.Icon}
                            animation='wave'
                            LinearGradientComponent={LinearGradient}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SkeletonProduct;
