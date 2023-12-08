import { router } from "expo-router";
import { View } from "react-native";

import theme from "../../../styles/theme";
import Button from "../../../components/Button/Button";
import { AppTexts } from "../../../assets/strings";

interface ButtonErrorProps {
    onVisible: () => void
}


const ErrorOrder: React.FC<ButtonErrorProps> = ({onVisible}) => {

    const finalizeOrderCart = () => {

        setTimeout(() => {
            router.back();
        }, 500);
    };

    return (
        <View style={{paddingTop: 20}}>
            <Button
                background={theme.COLORS.Orange4FE724C}
                borderRadius={10}
                fontFamily={theme.FONTS.Popp500}
                height={35}
                width={200}
                fontSize={16}
                text={AppTexts.Come_Back_menu}
                color={theme.COLORS.Whiteffffff}
                onPress={() => {finalizeOrderCart(); onVisible() }}
            />
        </View>
    )
}

export default ErrorOrder;