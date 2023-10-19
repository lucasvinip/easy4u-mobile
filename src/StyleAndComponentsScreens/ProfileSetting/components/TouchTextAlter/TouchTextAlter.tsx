import React from 'react';
import {  Text, TouchableOpacity } from 'react-native';

import { AppTexts } from '../../../../assets/strings';
import { styles } from './style';

interface TouchTextAlterProps {

}

const TouchTextAlter = () => {

    return (
        <TouchableOpacity style={{ width: '15%' }}>
            <Text style={styles.Button}>{AppTexts.Alter}</Text>
        </TouchableOpacity>
    )
};

export default TouchTextAlter;