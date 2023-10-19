import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

interface ButtonProps {
  background: string;
  width: number;
  height: number;
  borderRadius: number;
  text: string;
  fontFamily: string;
  fontSize: number;
  color?: string;
  onPress?: (value: any) => void;
}

const Button = ({
  background,
  width,
  height,
  borderRadius,
  text,
  fontFamily,
  fontSize,
  onPress,
  color
}: ButtonProps) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: background,
      width: width,
      height: height,
      borderRadius: borderRadius,
      alignItems: 'center',
      justifyContent: 'center',
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 3,
        },
        android: {
          elevation: 6,
        },
      }),
    },
    text: {
      color: "white",
      fontFamily: fontFamily,
      fontSize: fontSize,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
