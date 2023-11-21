import { Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import QRCode from "react-native-qrcode-svg";
import theme from "../../styles/theme";
import { useState } from 'react';
import * as Clipboard from 'expo-clipboard';
import { router } from 'expo-router';
import styles from './style';

interface CPBoardProps {
    copy: string;
    qrcode: string;
    visible: () => void
}

const CPBoard: React.FC<CPBoardProps> = ({ copy, qrcode, visible }) => {
    const handleTextToClipboard = async () => {
        await Clipboard.setStringAsync(copy)
    }

    return (
        <View style={{alignItems: "flex-end"}}>
            <View style={styles.HeaderModal}>
                <TouchableOpacity onPress={visible} >
                    <Image
                        source={require("../../assets/img/x.png")}
                        style={{ height: 30, width: 30 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", gap: 10 }}>
                <QRCode
                    value={JSON.stringify(qrcode)}
                    size={150}
                />
                <TouchableOpacity onPress={handleTextToClipboard} style={{ flexDirection: "row", alignItems: "center",  padding: 15, gap: 10 }}>
                    <TextInput editable={false} value={copy} style={{ paddingLeft: 10 }} />
                    <MaterialIcons name="content-copy" size={25} color={theme.COLORS.Orange4FE724C} />
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default CPBoard;