import { useDispatch } from "react-redux";
import { clearCart } from "../../../redux/features/shoppingCart/shoppingCartSlice";
import { router } from "expo-router";
import { View } from "react-native";

import theme from "../../../styles/theme";
import Button from "../../../components/Button/Button";

interface ButtonErrorProps {
    onVisible: () => void
}


const ErrorOrder: React.FC<ButtonErrorProps> = ({onVisible}) => {

    const dispatch = useDispatch()

    const finalizeOrderCart = () => {
        dispatch(clearCart())
        router.back();

        setTimeout(() => {
            router.push('/AllProducts')
        }, 500);
    };

    return (
        <View style={{ marginTop: 50 }}>
            <Button
                background={theme.COLORS.Orange4FE724C}
                borderRadius={10}
                fontFamily={theme.FONTS.Popp500}
                height={35}
                width={200}
                fontSize={16}
                text='Voltar ao menu'
                color={theme.COLORS.Whiteffffff}
                onPress={() => {finalizeOrderCart(); onVisible() }}
            />
        </View>
    )
}

export default ErrorOrder;