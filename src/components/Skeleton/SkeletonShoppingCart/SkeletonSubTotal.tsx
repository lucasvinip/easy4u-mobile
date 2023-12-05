import React from 'react';
import { View, Text } from 'react-native';
import { Skeleton } from '@rneui/themed';
import { styles } from '../../../StyleAndComponentsScreens/ShoppingCart/components/SubTotalDiscount/style';
import { AppTexts } from '../../../assets/strings';

const SkeletonSubTotal: React.FC = () => {
    return (
        <View style={{ width: '90%', height: '66%', justifyContent: 'space-around' }}>
            <View style={styles.TextRow}>
                <Text style={styles.labelText}>{AppTexts.Subtotal}</Text>
                <Skeleton style={{width: '18%', height: '38%'}} animation="wave" />
            </View>
            <View style={styles.TextRow}>
                <Text style={styles.labelText}>{AppTexts.Discount}</Text>
                <Skeleton style={{width: '18%', height: '38%'}} animation="wave" />
            </View>
            <View style={styles.TextRow}>
                <Text style={styles.labelText}>{AppTexts.Total}</Text>
                <Skeleton style={{width: '18%', height: '38%'}} animation="wave" />
            </View>
        </View>
    );
};

export default SkeletonSubTotal;
