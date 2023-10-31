import { Text, View } from "react-native"
import SVGEmptyCart from "./EmptyCart"
import IconEmptyCart from '../../assets/img/EmptyCart.svg'

const NotFoundExecption = () => {
    return (
        <View>
            <IconEmptyCart width={30} height={30} />
        </View>
    )
}

export default NotFoundExecption