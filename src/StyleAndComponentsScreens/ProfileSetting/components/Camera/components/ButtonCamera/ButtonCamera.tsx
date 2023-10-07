import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './style';
import { ButtonProps } from 'react-native-paper';

interface CameraProps{
    onPress: () => void,
}

const ButtonCamera = ({onPress} : ButtonProps) => {
    
    return (
        <TouchableOpacity onPress={onPress}>
            <AntDesign name='camera' style={styles.Icon} />
        </TouchableOpacity>
    );
}

export default ButtonCamera;