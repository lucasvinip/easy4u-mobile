import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';

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
    ProductsByCart: Product[];
    created_at: Date;
    status: string;
    total: number;
};

const ContainerFullOrder = ({
    ProductsByCart,
    created_at,
    status,
    total,
    id
}: ProductByCartResponse) => {
    return (
        <View style={styles.Container}>
            {ProductsByCart.length > 0 ? (
                ProductsByCart.map(({ product, qntd, total_value }: Product, index: number) => (
                    <View key={index}>
                        <Text>Nome do Produto</Text>
                        <View>
                            <Text>{product.name}</Text>
                            <Text>x{qntd}</Text>
                        </View>
                        <View>
                            <Text>Total</Text>
                            <View>
                                <Text>{total_value}</Text>
                            </View>
                        </View>
                        <Text>Total</Text>
                        <Text>{total}</Text>
                    </View>

                ))
            ) : (
                <View>
                    <Text>O Caue Feio</Text>
                </View>
            )}
        </View>
    );
};

export default ContainerFullOrder;
