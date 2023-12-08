import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './style';

interface ButtonCameraProps {
    postPhoto: () => void,
    deletePhoto: () => void,
    buttuTypeIcon: any
}

const ButtonCamera: React.FC<ButtonCameraProps> = ({
    postPhoto,
    buttuTypeIcon,
    deletePhoto
}) => {

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