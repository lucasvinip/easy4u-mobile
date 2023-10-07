import React from 'react';
import { View, Image, ImageSourcePropType} from 'react-native';


import {styles} from './styles'
import ButtonCamera from './components/ButtonCamera/ButtonCamera';

interface CameraProps{
    onPress: () => void,
    placeholderImageSource: ImageSourcePropType;
    selectedImage: string | null;
}

const Camera = ({onPress, placeholderImageSource, selectedImage}: CameraProps) => {
    const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;

    return (
        <View style={styles.Container}>
            <View style={styles.HeaderCard}>
                <Image  source={imageSource} style={styles.CardImg} />
                <ButtonCamera onPress={onPress} children={undefined}/>
            </View>
        </View>
    );
};

export default Camera;