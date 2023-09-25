import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './style'
import { AppTexts } from '../../assets/strings';
import theme from '../../styles/theme';
import ButtonNavigation from './components/ButtonNavigation/ButtonNavigation';

const CustomDrawer = () => {
  return (
    <View style={styles.Drawer}>
      <View style={styles.Container}>
        <View style={styles.Content}>
          <View style={styles.ContainerHeader}>
            <View style={styles.Header}>
              <Image source={require('../../assets/img/cheesy-bread.png')} style={styles.Image} />
              <View style={styles.Texts}>
                <Text style={styles.Name}>
                  Lucas Vinicius
                </Text>
                <Text style={styles.Email}>
                  easy4ufoods@gmail.com.br
                </Text>
                <Text style={styles.Balance}>
                  Saldo: R$ 150
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.ContainerMain}>
            <View style={styles.Main}>
              <ButtonNavigation title='inicoo'/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
