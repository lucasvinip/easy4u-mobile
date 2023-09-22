import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import theme from '../../../../styles/theme';
import { AppTexts } from '../../../../assets/strings';
import { AntDesign } from '@expo/vector-icons';


import { styles, shadowStyle} from './style';

const ButtonCredit = () => {
  
  return (
    <TouchableOpacity style={[styles.Container, shadowStyle]}>
      <View style={styles.Touchable}>
        <AntDesign name='appstore1' style={styles.TouchableIcon} />
        <Text style={styles.TouchableText}>
          {AppTexts.Cafeteria_Credits}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCredit;
