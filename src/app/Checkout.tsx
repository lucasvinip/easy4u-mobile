import React, { useEffect, useState } from 'react';
import {
    Image,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppTexts } from '../assets/strings';


import { styles } from '../StyleAndComponentsScreens/Checkout/style'
import Button from '../components/Button/Button';
import theme from '../styles/theme';
import NameAndTotal from '../StyleAndComponentsScreens/Checkout/components/NameAndTotal/NameAndTotal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import PaymentMethod from '../StyleAndComponentsScreens/Checkout/components/PaymentMethod/PaymentMethodCredit';
import { performApi } from '../utils/api';
import ModalPoup from '../components/ModalPoup/Modal';
import { useRouter } from 'expo-router';

interface CheckoutProps {
    id: number;
    name: string;
    photo: string;
    price: number;
    quantity: number

}

const Checkout = () => {
    const [products, setProducts] = useState<CheckoutProps[]>([])
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
    const [visible, setVisible] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [order, setOrder] = useState<number[][]>([])
    const [message, setMessage] = useState<string>("")
    const [buttonOrder, setButtonOrder] = useState<boolean>(false)
    const router = useRouter()

    const total = useSelector((state: RootState) => state.cart.total)
    const items = useSelector((state: RootState) => state.cart.items)


    const formattedTotal = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(total);

    const fetchData = async () => {
        const itemsProducts = await items
        const productInfo = itemsProducts.map((item: CheckoutProps) => item)
        setProducts(productInfo)
    }

    const getSelectedPaymentMethod = async () => {
        try {
            setVisible(true);
            setLoading(true);
    
            const token = await AsyncStorage.getItem("token");
            const items = products.map((product) => [product.id, product.quantity]);

            if (selectedPaymentMethod === 'Créditos') {
                const orderResponse = await performApi.sendDataToken("carts-by-user", "POST", token, {products: items});
    
                setTimeout(() => {
                    setLoading(false)
                }, 5000)
    
                if (orderResponse.statusCode === 201) {
                    setMessage("Compra realizada com sucesso! Verifique seus pedidos");
                    setButtonOrder(true);
                } else {
                    setMessage("Saldo Insuficiente! Vá à cantina para recarregar seu saldo");
                }
            } else {
                console.log("oi");
            }
        } catch (error) {
            setMessage("Houve um erro ao finalizar seu pedido! Tente novamente");
        } finally {
            setLoading(false);
        }
    };
    



    useEffect(() => {
        fetchData();
    }, [])

    return (
        <SafeAreaView>
            <View style={styles.Screen}>
                <View style={styles.Container}>
                    <View style={styles.ContainerHeader}>
                        <Image
                            source={require('../assets/img/easy.png')}
                            style={{ width: 191, height: 65 }}
                        />
                    </View>
                    <View style={styles.ContainerMain}>
                        <Text style={styles.TitleMain}>{AppTexts.Easy_you}</Text>
                        <View style={{ alignItems: "center" }}>
                            <View style={styles.ContainerCard}>
                                <View style={styles.Card}>
                                    <View style={styles.CardContent}>
                                        <View style={styles.ContainerContent}>
                                            <View style={styles.Content}>
                                                <Text style={styles.TitleName}>{AppTexts.Name_Product}</Text>
                                                <View style={styles.ContainerSeparator}>
                                                    <View style={styles.LineSeparator} />
                                                </View>
                                                <Text style={styles.TitleTotal}>{AppTexts.Total}</Text>
                                            </View>
                                        </View>
                                        <ScrollView contentContainerStyle={styles.ContainerCardMain} showsVerticalScrollIndicator={false}>
                                            <View style={styles.CardMain}>
                                                {products.map((item: CheckoutProps, index: number) => (
                                                    <NameAndTotal
                                                        key={index}
                                                        price={item.price}
                                                        name={item.name}
                                                        id={item.id}
                                                    />
                                                ))}
                                            </View>
                                        </ScrollView>
                                    </View>
                                </View>
                                <View style={styles.CardFooter}>
                                    <View style={styles.ContentFooter}>
                                        <View style={styles.TitlesFooter}>
                                            <Text style={styles.TitleCardFooter}>
                                                {AppTexts.Total}
                                            </Text>
                                            <Text style={styles.TitleCardFooter}>
                                                {formattedTotal}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ContainerFooter}>
                        <View style={styles.ContainerPayment}>
                            <Text style={styles.TitlePayment}>
                                {AppTexts.Choose_Payment_Method}
                            </Text>
                            <View style={styles.Payment}>
                                <PaymentMethod method="Créditos" onSelect={() => setSelectedPaymentMethod("Créditos")} />
                                <PaymentMethod method="Pix" onSelect={() => setSelectedPaymentMethod("Pix")} />
                            </View>
                        </View>
                        <Button
                            text={"PAGAR"}
                            fontFamily={theme.FONTS.Popp700}
                            background={theme.COLORS.OrangeFF6C44}
                            width={260}
                            height={40}
                            borderRadius={48}
                            fontSize={14}
                            onPress={() => getSelectedPaymentMethod()}
                        />
                        {visible && (
                            <ModalPoup visible={visible}>
                                <View >
                                    <View style={styles.HeaderModal}>
                                        <TouchableOpacity onPress={() => setVisible(false)}>
                                            <Image
                                                source={require("../assets/img/x.png")}
                                                style={{ height: 30, width: 30 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.modalContainer}>
                                        {loading ? (
                                            <View style={styles.Align}>
                                                <Text style={styles.VerifyBalance}>{AppTexts.Verify_Balance}</Text>
                                                <View style={styles.Align}>
                                                    <ActivityIndicator size={75 || "large"} color={theme.COLORS.OrangeFF6C44} />
                                                </View>
                                            </View>
                                        ) : (
                                            <View style={styles.Align}>
                                                <Text style={styles.VerifyPursche}>{message}</Text>
                                                {buttonOrder && (
                                                    <View style={{marginTop: 50}}>
                                                        <Button
                                                            background={theme.COLORS.Orange4FE724C}
                                                            borderRadius={10}
                                                            fontFamily={theme.FONTS.Popp500}
                                                            height={35}
                                                            width={200}
                                                            fontSize={16}
                                                            text='Verificar Pedido'
                                                            color={theme.COLORS.Whiteffffff}
                                                            onPress={() => {router.push('/Orders'); setVisible(false)}}
                                                        />
                                                    </View>
                                                )}
                                            </View>

                                        )}
                                    </View>
                                </View>
                            </ModalPoup>
                        )}

                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};



export default Checkout;


