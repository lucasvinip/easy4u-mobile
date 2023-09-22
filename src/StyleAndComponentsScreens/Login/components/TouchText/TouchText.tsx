import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../../styles/theme';
import { Href, Link, useRouter } from 'expo-router';
import { AppTexts } from '../../../../assets/strings';

interface TouchTextProps {
    titleColor: string,
    href: Href<string>,
    title: string
}

const TouchText = ({ title, titleColor, href}: TouchTextProps) => {
    const styles = StyleSheet.create({
        Title: {
            fontSize: RFValue(12),
            fontFamily: theme.FONTS.Popp300,
            color: titleColor
        },
    });

    return (
        <Link href={href} asChild>
            <TouchableOpacity>
                <Text style={styles.Title}>
                    {title}
                </Text>
            </TouchableOpacity>
        </Link>
    );
}

export default TouchText;
