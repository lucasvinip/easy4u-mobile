import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppTexts } from '../../../../assets/strings';
import { styles } from './style';


const ScheduleTime = () => {
  return (
    <View>
      <Text style={styles.labelText}>{AppTexts.Schedule_Time}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <View style={[styles.button, styles.getNowButton]}>
            <Text style={[styles.buttonText, styles.getNowButtonText]}>{AppTexts.Get_Now}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.button, styles.selectTimeButton]}>
            <Text style={[styles.buttonText, styles.selectTimeButtonText]}>{AppTexts.Select_Time}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScheduleTime;
