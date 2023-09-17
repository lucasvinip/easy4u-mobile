import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';


interface ButtonProps {
  background: string,
  width: number
  height: number,
  borderRadius: number
  text: string,
  fontFamily: string,
  fontSize: number
};
const Button = ({
  background,
  width,
  height,
  borderRadius,
  text,
  fontFamily,
  fontSize
}: ButtonProps) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: background,
      width: width,
      height: height,
      borderRadius: borderRadius,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: 'white',
      fontFamily: fontFamily,
      fontSize: fontSize
    },
  });
  const shadowStyle = {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 10 },
        shadowOpacity: 40,
        shadowRadius: 5,
      },
      android: {
        elevation: 6,
      },
    }),
  };

  return (
    <TouchableOpacity style={[styles.button, shadowStyle]} >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;




