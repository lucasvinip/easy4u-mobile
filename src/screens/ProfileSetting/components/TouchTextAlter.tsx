import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppTexts } from '../../../assets/strings';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../styles/theme';

interface TouchTextAlterProps{
    
}

const TouchTextAlter = () => {
    const styles = StyleSheet.create({
        Button: {
            alignSelf: 'flex-end',
            color: theme.COLORS.Orange2FFA24B,
            paddingTop: RFValue(6),
            fontFamily: theme.FONTS.Popp400,
            fontSize: RFValue(12)
        }
    });

    return (
        <TouchableOpacity>
            <Text style={styles.Button}>{AppTexts.Alter}</Text>
        </TouchableOpacity>
    )
};

export default TouchTextAlter;