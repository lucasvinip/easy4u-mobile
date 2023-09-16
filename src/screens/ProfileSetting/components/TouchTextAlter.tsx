import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppTexts } from '../../../assets/strings';
import theme from '../../../styles/theme';

interface TouchTextAlterProps {

}

const TouchTextAlter = () => {
    const styles = StyleSheet.create({
        Button: {
            color: theme.COLORS.Orange2FFA24B,
            paddingTop: 12,
            fontFamily: theme.FONTS.Popp400,
            fontSize: 13,

        }
    });

    return (
        <TouchableOpacity style={{ width: '15%' }}>
            <Text style={styles.Button}>{AppTexts.Alter}</Text>
        </TouchableOpacity>
    )
};

export default TouchTextAlter;