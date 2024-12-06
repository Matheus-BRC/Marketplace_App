import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import topo from "../../assets/topo.png";
import notebook from "../../assets/notebook.png";
import pc from "../../assets/pc.png";
import processor from "../../assets/processor.png";

export function HomePage() {
  return (
    <SafeAreaView style={styles.safe}>
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Home</Text>
                <Image
                source={{ uri: 'https://img.icons8.com/ios-glyphs/30/shopping-cart.png' }}
                style={styles.cartIcon}
                />
            </View>

            {/* Banner */}
            <View>
                <Image
                source={topo}
                style={styles.bannerImage}
                />
            </View>

            {/* Notebooks Section */}
            <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Notebooks</Text>
                <Text style={styles.viewAllText}>Ver tudo</Text>
                </View>
                <ScrollView horizontal>
                <View style={styles.productCard}>
                    <Image
                    source={notebook}
                    style={styles.productImage}
                    />
                    <Text style={styles.productName}>MacBook Air de 13"</Text>
                    <Text style={styles.productStore}>Loja Sistech Eletronicos</Text>
                    <Text style={styles.productPrice}>R$ 7.999,99</Text>
                </View>
                <View style={styles.productCard}>
                    <Image
                    source={notebook}
                    style={styles.productImage}
                    />
                    <Text style={styles.productName}>MacBook Pro de 16"</Text>
                    <Text style={styles.productStore}>Loja Eletrosystem</Text>
                    <Text style={styles.productPrice}>R$ 11.999,99</Text>
                </View>
                <View style={styles.productCard}>
                    <Image
                    source={notebook}
                    style={styles.productImage}
                    />
                    <Text style={styles.productName}>MacBook Pro de 16"</Text>
                    <Text style={styles.productStore}>Loja Eletrosystem</Text>
                    <Text style={styles.productPrice}>R$ 11.999,99</Text>
                </View>
                </ScrollView>
            </View>

            {/* Computadores Section */}
            <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Computadores</Text>
                <Text style={styles.viewAllText}>Ver tudo</Text>
                </View>
                <ScrollView horizontal>
                <View style={styles.productCard}>
                    <Image
                    source={pc}
                    style={styles.productImage}
                    />
                    <Text style={styles.productName}>PC Gamer EasyPC</Text>
                    <Text style={styles.productStore}>Loja Sistech Eletronicos</Text>
                    <Text style={styles.productPrice}>R$ 3.599,99</Text>
                </View>
                <View style={styles.productCard}>
                    <Image
                    source={pc}
                    style={styles.productImage}
                    />
                    <Text style={styles.productName}>PC Gamer Rocket</Text>
                    <Text style={styles.productStore}>Loja Eletrosystem</Text>
                    <Text style={styles.productPrice}>R$ 3.599,99</Text>
                </View>
                <View style={styles.productCard}>
                    <Image
                    source={pc}
                    style={styles.productImage}
                    />
                    <Text style={styles.productName}>PC Gamer Rocket</Text>
                    <Text style={styles.productStore}>Loja Eletrosystem</Text>
                    <Text style={styles.productPrice}>R$ 3.599,99</Text>
                </View>
                </ScrollView>
            </View>

            {/* Hardware Section */}
            <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Hardware</Text>
                <Text style={styles.viewAllText}>Ver tudo</Text>
                </View>
                <ScrollView horizontal>
                <View style={styles.productCard}>
                    <Image
                    source={processor}
                    style={styles.productImage}
                    />
                    <Text style={styles.productName}>AMD Ryzen 7 5800X</Text>
                    <Text style={styles.productStore}>Loja Sistech Eletronicos</Text>
                    <Text style={styles.productPrice}>R$ 3.599,99</Text>
                </View>
                <View style={styles.productCard}>
                    <Image
                    source={processor}
                    style={styles.productImage}
                    />
                    <Text style={styles.productName}>Intel Core i7 9700KF</Text>
                    <Text style={styles.productStore}>Loja Eletrosystem</Text>
                    <Text style={styles.productPrice}>R$ 3.599,99</Text>
                </View>
                <View style={styles.productCard}>
                    <Image
                    source={processor}
                    style={styles.productImage}
                    />
                    <Text style={styles.productName}>Intel Core i7 9700KF</Text>
                    <Text style={styles.productStore}>Loja Eletrosystem</Text>
                    <Text style={styles.productPrice}>R$ 3.599,99</Text>
                </View>
                </ScrollView>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};