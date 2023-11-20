import { View } from "react-native";
import Button from "../../../../components/Button/Button";
import theme from "../../../../styles/theme";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useEffect } from "react";

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

    const total = useSelector((state: RootState) => state.cart.total)
    const items = useSelector((state: RootState) => state.cart.items)


    const fetchData = async () => {
        const itemsProducts = await items
        const productInfo = itemsProducts.map((item: CheckoutProps) => item)
        console.log(productInfo)
    }

    const handleNavigate = () => {
        router.back();

        setTimeout(() => {
            router.push('/Orders')
        }, 500);
    };

    useEffect(() => {
        fetchData();
    })

    return (
        <View style={{ marginTop: 50 }}>
            <Button
                background={theme.COLORS.Orange4FE724C}
                borderRadius={10}
                fontFamily={theme.FONTS.Popp500}
                height={35}
                width={200}
                fontSize={16}
                text='Verificar Pedido'
                color={theme.COLORS.Whiteffffff}
                onPress={() => {handleNavigate(); onVisible() }}
            />
        </View>
    )

}

export default  SucessOrder 