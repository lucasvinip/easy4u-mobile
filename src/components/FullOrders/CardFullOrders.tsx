import React from "react";
import { Text, View } from "react-native";

import styles from "./style";

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
  total: number;
};

const ContainerFullOrder = ({
  productsByCart,
  created_at,
  status,
  total,
  id,
}: ProductByCartResponse) => {
  return (
    <View style={styles.Container}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderProduct}>Nome do Produto</Text>
        <Text style={styles.HeaderTotal}>Total</Text>
      </View>
      {productsByCart.length > 0 ? (
        productsByCart.map(
          ({ product, qntd, total_value }: Product, index: number) => (
            <View key={index}>
              <View style={styles.ProductInfo}>
                <View style={{ width: '70%', flexDirection: "row", gap: 25 }}>
                  <Text style={styles.ProductName}>{product.name}</Text>
                  <Text style={styles.ProductQntd}>x{qntd}</Text>
                </View>
                <Text style={styles.Total}>{total_value}</Text>
              </View>
            </View>
          )
        )
      ) : (
        <View>
          <Text>O Caue Feio</Text>
        </View>
      )}
      <View style={styles.TotalOrder}>
        <Text style={styles.HeaderProduct}>Total</Text>
        <Text style={styles.Total}>{total}</Text>
      </View>
    </View>
  );
};

export default ContainerFullOrder;
