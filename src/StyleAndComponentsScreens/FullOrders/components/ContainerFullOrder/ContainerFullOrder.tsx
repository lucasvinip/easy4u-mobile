import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { styles } from "./style";

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

const ContainerFullOrder = ({
    productsByCart,
}: ProductByCartResponse) => {

    return (
        <View style={styles.Container}>
            {productsByCart.length > 0 ? (
                productsByCart.map(
                    ({ product, total_value, qntd }: Product, index: number) => (
                        <View style={styles.ContentMain} key={index}>
                            <View style={styles.NameAndQuantityProduct}>
                                <Text style={styles.NameTitle}>
                                    {product.name}
                                </Text>
                                <Text style={styles.QuantityTitle}>
                                    {qntd}x
                                </Text>
                            </View>
                            <Text style={styles.MainTitle}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(total_value)}
                            </Text>
                        </View>
                    )
                )
            ) : (
                <View>
                    <Text>O Caue Feio</Text>
                </View>
            )}
        </View>
    );
};

export default ContainerFullOrder;