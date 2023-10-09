import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../StyleAndComponentsScreens/FavoriteItens/style';
import UseFonts from '../styles/useFonts';
import theme from '../styles/theme';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { performApi } from '../utils/api';
import FavoriteCard from '../StyleAndComponentsScreens/FavoriteItens/components/FavoriteCard.tsx/FavoriteCard';

interface ProductsProps {
  product: FavoritesProps;
}

interface FavoritesProps {
  name: string;
  price: string;
  photo: string;
}

const FavoriteItens = () => {
  const [favorites, setFavorites] = useState<any>([]);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      if (!storedToken) {
        router.push("/");
      } else {
        setToken(storedToken); 
        try {
          const getFavorites = await performApi.getData("favorites", storedToken);
          setFavorites(getFavorites);
        } catch (error) {
          console.error("Erro ao buscar favoritos:", error);
        }
      }
    };
    fetchData();
  }, []);


  const handleDeleteFavoriteItem = async (product: string) => {
    console.log(`voce clickou em ${product}`)
  };

  return (
    <UseFonts>
      <StatusBar
        style='dark'
        translucent backgroundColor={theme.COLORS.GrayRgba255249243041}
      />
      <SafeAreaView style={{ backgroundColor: theme.COLORS.Whiteffffff }}>
        <View style={styles.Screen}>
          <View style={styles.Container}>
            <View style={styles.ContainerItens}>
              <ScrollView>
                {favorites.map(({ product }: ProductsProps, index: number) => (
                  <FavoriteCard
                    key={index}
                    name={product.name}
                    price={product.price}
                    photo={product.photo}
                    onPress={() => {
                      handleDeleteFavoriteItem(product.name)
                    }}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </UseFonts>
  );
};

export default FavoriteItens;
