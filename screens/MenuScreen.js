import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const HomeScreen = () => {
  const products = [
    { id: 1, image: require('../assets/anh1.png') },
    { id: 2, image: require('../assets/anh2.png') },
    { id: 3, image: require('../assets/anh3.png') },
    { id: 4, image: require('../assets/anh4.png') },
    { id: 5, image: require('../assets/anh5.png') },
    { id: 6, image: require('../assets/anh6.png') },
    { id: 7, image: require('../assets/anh7.png') },
    { id: 8, image: require('../assets/anh8.png') },
    { id: 9, image: require('../assets/anh9.png') },
    { id: 10, image: require('../assets/anh10.png') },
    // Add more products here
  ];

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Hình giỏ hàng */}
      <View style={styles.cartImageContainer}>
        <Image source={require('../assets/icons8.png')} style={styles.imagecart} />
      </View>
      {/* Hình 3 thanh ở góc trái */}
      <View style={styles.cartImageContainer1}>
        <Image source={require('../assets/icons9.png')} style={styles.imagemenu} />
      </View>

      <FlatList
        data={products}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 60,
    //marginBottom: 50,
    flex: 1,
    justifyContent: 'center',
  },
  productListContainer: {
    alignItems: 'center',
  },
  productContainer: {
    margin: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 200,
    height: 120,
  },
  productName: {
    marginTop: 5,
    textAlign: 'center',
  },
  cartImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  imagecart: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  cartImageContainer1: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
  imagemenu: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
});

export default MenuScreen;
