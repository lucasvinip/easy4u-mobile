import { Text } from "react-native"
import { View } from "react-native"
import { AppTexts } from "../../../assets/strings"
import { styles } from '../style'

interface CheckoutProps {
    total: string 
}

const FooterCheckout: React.FC<CheckoutProps>= ({total})  => {
    return (
        <View style={styles.CardFooter}>
        <View style={styles.ContentFooter}>
            <View style={styles.TitlesFooter}>
                <Text style={styles.TitleCardFooter}>
                    {AppTexts.Total}
                </Text>
                <Text style={styles.TitleCardFooter}>
                    {total}
                </Text>
            </View>
        </View>
    </View>
    );
};

export default FooterCheckout;