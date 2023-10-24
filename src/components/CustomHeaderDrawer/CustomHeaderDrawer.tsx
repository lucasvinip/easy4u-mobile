import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp, useNavigation, DrawerActionType } from '@react-navigation/native';
import { Badge } from 'react-native-paper';

import { AppTexts } from '../../assets/strings';
import { styles } from './style'
const CustomHeaderDrawer = () => {

    const navigation = useNavigation<NavigationProp<DrawerActionType>>();

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
                            <AntDesign name='menufold' style={styles.MenuIcon} />
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity>
                                <AntDesign name='shoppingcart' style={styles.ShoppingCartIcon} />
                            </TouchableOpacity>
                            <View style={{ position: 'absolute', backgroundColor: 'green', paddingBottom: 20}}>
                                <Badge >100</Badge>
                            </View>
                        </View>
                    </View>
                </View >
            </View>
        </View>
    );
};

export default CustomHeaderDrawer;
