import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import theme from '../../../../styles/theme';
import { AppTexts } from '../../../../assets/strings';
import { styles } from './style';

interface CustomTextInputProps {
    onPress?: () => void
    onChange?: (value: string) => void,
    onFocus?: () => void,
    data: string,


}

const CustomTextInput = ({
    onPress,
    onChange,
    onFocus,
    data,
}: CustomTextInputProps) => {
    const [inputValue, setInputValue] = useState<string>(data)

    const handleInputChange = (text: string) => {
        setInputValue(text);

        if (onChange) {
            onChange(text);
        }
    }

    const handleInputFocus = () => {
        if (onFocus) {
            onFocus();
        }
    }

    return (
        <View style={styles.Container}>
            <TextInput
                style={styles.Input}
                placeholder={AppTexts.Search}
                value={inputValue}
                onChangeText={handleInputChange}
                onFocus={handleInputFocus}
            />
            <TouchableOpacity style={styles.ButtonSearch} onPress={onPress}>
                <AntDesign name='search1' style={styles.Icon}/>
            </TouchableOpacity>
        </View>
    );
};

export default CustomTextInput;