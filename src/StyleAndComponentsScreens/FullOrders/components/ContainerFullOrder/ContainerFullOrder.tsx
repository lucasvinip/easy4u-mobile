import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { styles } from "./style";
import { FlatList } from "react-native-gesture-handler";

type Details = {
    name: string;
    photo: string;
    description: string;
    price: number;
    productType: string;
};

type Product = {
    product: Details;
    qntd: number;
    total_value: number;
};

type ProductByCartResponse = {
    id: number;
    productsByCart: Product[];
    created_at: Date;
    status: string;
};

const ContainerFullOrder: React.FC<ProductByCartResponse> = ({
    productsByCart,
}) => {

    return (
        <View style={styles.Container}>
            {productsByCart.length > 0 ? (
                <FlatList
                    data={productsByCart}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.ContentMain} key={index}>
                                <View style={styles.NameAndQuantityProduct}>
                                    <Text style={styles.NameTitle}>
                                        {item.product.name}
                                    </Text>
                                    <Text style={styles.QuantityTitle}>
                                        {item.qntd}x
                                    </Text>
                                </View>
                                <Text style={styles.MainTitle}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(item.total_value)}
                                </Text>
                            </View>
                        )
                    }}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View>
                    <Text>O Caue Feio</Text>
                </View>
            )}
        </View>
    );
};

export default ContainerFullOrder;


