import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './style'
import { AppTexts } from '../../assets/strings';
import ButtonNavigation from './components/ButtonNavigation/ButtonNavigation';
import ButtonGetOut from './components/ButtonGetOut/ButtonGetOut';

const  CustomDrawer = () => {
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
              <ButtonNavigation title={AppTexts.Start} icon='home' href='/(drawer)/AllProducts'/>
              <ButtonNavigation title={AppTexts.Orders} icon='filetext1' href='/Orders'/>
              <ButtonNavigation title={AppTexts.Favorites} icon='heart' href='/FavoriteItems'/>
              <ButtonNavigation title={AppTexts.Profile_Settings} icon='setting' href='/ProfileSetting'/>
            </View>
          </View>
          <View style={styles.ContainerFooter}>
            <ButtonGetOut/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
