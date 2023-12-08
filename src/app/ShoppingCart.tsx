import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import LottieView from 'lottie-react-native';

import { styles } from '../StyleAndComponentsScreens/ShoppingCart/style';
import ProductItem from '../StyleAndComponentsScreens/ShoppingCart/components/ProductItem/ProductItem'
import ScheduleTime from '../StyleAndComponentsScreens/ShoppingCart/components/SchuleTime/SchuleTime';
import SubTotalDiscount from '../StyleAndComponentsScreens/ShoppingCart/components/SubTotalDiscount/SubTotalDiscount';
import UseFonts from '../hooks/useFonts';
import { cartPreparationTime } from '../redux/features/shoppingCart/shoppingCartSlice';
import { FlatList } from 'react-native-gesture-handler';
import SkeletonShoppingCart from '../components/Skeleton/SkeletonShoppingCart/SkeletonShoppingCart';
import ModalPoup from '../components/ModalPoup/Modal';
import { AppTexts } from '../assets/strings';
import theme from '../styles/theme';
import { useRouter } from 'expo-router';

interface ProductProps {
    id: number,
    name: string,
    price: number,
    photo: string,
    preparationTime: number | null,
};

const ShoppingCart: React.FC = () => {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [scheduleTime, setScheduleTime] = useState<boolean>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [modalWhithout, setModalWhithout] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);

    const router = useRouter()

    const item = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch()

    const verifyScheduleTime = () => {
        item.some(product => product.preparationTime !== null ? setScheduleTime(true) : setScheduleTime(false));
    };

    const handleTimeSelection = (selectedTime: number) => {
        console.log("Colocando dentro do Estado Global", selectedTime);
        dispatch(cartPreparationTime(selectedTime));
        setTime(selectedTime);
    };

    const findProducts = () => {
        try {
            const product = item.map((product: ProductProps) => product)
            console.log(product);
            if (product.length === 0) {
                setModalWhithout(true)
                setTimeout(() => {
                    setModalWhithout(false)
                }, 2500)
                setTimeout(() => {
                    router.push('/(drawer)/AllProducts')
                }, 3000)
            } else {
                setProducts(product);
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        verifyScheduleTime();
        findProducts();
    }, [item]);

    return (
        <UseFonts>
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <View style={styles.Screen}>
                    <View style={styles.Container}>
                        <View style={{ height: 'auto' }}>
                            <View style={styles.ContainerHeader}>
                                <Text style={styles.HeaderText}>{item.length} items</Text>
                                <View style={styles.HeaderLine} />
                            </View>
                            <View style={styles.ContainerMain}>
                                {isLoading ? (
                                    <>
                                        <SkeletonShoppingCart />
                                        <SkeletonShoppingCart />
                                        <SkeletonShoppingCart />
                                        <ModalPoup visible={modalWhithout}>
                                            <View style={{ alignItems: 'center' }}>
                                                <LottieView
                                                    autoPlay
                                                    style={{ height: '80%', alignItems: 'center' }}
                                                    source={require('../assets/lottie/Animation1701803001076.json')}
                                                />
                                                <Text style={{ fontSize: 15, textAlign: 'center', fontFamily: theme.FONTS.Raleway700 }}>
                                                    {AppTexts.Oops_Cart_Empyt}
                                                </Text>
                                            </View>
                                        </ModalPoup>
                                    </>
                                ) : (
                                    <FlatList
                                        data={products}
                                        renderItem={({ item }) => (
                                            <ProductItem
                                                key={item.id}
                                                name={item.name}
                                                price={item.price}
                                                photo={item.photo}
                                                id={item.id}
                                            />
                                        )}
                                        showsVerticalScrollIndicator={false}
                                        style={[
                                            { maxHeight: '58%' },
                                            products.length === 0 && { height: 'auto' }
                                        ]}
                                    />
                                )}
                                {scheduleTime && (
                                    <View style={{ paddingBottom: 10 }}>
                                        <ScheduleTime onSelectTime={handleTimeSelection} />
                                    </View>
                                )}
                                <View style={{ paddingBottom: 10 }}>
                                    <SubTotalDiscount isLoading={isLoading} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView >
        </UseFonts>
    )
};

export default ShoppingCart;
