import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Container } from './style';
import { FavoriteCard } from './components/FavoriteCard.tsx/FavoriteCard';

// import { Container } from './styles';

const FavoriteItens = () => {
  return (
    <SafeAreaView>
        <Container>
          <View>
            <FavoriteCard />
          </View>
        </Container>
    </SafeAreaView>
  )
};

export { FavoriteItens };