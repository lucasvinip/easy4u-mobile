import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

import { AppTexts } from '../../../../assets/strings';
import theme from '../../../../styles/theme';
import { styles } from './style';
import Button from '../../../../components/Button/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const SubTotalDiscount = () => {
  const total = useSelector((state: RootState) => state.cart.total)

  return (
    <View style={styles.Card}>
      <View style={styles.ContentContainer}>
        <View style={{ width: '90%', height: '66%', justifyContent: 'space-around' }}>
          <View style={styles.TextRow}>
            <Text style={styles.labelText}>{AppTexts.Subtotal}</Text>
            <Text style={styles.valueText}>R$ {total}</Text>
          </View>
          <View style={styles.TextRow}>
            <Text style={styles.labelText}>{AppTexts.Discount}</Text>
            <Text style={styles.valueText}>R$ 00,00</Text>
          </View>
          <View style={styles.TextRow}>
            <Text style={styles.labelText}>{AppTexts.Total}</Text>
            <Link href={'/Checkout'} asChild>
              <Text style={styles.valueText}>R$ {total}</Text>
            </Link>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text={AppTexts.Finalize}
          fontFamily={theme.FONTS.Popp700}
          background={theme.COLORS.OrangeFF6C44}
          width={160}
          height={30}
          borderRadius={48}
          fontSize={14}
        />
      </View>
    </View>
  );
};

export default SubTotalDiscount;
