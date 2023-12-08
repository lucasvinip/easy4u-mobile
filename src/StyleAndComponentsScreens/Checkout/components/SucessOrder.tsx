import { View } from "react-native";
import Button from "../../../components/Button/Button";
import theme from "../../../styles/theme";
import { router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect } from "react";
import { clearCart } from "../../../redux/features/shoppingCart/shoppingCartSlice";

interface ButtonSucessProps {
    onVisible: () => void
}

interface CheckoutProps {
    id: number;
    name: string;
    photo: string;
    price: number;
    quantity: number

}

const SucessOrder: React.FC<ButtonSucessProps> = ({onVisible}) => {
    
    const dispatch = useDispatch();

    const finalizeOrderCart = () => {
        dispatch(clearCart())

        setTimeout(() => {
            router.replace('/Orders')
        }, 500);
    };

    return (
        <View>
            <Button
                background={theme.COLORS.Orange4FE724C}
                borderRadius={10}
                fontFamily={theme.FONTS.Popp500}
                height={35}
                width={200}
                fontSize={16}
                text='Verificar Pedido'
                color={theme.COLORS.Whiteffffff}
                onPress={() => {finalizeOrderCart(); onVisible() }}
            />
        </View>
    )

}

export default  SucessOrder 