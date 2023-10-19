// import React, { useEffect, useState } from 'react';
// import {
//     View,
//     Image,
//     TouchableOpacity,
//     SafeAreaView,
//     Alert,
// } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { AntDesign } from '@expo/vector-icons';

// import { styles, shadowStyle } from '../StyleAndComponentsScreens/Product/style';
// import UseFonts from '../styles/useFonts';
// import { router, useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
// import CardMain from '../StyleAndComponentsScreens/Product/components/CardMain/CardMain';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { performApi } from '../utils/api';
// import theme from '../styles/theme';

// interface ProductProps {
//     route: any;
// }

// const Product = () => {
//     const [productsName, setProductsName] = useState<String | null>(null)
//     const [productsPrice, setProductsPrice] = useState<String | null>(null)
//     const [productsPhoto, setProductsPhoto] = useState<any>(null)
//     const [idProduct, setIdProduct] = useState<string | null>(null)

   

//     const url = async (path: string) => {
//         try {
//             const token = await AsyncStorage.getItem("token")
            
//             if (!token) {
//                 router.push('/');
//             } else {
//                 const data = await performApi.getData(path, token)
//                 return data;
//             }
//         } catch (error) {
//             console.error("Erro ao fazer a solicitação à API:", error);
//             return null;
//         }
//     }

//     const handleCardProducts = async () => {
//         console.log(idProduct)
//         try {
//             if (idProduct) {
//                 const apiDataProducts = await url(`products/${idProduct}`);
//                 console.log(apiDataProducts)
//                 if (!apiDataProducts) {
//                     Alert.alert("Erro!");
//                 } else {
                    
//                 }
//             }
//         } catch (error) {
//             console.error("Erro ao carregar dados do produto:", error);
//         }
//     }

//     const handleResetIdChangePage = async () => {
//         try {
//             await AsyncStorage.removeItem("productId")
//             setIdProduct("")
//             setProductsName("")
//             setProductsPrice("")
//             setProductsPhoto("")
//             router.back()
//         } catch (error) {
//             console.error("Erro ao redefinir productId e voltar para a página anterior:", error);
//         }
//     }

//     useEffect(() => {
//         const handleId = async () => {
//             try {
//                 const productId = await AsyncStorage.getItem("productId")
//                 const apiDataProducts = await url(`products/${productId}`);
//                 const productName = await apiDataProducts.name
//                 const productPhoto = await apiDataProducts.photo
//                 const productPrice = await apiDataProducts.price
//                 setProductsName(productName)
//                 setProductsPhoto(productPhoto)
//                 setProductsPrice(productPrice)
//                 console.log(apiDataProducts)
//             } catch (error) {
//                 console.error("Erro ao obter productId do AsyncStorage:", error);
//             }
//         }
//     handleId()
//     }, []);

//     return (
//         <UseFonts>
//             <StatusBar
//                 style='dark'
//                 backgroundColor='transparent'
//             />
//             <SafeAreaView>
//                 <View style={styles.Background}>
//                     <Image source={{ uri: String(productsPhoto) }} style={styles.Img} />
//                     <View style={{ height: '9%', width: '15%', justifyContent: 'flex-end', alignItems: 'center' }}>
//                         <TouchableOpacity style={{ width: '40%' }} onPress={handleResetIdChangePage}>
//                             <AntDesign name='arrowleft' style={{ fontSize: 22, color: theme.COLORS.Gray5E5959 }} />
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.Backgroung2}>
//                         <View style={styles.Screen}>
//                             <View style={styles.Container}>
//                                 <View style={styles.ContainerIcon}>
//                                     <TouchableOpacity style={styles.ContainerCircle}>
//                                         <View style={[styles.Circle, , shadowStyle]}>
//                                             <AntDesign name='heart' style={styles.Icon} />
//                                         </View>
//                                     </TouchableOpacity>
//                                 </View>
//                                 <View style={styles.ContainerMain}>
//                                     <CardMain name={productsName} price={productsPrice} />
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//             </SafeAreaView>
//         </UseFonts>
//     );
// };

// export default Product;


