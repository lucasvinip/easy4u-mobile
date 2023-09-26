import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import theme from '../../../../styles/theme';
import { styles } from './style'
import { Href, Link } from 'expo-router';

interface ButtonNavigationProps {
    icon: 'filetext1' | 'heart' | 'home' | 'setting',
    title: string,
    href: Href<string>
}
const ButtonNavigation = ({ icon, title, href}: ButtonNavigationProps) => {
    return (
        <Link href={href} asChild>
            <TouchableOpacity style={styles.Button}>
                <AntDesign name={icon} style={styles.Icon} />
                <Text style={styles.Title}>{title}</Text>
            </TouchableOpacity>
        </Link>
    );
};

export default ButtonNavigation;

// heart home setting containerOutlined fileTextOutlined