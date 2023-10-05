import React from 'react';
import { View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import theme from '../../../../styles/theme';
import { AppTexts } from '../../../../assets/strings';
import { styles } from './style';

const CustomTextInput = () => {
    return (
        <View style={styles.Container}>
            <TextInput
                
                style={styles.Input}
                placeholder={AppTexts.Search}
            />
            <AntDesign name='search1' style={styles.Icon} />
        </View>
    );
};

export default CustomTextInput;