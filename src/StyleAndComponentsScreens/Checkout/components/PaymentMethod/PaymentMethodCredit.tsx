import React from 'react';
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AppTexts } from '../../../../assets/strings';
import { styles, shadowStyle } from './style';


const PaymentMethodCredit = () => {

  return (
    
    <TouchableOpacity style={[styles.Container, shadowStyle]}>
      <View style={styles.Touchable}>
        <MaterialCommunityIcons name={'credit-card-fast'} style={styles.TouchableIcon} />
        <Text style={styles.TouchableText}>
          {AppTexts.Cafeteria_Credits}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentMethodCredit;
