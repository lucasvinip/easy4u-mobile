import { Skeleton } from '@rneui/themed';
import { View, Image, Text } from 'react-native';
import ButtonMoreOrLess from '../../ButtonMoreOrLess/ButtonMoreOrLess';

import { styles } from './styles';

const SkeletonShoppingCart: React.FC = () => {
    return (
        <View>
            <View style={styles.Container}>
                <View style={styles.ProductInfoContainer}>
                    <Skeleton
                        style={[styles.ProductImage, { borderRadius: 10 }]}
                        animation="wave"
                    />
                    <View style={styles.ProductTextContainer}>
                        <Skeleton
                            style={[styles.ProductName, { marginBottom: 8 }]}
                            animation="wave"
                        />
                        <Skeleton
                            style={[styles.ProductName2, { marginBottom: 8 }]}
                            animation="wave"
                        />
                        <Skeleton style={styles.ProductPrice} animation="wave" />
                    </View>
                </View>
                <View></View>
                <Skeleton
                    style={{ width: 72, height: 14, borderRadius: 5, marginTop: 25}}
                    animation="wave"
                />
            </View>
            <View style={styles.SeparatorContainer}>
                <View style={styles.Separator} />
            </View>
        </View>
    );
};

export default SkeletonShoppingCart;
