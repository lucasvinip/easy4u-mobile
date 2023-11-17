import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPix } from '@fortawesome/free-brands-svg-icons/faPix';
import theme from '../../../../styles/theme';
import { styles, shadowStyle } from './style';

type PaymentMethodProps = {
  method: string;
  onSelect: (method: any) => void;
};

const PaymentMethod = ({ method, onSelect }: PaymentMethodProps) => {
  const [borderColor, setBorderColor] = useState(theme.COLORS.Whiteffffff);

  const resolveMethodPayment = () => {
    onSelect(method)
  };

  const handlePress = () => {
    if (borderColor === theme.COLORS.Whiteffffff) {
      setBorderColor(theme.COLORS.YellowEEA734);
    } else {
      setBorderColor(theme.COLORS.Whiteffffff);
    }
    resolveMethodPayment();
  };

  return (
    <TouchableOpacity
      style={[styles.Container, shadowStyle, { borderColor: borderColor}]}
      onPress={handlePress}
    >
      <View style={[styles.Touchable]}>
        {method == 'Créditos' ? (
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
