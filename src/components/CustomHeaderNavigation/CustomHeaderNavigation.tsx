import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style'
import { AntDesign } from '@expo/vector-icons';
import { AppTexts } from '../../assets/strings';
import { Link } from 'expo-router';

const CustomHeaderNavigation = () => {
    return (
        <View style={styles.ContainerHeader}>
            <View style={styles.Title}>
                <Text style={styles.TitleProduct}>
                    {AppTexts.Products}
                </Text>
            </View>
            <View style={styles.ContainerIcons}>
                <View style={styles.Icons}>
                    <TouchableOpacity >
                        <AntDesign name='menu-fold' style={styles.MenuIcon} />
                    </TouchableOpacity>
                    <View>
                        <Link href={'/ShoppingCart'} asChild>
                            <TouchableOpacity>
                                <AntDesign name='shoppingcart' style={styles.ShoppingCartIcon} />
                            </TouchableOpacity>
                        </Link>
                    </View>
                </View>
            </View >
        </View >
    );
};

export default CustomHeaderNavigation;
