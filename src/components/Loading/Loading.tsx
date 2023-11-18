import { Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import theme from "../../styles/theme";
import { AppTexts } from "../../assets/strings";
import { styles } from "./style";

const Loading: React.FC = () => {
    return (
        <View style={styles.Align}>
            <Text style={styles.VerifyBalance}>{AppTexts.Verify_Balance}</Text>
            <View style={styles.Align}>
                <ActivityIndicator size={75 || "large"} color={theme.COLORS.OrangeFF6C44} />
            </View>
        </View>
    )
}

export default Loading;