import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const restaurantData = [
    { id: 1, image: require('../assets/anh1.png'), rating: 4, name: 'Restaurant 1' },
    { id: 2, image: require('../assets/anh2.png'), rating: 5, name: 'Restaurant 2' },
    { id: 3, image: require('../assets/anh3.png'), rating: 4, name: 'Restaurant 3' },
    { id: 4, image: require('../assets/anh4.png'), rating: 3, name: 'Restaurant 4' },
    { id: 5, image: require('../assets/anh5.png'), rating: 4, name: 'Restaurant 5' },
    { id: 6, image: require('../assets/anh6.png'), rating: 4, name: 'Restaurant 6' },
];

const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const iconName = i <= rating ? 'star' : 'star-outline';
      stars.push(<Ionicons key={i} name={iconName} size={20} color="orange" />);
    }
    return (
      <View style={styles.ratingContainer}>
        {stars}
        <Text style={styles.ratingText}>{rating}/5</Text>
      </View>
    );
  };

const SavedItemsScreen = () => {
    const renderItem = ({ item }) => {
      return (
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.restaurantImage} />
          {renderRating(item.rating)}
          <Text style={styles.restaurantName}>{item.name}</Text>
        </View>
      );
    };
  
return (
    <View style={styles.container}>
        <FlatList
            data={restaurantData}
            renderItem={renderItem} // Pass renderItem directly
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
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
      // flex: 1,
      margin: 5,
      width: '48%', // Adjust width to fit two images in a row
      // aspectRatio: 1, // Maintain aspect ratio (square)
    },
    restaurantImage: {
      width: '100%',
      height: 190,
      aspectRatio: 1,
      // borderRadius: 10,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
    },
    ratingText: {
      marginLeft: 5,
      fontSize: 16,
    },
    restaurantName: {
      marginTop: 10,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default SavedItemsScreen;