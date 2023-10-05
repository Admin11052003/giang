import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const restaurantData = [
    // { id: 1, image: require('../assets/anh1.png') },
    // { id: 2, image: require('../assets/anh2.png') },
    // { id: 3, image: require('../assets/anh3.png') },
    // { id: 4, image: require('../assets/anh4.png') },
    // { id: 5, image: require('../assets/anh5.png') },
    // { id: 6, image: require('../assets/anh6.png') },

    { id: 1, image: require('../assets/hinha.png'), name: 'Restaurant 1' },
    { id: 2, image: require('../assets/hinhb.png'), name: 'Restaurant 2' },
    { id: 3, image: require('../assets/hinhc.png'), name: 'Restaurant 3' },
    { id: 4, image: require('../assets/hinhd.png'), name: 'Restaurant 4' },
    { id: 5, image: require('../assets/hinhe.png'), name: 'Restaurant 5' },
    { id: 6, image: require('../assets/hinhf.png'), name: 'Restaurant 6' },
    ];

const CategoriesScreen = () => {
    const renderItem = ({ item }) => (
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.restaurantImage} />
        <View style={styles.textOverlay}>
            <Text style={styles.imageText}>{item.name}</Text>
        </View>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={restaurantData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={1} // Set the number of columns you desire
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    imageContainer: {
      flex: 1,
      margin: 5,
    },
    restaurantImage: {
      width: "100%",
      height: 110,
      //aspectRatio: 1, // This keeps the original aspect ratio of the image
    //   borderRadius: 10,
    },
    textOverlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });

export default CategoriesScreen;