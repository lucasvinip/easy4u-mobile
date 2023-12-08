import React, {
  useEffect,
  useMemo,
  useState
} from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { RefreshControl } from "react-native-gesture-handler";
import LottieView from 'lottie-react-native';
import { FontAwesome } from '@expo/vector-icons';

import { performApi } from "../utils/api";
import FavoriteCard from "../StyleAndComponentsScreens/FavoriteItens/components/FavoriteCard.tsx/FavoriteCard";
import ModalPoup from "../components/ModalPoup/Modal";
import { AppTexts } from "../assets/strings";
import Button from "../components/Button/Button";
import theme from "../styles/theme";
import UseFonts from "../hooks/useFonts";
import { styles } from "../StyleAndComponentsScreens/FavoriteItens/style";
import { useToken } from "../hooks/useToken";
import SkeletonFavorites from "../components/Skeleton/SkeletonFavorites/SkeletonFavorites";

interface ProductsProps {
  product: FavoritesProps;
}

interface FavoritesProps {
  id: number,
  name: string,
  price: number,
  photo: string,
}

const FavoriteItems: React.FC = () => {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<any>([]);
  const token = useToken();
  const [visible, setVisible] = useState<boolean>(false);
  const [isSkeleton, setSkeleton] = useState<boolean>(true);
  const [id, setId] = useState<number>();
  const [modalWhithout, setModalWhithout] = useState<boolean>(false);


  const memoFavoriteItems = useMemo(() => {
    const sortedFavorites = favorites.slice().sort((a: ProductsProps, b: ProductsProps) => a.product.id - b.product.id);

    return sortedFavorites.map(({ product }: ProductsProps, index: number) => {
      return (
        <FavoriteCard
          key={index}
          name={product.name}
          price={product.price}
          photo={product.photo}
          onDeleteFavorite={() => {
            setVisible(true), setId(product.id);
          }}
          onSelectItem={() => handleSelectItem(product.id)}
        />
      )
    })
  }, [favorites])

  const fetchData = async () => {
    const storedToken = await AsyncStorage.getItem("token");

    if (!storedToken) {
      router.push("/");
    } else {
      try {
        const getFavorites = await performApi.getData("favorites", storedToken);
        setSkeleton(false)
        setFavorites(getFavorites);
      } catch (error) {
        console.error("Erro ao buscar favoritos:", error);
      }
    }
  };

  const deleteFavoriteItem = async (productId: number | undefined) => {
    try {
      await performApi.deleteData(`favorites/${productId}`, token);
      const updatedFavorites = favorites.filter(
        (item: ProductsProps) => item.product.id !== productId
      );
      setFavorites(updatedFavorites);
    } catch (erro) {
      console.log(erro);
    }
  };

  const handleSelectItem = (productId: number) => {
    router.push({
      pathname: '/product/[id]',
      params: { id: productId, }
    })
  };

  const pullMeDown = async () => {
    setRefresh(true);

    try {
      await fetchData();
      setRefresh(false);
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
      setRefresh(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  return (
    <UseFonts>
      <StatusBar
        style="dark"
        translucent
        backgroundColor={theme.COLORS.GrayRgba255249243041}
      />
      <SafeAreaView style={{ backgroundColor: theme.COLORS.Whiteffffff }}>
        <View style={styles.Screen}>
          <ModalPoup visible={visible}>
            <View style={{ alignItems: "center", justifyContent: 'center' }}>
              <View style={styles.bGetOut}>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <FontAwesome name='times-circle' size={30} color={theme.COLORS.OrangeF6752C} />
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center" }}>
                <LottieView
                  autoPlay
                  style={{ height: '58%', alignItems: 'center', justifyContent: 'center' }}
                  source={require('../assets/lottie/Animation1701906420429.json')}
                />
                <Text style={{ fontSize: 15, textAlign: "center", paddingBottom: 8, fontFamily: theme.FONTS.Raleway700 }}>
                  {AppTexts.Exclude_Favorite}
                </Text>
                <View style={{ width: '80%', flexDirection: "row",}}>
                  <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: '100%' }}>
                    <Button
                      text="Sim"
                      background={theme.COLORS.GrayC4C4C4}
                      width={58.15}
                      height={35.15}
                      borderRadius={5}
                      fontSize={17}
                      fontFamily={theme.FONTS.Popp600}
                      onPress={() => {
                        setVisible(false);
                        deleteFavoriteItem(id);
                      }}
                    />
                    <Button
                      text="Não"
                      background={theme.COLORS.OrangeF6752C}
                      width={58.15}
                      height={35.15}
                      borderRadius={5}
                      fontSize={17}
                      fontFamily={theme.FONTS.Popp600}
                      onPress={() => setVisible(false)}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ModalPoup>
          <View style={styles.Container}>
            <View style={styles.ContainerItens}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                  <RefreshControl
                    refreshing={refresh}
                    onRefresh={() => pullMeDown()}
                  />}
              >
                {isSkeleton ? (
                  <>
                    <View>
                      <SkeletonFavorites />
                      <SkeletonFavorites />
                      <SkeletonFavorites />
                      <SkeletonFavorites />
                      <SkeletonFavorites />
                    </View>
                  </>
                ) : (
                  favorites.length > 0 ?
                    memoFavoriteItems
                    : (
                      <View style={{ alignItems: 'center' }}>
                        <LottieView
                          autoPlay
                          style={{ height: '80%', alignItems: 'center' }}
                          source={require('../assets/lottie/Animation1701904243006.json')}
                        />
                        <Text style={{ fontSize: 15, textAlign: 'center', fontFamily: theme.FONTS.Raleway700 }}>
                          {AppTexts.Oops_Whithout_Fav}
                        </Text>
                      </View>
                    )
                )}
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </UseFonts>
  );
};

export default FavoriteItems;
