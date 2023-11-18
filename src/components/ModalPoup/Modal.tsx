import {
    useEffect,
    useRef,
    useState
} from "react"
import {
    Modal,
    View,
    Animated
} from 'react-native';

import { styles } from "./style";

interface ModalPoupProps {
    visible: boolean,
    children: React.ReactNode
}

export default function ModalPoup({ visible, children }: ModalPoupProps) {

    const [showModal, setShowModal] = useState<boolean>(visible)
    const scaleValueModal = useRef(new Animated.Value(0)).current

    const toggleModal = () => {
        if (visible) {
            setShowModal(true)
            Animated.spring(scaleValueModal, {
                toValue: 1,
                delay: 300,
                useNativeDriver: true,
            }).start()
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValueModal, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }


    useEffect(() => {
        toggleModal()
    }, [visible])

    return (
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackGround}>
                <Animated.View style={[styles.modalContainer, { transform: [{ scale: scaleValueModal }] }]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    )
}