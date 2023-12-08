import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { Alert } from "react-native";

export const useToken: React.FC = () => {
    const [token, setToken] = useState<any>(null);

    useEffect(() => {
        const getToken = async () => {
            try {
                const storageToken = await AsyncStorage.getItem("token");
                if (!storageToken) {
                    Alert.alert("Token inválido!");
                } else {
                    setToken(storageToken);
                }
            } catch (error) {
                console.error("Erro ao recuperar o token:", error);
           } 
        };
        getToken();
    }, []);

    return token;
};

