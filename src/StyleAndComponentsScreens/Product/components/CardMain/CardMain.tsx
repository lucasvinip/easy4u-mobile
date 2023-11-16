import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import { styles } from './style';
import { AppTexts } from '../../../../assets/strings';
import ButtonAddCart from '../ButtonCart/ButtonAddCart';
import ProductsDisponibility from './components/ProductsDisponibility/ProductsDisponibility';

interface CardMainProps {
    name: string | undefined,
    price: any,
    description: string | undefined,
    id: number,
    photo: string | undefined,
}

const CardMain = ({
    name,
    price,
    description,
    id,
    photo,
}: CardMainProps) => {
    return (
        <View style={styles.Container}>
            <View style={styles.ContainerHeader}>
                <Text style={styles.TypeProductName}>
                    {name}
                </Text>
                <View style={styles.ContainerDescription}>
                    <Text style={styles.TitleDescription}>
                        {description} aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </Text>
                </View>
            </View>
            <View style={styles.ContainerMain}>
                <View style={styles.AvailableProducts}>
                    <Text style={styles.AvailableText}>
                        {AppTexts.Available}
                    </Text>
                    <ScrollView contentContainerStyle={styles.ContainerProducts} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <ProductsDisponibility />
                        <ProductsDisponibility />
                        <ProductsDisponibility />
                        <ProductsDisponibility />
                        <ProductsDisponibility />
                        <ProductsDisponibility />
                    </ScrollView>
                </View>
            </View>
            <View style={styles.ContainerButton}>
                <ButtonAddCart
                    price={price}
                    id={id}
                    name={name}
                    photo={photo}
                />
            </View>
        </View>
    );
};

export default CardMain;
