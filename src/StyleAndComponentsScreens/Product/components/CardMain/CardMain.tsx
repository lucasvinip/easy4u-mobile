import {View, Text,} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { styles } from './style';
import { AppTexts } from '../../../../assets/strings';
import ButtonAddCart from '../ButtonCart/ButtonAddCart';
import theme from '../../../../styles/theme';
import React from 'react';

interface CardMainProps {
    name: string | undefined,
    price: any,
    description: string | undefined,
    id: number,
    photo: string | undefined,
    preparationTime: number | undefined,
    children: React.ReactNode,
    setToast: () => void
}

const CardMain: React.FC<CardMainProps> = ({
    name,
    price,
    description,
    id,
    photo,
    preparationTime,
    children,
    setToast
}) => {
    
    return (
        <View style={styles.Container}>
            <View style={styles.ContainerHeader}>
                {preparationTime === null ? (
                    <Text style={styles.TypeProductName}>
                        {name}
                    </Text>
                ) :
                    <View style={{ height: 'auto' }}>
                        <Text style={styles.TypeProductName}>
                            {name}
                        </Text>
                        <View style={{ alignItems: 'flex-end' }}>
                            <View style={styles.ContainerTime}>
                                <MaterialCommunityIcons
                                    name={"clock-time-twelve-outline"}
                                    style={styles.Icon}
                                    size={15}
                                    color={theme.COLORS.Gray37C7C7A} />
                                <Text style={styles.TitleTime}>
                                    {preparationTime} min
                                </Text>
                            </View>
                        </View>
                    </View>
                }
                <View style={styles.ContainerDescription}>
                    <Text style={styles.TitleDescription}>
                        {description} bfehjw fwebijkfniewkjfwfeiunjklwhenffweinlkporiwefnjfoweim
                    </Text>
                </View>
            </View>
            <View style={styles.ContainerMain}>
                <View style={styles.AvailableProducts}>
                    <Text style={styles.AvailableText}>
                        {AppTexts.Available}
                    </Text>
                    {children}
                </View>
            </View>
            <View style={styles.ContainerButton}>
                <ButtonAddCart
                    price={price}
                    id={id}
                    name={name}
                    photo={photo}
                    preparationTime={preparationTime}
                    setToast={setToast}
                />
            </View>
        </View>
    );
};

export default CardMain;
