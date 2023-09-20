import { Href, Link, LinkProps, Route } from 'expo-router';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { AppTexts } from '../../assets/strings';
import theme from '../../styles/theme';


interface HeaderNamePageProps {
    href: Route<string>,
    name: string,
    paddingBottom: number,
    width: number,
    textWidth?: number,
}

const HeaderNamePage = ({ href, name, width, paddingBottom, textWidth}: HeaderNamePageProps) => {
    const styles = StyleSheet.create({
        Container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: 18,
            marginRight: 18,
            width: width
        },
        Arrow: {
            fontSize: 24,
            paddingBottom: paddingBottom
        },
        Title: {
            fontSize: 16,
            fontFamily: theme.FONTS.Popp600,
            width: textWidth,
            textAlign: 'center'
        }
    });

    return (
        <View style={styles.Container}>
            <Link replace href={href} asChild>
                <TouchableOpacity activeOpacity={0.1}>
                    <AntDesign name='arrowleft' style={styles.Arrow} />
                </TouchableOpacity>
            </Link>
            <Text style={styles.Title}>
                {name.toLocaleUpperCase()}
            </Text>
        </View>
    );
};

export default HeaderNamePage;