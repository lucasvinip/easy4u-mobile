import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Button from '../../../../components/Button/Button';
import ModalPoup from '../../../../components/ModalPoup/Modal';
import theme from '../../../../styles/theme';
import { styles } from './style';
import { AppTexts } from '../../../../assets/strings';

interface TimeProps {
  onSelectTime: (selectedTime: any) => void;
}

const ScheduleTime = ({onSelectTime}: TimeProps) => {
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
          <View style={{ width: '100%', height: 40, alignItems: 'flex-end', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image source={require('../../../../assets/img/x.png')} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
          </View>
          <View>
            
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              backgroundColor: 'green',
              height: '30%',
              width: '100%',
              alignItems: 'center',
              gap: 25,
              justifyContent: 'center',
            }}
          >
            {listTime.map((time: number, index: number) => {
              let formattedTime = `${time} Minutos`;

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
                  height={'50%'}
                  text={formattedTime}
                  width={'20%'}
                  color={index === selectedButtonIndex ? theme.COLORS.Whiteffffff : theme.COLORS.Black000000}
                  onPress={() => {handleButtonClick(index, time), onSelectTime(time)}}
                />
              );
            })}
          </View>
        </ModalPoup>
      )}
    </View>
  );
};

export default ScheduleTime;
