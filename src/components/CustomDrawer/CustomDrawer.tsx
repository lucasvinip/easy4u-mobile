import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './style'
import { AppTexts } from '../../assets/strings';
import ButtonNavigation from './components/ButtonNavigation/ButtonNavigation';
import ButtonGetOut from './components/ButtonGetOut/ButtonGetOut';
import { useToken } from '../../hooks/useToken';
import { useEffect } from 'react';
import { storage } from '../../../firebaseConfig';
import { performApi } from '../../utils/api';

type userData = {
  name: string;
  email: string;
  photo: string;
  balance: number;
  userType: string;
}

const CustomDrawer = () => {


  const token = useToken()
  const [user, setUser] = useState<userData>({
    balance: 0,
    email: "",
    name: "",
    photo: "",
    userType: "",
  })

  useEffect(() => {
    const getUserData = async () => {
      const data = await performApi.getData("auth/me", token)
      setUser(data)
    }
    getUserData()
  }, [token])

  return (
    <View style={styles.Drawer}>
      <View style={styles.Container}>
        <View style={styles.Content}>
          <View style={styles.ContainerHeader}>
            <View style={styles.Header}>
              <Image source={{uri: user.photo}} style={styles.Image} />
              <View style={styles.Texts}>
                <Text style={styles.Name}>
                  {user.name}
                </Text>
                <Text style={styles.Email}>
                {user.email}
                </Text>
                <Text style={styles.Balance}>
                  {`Saldo: R$ ${user.balance}`}
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
