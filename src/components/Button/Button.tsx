import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


interface ButtonProps {
    background: string,
    width: number
    heigh: number,
    borderRadius: number
    text: string,
    fontFamily: string,
};
const Button = ({
    background,
    width,
    heigh,
    borderRadius,
    text,
    fontFamily }: ButtonProps) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: background,
            width: RFValue(width),
            height: RFValue(heigh),
            borderRadius: RFValue(borderRadius),
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            color: 'white',
            fontFamily: fontFamily,
        },
    });

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;




