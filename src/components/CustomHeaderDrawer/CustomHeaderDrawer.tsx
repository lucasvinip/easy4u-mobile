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
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSelector } from 'reselect';
import { AppTexts } from '../../assets/strings';
import { styles } from './style'
import { useRouter } from 'expo-router';

const CustomHeaderDrawer = () => {
    const navigation = useNavigation<NavigationProp<DrawerActionType>>();
    const router = useRouter();

    const selectCartItems = (state: any) => state.cart.items;
    const getCartInfo = createSelector(
        [selectCartItems], (items) => {
            const uniqueItems = Array.from(new Set(items.map((item: any) => item.id))).map((uniqueId) => {
                const quantity = items.filter((item: any) => item.id === uniqueId).length;
                const itemInfo = items.find((item: any) => item.id === uniqueId);
                return {
                    id: uniqueId,
                    name: itemInfo.name,
                    photo: itemInfo.photo,
                    price: itemInfo.price, 
                    quantity: quantity,
                };
            });

            AsyncStorage.setItem("items", JSON.stringify(uniqueItems))

            return {
                cartSize: items.length,
                uniqueItems: uniqueItems,
            };
        }
    );

    const cartInfo = useSelector(getCartInfo);

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
                                <Badge style={styles.Badge}>{cartInfo.cartSize}</Badge>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View >
            </View>
        </View>
    );
};

export default CustomHeaderDrawer;
