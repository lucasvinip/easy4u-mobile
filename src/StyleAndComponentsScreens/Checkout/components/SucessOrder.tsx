import { View } from "react-native";
import Button from "../../../components/Button/Button";
import theme from "../../../styles/theme";
import { router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect } from "react";
import { clearCart } from "../../../redux/features/shoppingCart/shoppingCartSlice";
import { Link } from "expo-router";

interface ButtonSucessProps {
    onVisible: () => void,
}

const SucessOrder: React.FC<ButtonSucessProps> = ({ onVisible }) => {

    const dispatch = useDispatch();

    const finalizeOrderCart = () => {
        dispatch(clearCart())
        router.back()
        router.replace('/Orders')
    };


    return (
        <View>
            <Link href={{
                pathname: '/Orders',
            }}>
                <Button
                    background={theme.COLORS.Orange4FE724C}
                    borderRadius={10}
                    fontFamily={theme.FONTS.Popp500}
                    height={35}
                    width={200}
                    fontSize={16}
                    text='Verificar Pedido'
                    color={theme.COLORS.Whiteffffff}
                    onPress={() => { finalizeOrderCart(); onVisible() }}
                />
            </Link>
        </View>
    )

}

export default SucessOrder 