import React, { useEffect, useState } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FlatList } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';


import Button from '../components/Button/Button';
import theme from '../styles/theme';
import NameAndTotal from '../StyleAndComponentsScreens/Checkout/components/NameAndTotal/NameAndTotal';
import PaymentMethod from '../StyleAndComponentsScreens/Checkout/components/PaymentMethod/PaymentMethodCredit';
import ModalPoup from '../components/ModalPoup/Modal';
import Loading from '../components/Loading/Loading';
import SucessOrder from '../StyleAndComponentsScreens/Checkout/components/SucessOrder';
import FooterCheckout from '../StyleAndComponentsScreens/Checkout/components/Footer';
import Header from '../StyleAndComponentsScreens/Checkout/components/Header';
import ErrorOrder from '../StyleAndComponentsScreens/Checkout/components/ErrorOrder';
import { pixData } from '../utils/data';
import CPBoard from '../components/CPBoard/CPBoard';
import Toast from '../components/Toast/Toast';
import { AppTexts } from '../assets/strings';
import { styles } from '../StyleAndComponentsScreens/Checkout/style';
import { performApi } from '../utils/api';
import { formatNumberToTypeBr } from '../utils/formatNumber';

interface CheckoutProps {
  id: number;
  name: string;
  photo: string;
  price: number;
  quantity: number;
}

interface ResponsePaymentPix {
  copy: string;
  qrcode: string;
}

const Checkout = () => {
  const [products, setProducts] = useState<CheckoutProps[]>([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [pix, setPix] = useState<boolean>(false);
  const [qrCode, setQrCode] = useState<string>('');
  const [copy, setCopy] = useState<string>('');
  const [toast, setToast] = useState<boolean>(false);
  const [buttonOrder, setButtonOrder] = useState<boolean>(false);
  const [buttonBack, setButtonBack] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState(false);


  const total = useSelector((state: RootState) => state.cart.total);
  const items = useSelector((state: RootState) => state.cart.items);
  const balance = useSelector((state: RootState) => state.user.userBalance)
  const formatBalance = formatNumberToTypeBr(balance)


  const preparationTime = useSelector((state: RootState) => state.cart.preparationTime);
  const verifyTime = preparationTime ? preparationTime : null;

  const fetchData = async () => {
    const itemsProducts = await items;
    const productInfo = itemsProducts.map((item: CheckoutProps) => item);
    setProducts(productInfo);
  };

  const getSelectedPaymentMethod = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const items = products.map((product) => [product.id, product.quantity]);

      if (selectedPaymentMethod === 'Créditos') {
        setVisible(true);
        setLoading(true);

        const orderResponse = await performApi.sendDataToken('carts-by-user', 'POST', token, {
          products: items,
          preparationTime: verifyTime
        });

        setTimeout(() => {
          setLoading(false);
        }, 5000);

        if (orderResponse.statusCode === 201) {
          setMessage('Compra realizada com sucesso! Verifique seus pedidos')
          setButtonOrder(true);
        } else {
          setButtonBack(true);
          setMessage('Saldo Insuficiente! Vá à cantina para recarregar seu saldo');
        }
      } else if (selectedPaymentMethod === 'Pix') {
        const pix: ResponsePaymentPix = await performApi.sendData('payment/pix', 'POST', pixData);
        setPix(true);
        setVisible(true);
        setCopy(pix.copy);
        setQrCode(pix.qrcode);
      } else {
        setToast(true);
        setTimeout(() => {
          setToast(false)
        }, 1000)
      }
    } catch (error) {
      setMessage('Houve um erro ao finalizar seu pedido! Tente novamente');
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.Screen}>
        <View style={styles.Container}>
          {toast && <Toast
            visible={toast}
            src={require('../assets/lottie/Animation1701813693711.json')}
            text={AppTexts.Oops_Choose_Payment}
            width={18}
            height={20}
          />}
          <Header />
          <View style={styles.ContainerMain}>
            <Text style={styles.TitleMain}>{AppTexts.Easy_you}</Text>
            <View style={{ alignItems: 'center' }}>
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
                    <View style={styles.ContainerCardMain}>
                      <FlatList
                        data={products}
                        renderItem={({ item }) => {
                          return <NameAndTotal
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            id={item.id}
                          />;
                        }}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.CardMain}
                      />
                    </View>
                  </View>
                </View>
                <FooterCheckout total={total} />
              </View>
            </View>
          </View>
          <View style={styles.ContainerFooter}>
            <View style={styles.ContainerPayment}>
              <Text style={styles.TitlePayment}>{AppTexts.Choose_Payment_Method}</Text>
              <View style={styles.Payment}>
                <PaymentMethod
                  method="Créditos"
                  selectedMethod={selectedPaymentMethod}
                  onSelect={() => setSelectedPaymentMethod('Créditos')}
                />
                <PaymentMethod
                  method="Pix"
                  selectedMethod={selectedPaymentMethod}
                  onSelect={() => setSelectedPaymentMethod('Pix')}
                />
              </View>
            </View>
            <Button
              text={'PAGAR'}
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
                <View>
                  {buttonBack && (
                    <View style={styles.HeaderModal}>
                      <TouchableOpacity onPress={() => setVisible(false)}>
                        <Image
                          source={require('../assets/img/x.png')}
                          style={{ height: 30, width: 30 }}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                  <View style={styles.modalContainer}>
                    {buttonClicked ? (
                      loading ? (
                        <Loading />
                      ) : (
                        <View style={styles.Align}>
                          {pix && <CPBoard copy={copy} qrcode={qrCode} visible={() => setVisible(false)} />}
                          {message && <Text style={styles.VerifyPursche}>{message}</Text>}
                          {buttonOrder && <SucessOrder onVisible={() => setVisible(false)} />}
                          {buttonBack && <ErrorOrder onVisible={() => setVisible(false)} />}
                        </View>
                      )
                    ) : (
                      <View style={styles.ContainerModal}>
                        <View style={styles.bGetOut}>
                          <TouchableOpacity onPress={() => setVisible(false)}>
                            <FontAwesome name='times-circle' size={30} color={theme.COLORS.OrangeF6752C} />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.Modal}>
                          <Text style={{ fontFamily: theme.FONTS.Raleway700, fontSize: 16 }}>
                            Seu saldo é: {formatBalance}
                          </Text>
                          <Text style={{ fontFamily: theme.FONTS.Raleway700, fontSize: 18, width: '40%', textAlign: 'center' }}>
                            {AppTexts.Confirm_Buy}
                          </Text>
                        </View>
                        <View style={styles.bConfirm}>
                          <Button
                            text={'Cofirmar'}
                            fontFamily={theme.FONTS.Popp700}
                            background={theme.COLORS.OrangeFF6C44}
                            width={100}
                            height={40}
                            borderRadius={48}
                            fontSize={14}
                            onPress={() => setButtonClicked(true)}
                          />
                        </View>
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
