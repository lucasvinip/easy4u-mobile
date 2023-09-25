import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import theme from '../../../../styles/theme';
import { AppTexts } from '../../../../assets/strings';

interface ButtonNavigationProps{
    title: string
}
const ButtonNavigation = ({ title} : ButtonNavigationProps) => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '35%' }}>
            <AntDesign name='caretright' style={{ fontSize: 18, color: theme.COLORS.Gray37C7C7A, }} />
            <Text style={{ color: theme.COLORS.Gray37C7C7A, fontSize: 14, fontFamily: theme.FONTS.Popp500, paddingTop: 5 }}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ButtonNavigation;

// heart home setting