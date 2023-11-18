import { View } from "react-native";
import Button from "../../../../components/Button/Button";
import theme from "../../../../styles/theme";
import { router } from "expo-router";

interface ButtonSucessProps {
    onVisible: () => void
}

const SucessOrder: React.FC<ButtonSucessProps> = ({onVisible}) => {

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
                onPress={() => { router.push('/Orders'); onVisible() }}
            />
        </View>
    )

}

export default  SucessOrder 