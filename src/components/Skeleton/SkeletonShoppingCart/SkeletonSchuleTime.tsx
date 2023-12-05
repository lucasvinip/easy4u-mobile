import React from 'react';
import { View } from 'react-native';
import { Skeleton } from '@rneui/themed';
import { styles } from '../../../StyleAndComponentsScreens/ShoppingCart/components/SchuleTime/style';

const SkeletonSchuleTime: React.FC = () => {
    return (
        <>
            <Skeleton style={{ width: '30%' }} animation="wave" />
            <View style={styles.buttonContainer}>
                <View>
                    <View style={[styles.button, styles.selectTimeButton]}>
                        <Skeleton style={{
                            height: 45,
                            borderRadius: 10,
                            width: 150,

                        }} animation="wave" />
                    </View>
                </View>
            </View>
        </>
    );
}

export default SkeletonSchuleTime;
