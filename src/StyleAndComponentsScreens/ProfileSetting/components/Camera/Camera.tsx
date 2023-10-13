import React, { useState } from 'react';
import { View, Image, ImageSourcePropType} from 'react-native';


import {styles} from './styles'
import ButtonCamera from './components/ButtonCamera/ButtonCamera';

interface CameraProps{
    postPhoto: () => void,
    deletePhoto: () => void,
    placeholderImageSource: any,
    selectedImage: string | null,
    buttuTypeIcon: any,
}

const Camera = ({placeholderImageSource, selectedImage, buttuTypeIcon, deletePhoto, postPhoto}: CameraProps) => {
    const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;
    return (
        <View style={styles.Container}>
            <View style={styles.HeaderCard}>
                <Image  source={imageSource} style={styles.CardImg} />
                <ButtonCamera postPhoto={postPhoto} buttuTypeIcon={buttuTypeIcon} deletePhoto={deletePhoto}/>
            </View>
        </View>
    );
};

export default Camera;