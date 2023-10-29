import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';

import { styles } from './style'


interface ButtonNavigationProps {
    icon: any,
    title: string,
    href: Href<string>
}
const ButtonNavigation = ({ icon, title, href }: ButtonNavigationProps) => {
    return (
        <Link href={href} asChild>
            <TouchableOpacity style={styles.Button}>
                <MaterialCommunityIcons name={icon} size={19} style={styles.Icon} />
                <Text style={styles.Title}>{title}</Text>
            </TouchableOpacity>
        </Link>
    );
};

export default ButtonNavigation;

// heart home setting containerOutlined fileTextOutlined

// home-outline list-box cards-heart cog-outline