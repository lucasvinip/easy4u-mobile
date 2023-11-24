import React, { useState } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';


import { styles } from './style'
import { AppTexts } from '../../assets/strings';
import ButtonNavigation from './components/ButtonNavigation/ButtonNavigation';
import ButtonGetOut from './components/ButtonGetOut/ButtonGetOut';
import { useToken } from '../../hooks/useToken';
import { useEffect } from 'react';
import { performApi } from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setBalance } from '../../redux/features/userSettings/userSettingsSlice';
import { formatNumberToTypeBr } from '../../utils/formatNumber';

type userData = {
  name: string;
  email: string;
  photo: string;
  balance: number;
  userType: string;
}

const defaultPhoto = require("../../assets/img/user.png")

const CustomDrawer = () => {
  const [user, setUser] = useState<userData>();

  const dispatch = useDispatch()

  const uploadURL = useSelector((state: RootState) => state.user.uploadURL)
  const photo = uploadURL ? { uri: uploadURL } : defaultPhoto;
  const token = useToken();

  const balance = useSelector((state: RootState) => state.user.userBalance)
  const formatBalance = formatNumberToTypeBr(balance)

  useEffect(() => {
    const getUserData = async () => {
      const data = await performApi.getData('auth/me', token);
      dispatch(setBalance(data.balance))
      setUser(data);
    };
    getUserData();
  }, [token]);

  return (
    <View style={styles.Drawer}>
      <View style={styles.Container}>
        <View style={styles.Content}>
          <View style={styles.ContainerHeader}>
            <View style={styles.Header}>
              <Image
                source={photo}
                style={styles.Image} />
              <View style={styles.Texts}>
                <Text style={styles.Name}>
                  {user?.name}
                </Text>
                <Text style={styles.Email}>
                  {user?.email}
                </Text>
                <Text style={styles.Balance}>
                  {`Saldo: ${formatBalance}`}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.ContainerMain}>
            <View style={styles.Main}>
              <ButtonNavigation title={AppTexts.Start} icon='home-outline' href='/(drawer)/AllProducts' />
              <ButtonNavigation title={AppTexts.Orders} icon='cart-outline' href='/Orders' />
              <ButtonNavigation title={AppTexts.Favorites} icon='cards-heart' href='/FavoriteItems' />
              <ButtonNavigation title={AppTexts.Profile_Settings} icon='cog-outline' href='/ProfileSetting' />
            </View>
          </View>
          <View style={styles.ContainerFooter}>
            <ButtonGetOut />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
