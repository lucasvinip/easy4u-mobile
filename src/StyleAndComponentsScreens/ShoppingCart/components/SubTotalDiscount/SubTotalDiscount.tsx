import React from 'react';
import { View, Text } from 'react-native';
import { AppTexts } from '../../../../assets/strings';
import theme from '../../../../styles/theme';
import { styles } from './style';
import Button from '../../../../components/Button/Button'; // Import your custom Button component


const SubTotalDiscount = () => {
  return (
    <View>
      <View style={styles.Card}>
        <View style={styles.ContentContainer}>
          <View style={{ width: '90%', height: '66%', justifyContent: 'space-around' }}>
            <View style={styles.TextRow}>
              <Text style={styles.labelText}>{AppTexts.Subtotal}</Text>
              <Text style={styles.valueText}>R$ 14,50</Text>
            </View>
            <View style={styles.TextRow}>
              <Text style={styles.labelText}>{AppTexts.Discount}</Text>
              <Text style={styles.valueText}>R$ 0,00</Text>
            </View>
            <View style={styles.TextRow}>
              <Text style={styles.labelText}>{AppTexts.Total}</Text>
              <Text style={styles.valueText}>R$ 14,50</Text>
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
    </View>
  );
};

export default SubTotalDiscount;
