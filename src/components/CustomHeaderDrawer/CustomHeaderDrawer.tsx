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
import { RootState } from '../../redux/store';
import { useRouter } from 'expo-router';

import { AppTexts } from '../../assets/strings';
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import UseFonts from '../../hooks/useFonts';

const CustomHeaderDrawer: React.FC = () => {
    const navigation = useNavigation<NavigationProp<DrawerActionType>>();
    const router = useRouter();
    const quantityItems = useSelector((state: RootState) => state.cart.items.length)

    return (
        <UseFonts>
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
                                        <Badge style={styles.Badge}>{quantityItems}</Badge>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View >
                    </View>
                </View>
            </SafeAreaView>
        </UseFonts>

    );
};

export default CustomHeaderDrawer;
