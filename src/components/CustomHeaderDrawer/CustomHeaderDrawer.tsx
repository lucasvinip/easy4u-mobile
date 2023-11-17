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
import { RootState } from '../../redux/store';
import { useRouter } from 'expo-router';

import { AppTexts } from '../../assets/strings';
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomHeaderDrawer = () => {
    const navigation = useNavigation<NavigationProp<DrawerActionType>>();
    const router = useRouter();
    const selectCartItems = (state: RootState) => state.cart.items;


    const getCartInfo = createSelector(
        [selectCartItems], (items) => {
            const uniqueItems = Array.from(new Set(items.map((item: any) => item.id))).map((uniqueId) => {
                const item = useSelector((state: RootState) => state.cart.items.find((item: any) => item.id === uniqueId))
                const productQty = item?.quantity || 0
                // const quantity = items.filter((item: any) => item.id === uniqueId).length;
                const itemInfo: any = items.find((item: any) => item.id === uniqueId);
                return {
                    id: uniqueId,
                    name: itemInfo.name,
                    photo: itemInfo.photo,
                    price: itemInfo.price,
                    // quantityCart: quantity,
                    quantityProduct: productQty
                };
            });

            AsyncStorage.setItem("items", JSON.stringify(uniqueItems))

            console.log(items)

            return {
                cartSize: items,
                uniqueItems: uniqueItems,
            };
        }
    );

    const cartInfo = useSelector(getCartInfo);

    return (
        <SafeAreaView style={styles.Container}>
            <View>
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
                                    <Badge style={styles.Badge}>{0}</Badge>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View >
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CustomHeaderDrawer;
