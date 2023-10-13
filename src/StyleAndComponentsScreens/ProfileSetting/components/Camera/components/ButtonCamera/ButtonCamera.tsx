import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './style';
import { ButtonProps } from 'react-native-paper';

interface ButtonCameraProps {
    postPhoto: () => void,
    deletePhoto: () => void,
    buttuTypeIcon: any
}

const ButtonCamera = ({ postPhoto, buttuTypeIcon, deletePhoto}: ButtonCameraProps) => {

    return (
        buttuTypeIcon ? (
            <TouchableOpacity onPress={deletePhoto}>
                <AntDesign name='delete' style={styles.Icon} />
            </TouchableOpacity>
        ) :
        (
            <TouchableOpacity onPress={postPhoto}>
                <AntDesign name='camera' style={styles.Icon} />
            </TouchableOpacity>
        )
        
    );
}

export default ButtonCamera;