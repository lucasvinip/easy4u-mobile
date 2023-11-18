import { Image, View } from "react-native"
import { styles } from "../style"

const Header: React.FC = () => {
    return (
        <View style={styles.ContainerHeader}>
            <Image
                source={require('../../../assets/img/easy.png')}
                style={{ width: 191, height: 65 }}
            />
        </View>
    )
}

export default Header