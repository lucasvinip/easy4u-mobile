import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


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
            width: RFValue(width),
            height: RFValue(height),
            borderRadius: RFValue(borderRadius),
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            color: 'white',
            fontFamily: fontFamily,
            fontSize: RFValue(fontSize)
        },
    });

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;




