import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AppTexts } from '../../../../assets/strings';
import { styles } from './style';
import theme from '../../../../styles/theme';

interface CustomTextInputProps {
    onPress?: () => void
    onChange?: (value: string) => void,
    onFocus?: () => void,
    data: string,


}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    onPress,
    onChange,
    onFocus,
    data,
}) => {
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
                <View style={styles.Cirle}>
                    <MaterialCommunityIcons name='magnify' style={styles.Icon} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CustomTextInput;