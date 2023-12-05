import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


import Button from '../../../../components/Button/Button';
import ModalPoup from '../../../../components/ModalPoup/Modal';
import theme from '../../../../styles/theme';
import { styles } from './style';
import { AppTexts } from '../../../../assets/strings';
import Toast from '../../../../components/Toast/Toast';

interface TimeProps {
  onSelectTime: (selectedTime: any) => void;
}

const ScheduleTime = ({ onSelectTime }: TimeProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<number>();
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(null);
  const listTime: number[] = [15, 30, 60, 90, 120];

  const handlePickerPress = () => {
    setVisible(true);
  };

  const handleButtonClick = (index: number, time: number) => {
    setSelectedTime(time);
    setSelectedButtonIndex(index);
  };

  const exitModal = () => {
    setVisible(false)
    setSelectedButtonIndex(null)
  }

  const okModal = () => {
    if (selectedButtonIndex === null) {
      Alert.alert("Warning", AppTexts.Select_Time)
    }
    else {
      setVisible(false)
    }
  };

  return (
    <View>
      <Text style={styles.labelText}>{AppTexts.Schedule_Time}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handlePickerPress()}>
          <View style={[styles.button, styles.selectTimeButton]}>
            <Text style={[styles.buttonText, styles.selectTimeButtonText]}>
              {AppTexts.Select_Time}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {visible && (
        <ModalPoup visible={visible}>
          <View style={styles.ContainerModal}>
            <View style={styles.bGetOut}>
              <TouchableOpacity onPress={exitModal}>
                <FontAwesome name='times-circle' size={30} color={theme.COLORS.OrangeF6752C} />
              </TouchableOpacity>
            </View>
            <View style={styles.Modal}>
              <View style={styles.ChooseTime}>
                <Text style={{ paddingBottom: 10, fontFamily: theme.FONTS.Raleway700 }}>
                  {AppTexts.Select_Time}:
                </Text>
                <View
                  style={styles.Choose}>
                  {listTime.map((time: number, index: number) => {
                    let formattedTime = `${time} min`;

                    switch (time) {
                      case 60:
                        formattedTime = '1h00';
                        break;
                      case 90:
                        formattedTime = '1h30';
                        break;
                      case 120:
                        formattedTime = '2h00';
                        break;
                    }
                    return (
                      <Button
                        key={index}
                        background={index === selectedButtonIndex ? theme.COLORS.OrangeF6752C : theme.COLORS.Whiteffffff}
                        borderRadius={12}
                        fontFamily={theme.FONTS.Raleway600}
                        fontSize={12}
                        height={55}
                        text={formattedTime}
                        width={60}
                        color={index === selectedButtonIndex ? theme.COLORS.Whiteffffff : theme.COLORS.Black000000}
                        onPress={() => { handleButtonClick(index, time), onSelectTime(time) }}
                      />
                    );
                  })}
                </View>
                <View style={styles.bConfirm}>
                  <TouchableOpacity onPress={okModal}>
                    <FontAwesome name='check-circle' color={theme.COLORS.Green23A26D} size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ModalPoup>
      )}
    </View>
  );
};

export default ScheduleTime;
