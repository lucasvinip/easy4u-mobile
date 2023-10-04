import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from '../StyleAndComponentsScreens/FavoriteItens/style';
import { FavoriteCard } from '../StyleAndComponentsScreens/FavoriteItens/components/FavoriteCard.tsx/FavoriteCard';
import UseFonts from '../styles/useFonts';
import theme from '../styles/theme';
import { StatusBar } from 'expo-status-bar';
// import { Container } from './styles';

const FavoriteItens = () => {
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
                <FavoriteCard/>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </UseFonts>
  )
};

export default FavoriteItens;