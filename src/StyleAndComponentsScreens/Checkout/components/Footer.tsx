import { Text } from "react-native"
import { View } from "react-native"
import { AppTexts } from "../../../assets/strings"
import { formatNumberToTypeBr } from "../../../utils/formatNumber"
import { styles } from '../style'

interface CheckoutProps {
    total: number  
}

const FooterCheckout: React.FC<CheckoutProps>= ({total})  => {
    
    const formattedNumber = formatNumberToTypeBr(total)

    return (
        <View style={styles.CardFooter}>
        <View style={styles.ContentFooter}>
            <View style={styles.TitlesFooter}>
                <Text style={styles.TitleCardFooter}>
                    {AppTexts.Total}
                </Text>
                <Text style={styles.TitleCardFooter}>
                    {formattedNumber}
                </Text>
            </View>
        </View>
    </View>
    );
};

export default FooterCheckout;