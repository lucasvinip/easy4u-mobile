import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from '../../StyleAndComponentsScreens/FavoriteItens/style';
import { FavoriteCard } from '../../StyleAndComponentsScreens/FavoriteItens/components/FavoriteCard.tsx/FavoriteCard';

// import { Container } from './styles';

const FavoriteItens = () => {
  return (
    <SafeAreaView>
        <View style={styles.Container}>
          <View>
            <FavoriteCard />
          </View>
        </View>
    </SafeAreaView>
  )
};

export default FavoriteItens;