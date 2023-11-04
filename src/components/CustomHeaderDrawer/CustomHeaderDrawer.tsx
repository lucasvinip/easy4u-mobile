import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {
    NavigationProp,
    useNavigation, DrawerActionType
} from '@react-navigation/native';
import { Badge } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { useRouter } from 'expo-router';

import { AppTexts } from '../../assets/strings';
import { styles } from './style'



const CustomHeaderDrawer = () => {
    const navigation = useNavigation<NavigationProp<DrawerActionType>>();
    const amount: any = useSelector((state: any) => state.cart.items.length)

    const router = useRouter()
    return (
        <View style={styles.ContainerHeader}>
            <View style={styles.Header}>
                <View style={styles.Title}>
                    <Text style={styles.TitleProduct}>
                        {AppTexts.Products}
                    </Text>
                </View>

                <View style={styles.ContainerIcons}>
                    <View style={styles.Icons}>
                        <TouchableOpacity onPressOut={() => navigation.dispatch({ type: 'OPEN_DRAWER' })}>
                            <MaterialCommunityIcons name='menu' style={styles.MenuIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/ShoppingCart')}>
                            <View>
                                <MaterialCommunityIcons name='cart-variant' style={styles.ShoppingCartIcon} />
                                <Badge style={styles.Badge}>{amount}</Badge>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View >
            </View>
        </View>
    );
};

export default CustomHeaderDrawer;