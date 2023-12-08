import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPix } from '@fortawesome/free-brands-svg-icons/faPix';
import theme from '../../../../styles/theme';
import { styles, shadowStyle } from './style';

type PaymentMethodProps = {
  method: string;
  selectedMethod: string;
  onSelect: (method: any) => void;
};

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  method,
  selectedMethod,
  onSelect
}) => {

  // console.log(method)
  // console.log(selectedMethod)

  const isMethodSelected = method === selectedMethod;
  const borderColor = isMethodSelected ? theme.COLORS.YellowEEA734 : theme.COLORS.Whiteffffff;

  const handlePress = () => {
    onSelect(method);
  };

  return (
    <TouchableOpacity
      style={[styles.Container, shadowStyle, { borderColor: borderColor }]}
      onPress={handlePress}
    >
      <View style={[styles.Touchable]}>
        {method === 'Créditos' ? (
          <MaterialCommunityIcons name={'credit-card-fast'} style={styles.TouchableIcon} />
        ) : (
          <FontAwesomeIcon icon={faPix} size={24} color={"#32b6aa"} />
        )}
        <Text style={styles.TouchableText}>
          {method}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentMethod;
