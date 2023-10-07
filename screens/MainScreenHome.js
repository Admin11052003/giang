import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const restaurantData = [
    {
      id: 1,
      imagesRow1: [
        { source: require('../assets/anh1.png'), name: 'Breakfast' },
        { source: require('../assets/anh2.png'), name: 'Ramen' },
        { source: require('../assets/anh3.png'), name: 'Sandwiches' },
      ],
      
      imagesRow2: [
        { source: require('../assets/anh4.png'), name: 'Image 4' },
        { source: require('../assets/anh5.png'), name: 'Image 5' },
        
      ],
      imagesRow3: [
        { source: require('../assets/anh6.png'), name: 'Image 6' },
        { source: require('../assets/anh7.png'), name: 'Image 7' },
      ],
    },
  ];

  const MainScreenHome = () => {
    const renderItem = ({ item }) => {
      const imagesRow1 = item.imagesRow1.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={image.source} style={styles.restaurantImage} />
          <Text style={styles.imageName}>{image.name}</Text>
        </View>
      ));
  
      const imagesRow2 = item.imagesRow2.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={image.source} style={styles.restaurantImage2} />
          <Text style={styles.imageName2}>{image.name}</Text>
          {index === 0 && <Text style={styles.imageText}>San Francisco, CA</Text>} 
          {index === 1 && <Text style={styles.imageText}>San Francisco, CA</Text>}
        </View>
      ));

      const imagesRow3 = item.imagesRow3.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={image.source} style={styles.restaurantImage3} />
          <Text style={styles.imageName3}>{image.name}</Text>
          {index === 0 && <Text style={styles.imageText3}>San Francisco, CA</Text>} 
          {index === 1 && <Text style={styles.imageText3}>San Francisco, CA</Text>}
        </View>
      ));
  
      return (
        <View style={styles.restaurantCard}>
            <Text style={styles.restaurantName}>{item.name}</Text>
            <View style={styles.imageContainer}>{imagesRow1}</View>
            <View style={styles.restaurantCard2}>
                <Text style={styles.header}>Houses</Text>
                <View>
                    <View style={styles.imageContainerRow2}>
                        <View style={styles.imageContainer}>{imagesRow2}</View>
                    </View>
                    <View style={styles.imageContainerRow3}>
                        <View style={styles.imageContainer}>{imagesRow3}</View>
                    </View>
                </View>
            </View>
        </View>
      );
    };
  
    return (
      <View style={styles.container}>
        {/* Hình giỏ hàng */}
        {/* <View style={styles.cartImageContainer}>
          <Image source={require('../assets/icons8.png')} style={styles.imagecart} />
        </View> */}
        {/* Hình 3 thanh ở góc trái */}
        {/* <View style={styles.cartImageContainer1}>
          <Image source={require('../assets/icons9.png')} style={styles.imagemenu} />
        </View> */}
        <Text style={styles.header}>Categories</Text>
        <FlatList
          data={restaurantData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
  },
  header: {
    fontSize: 20,
    // marginTop: 40,
  },
  restaurantCard: {
    // padding: 20,
    // marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    // alignItems: 'center',
  },
  restaurantCard2: {
    // padding: 20,
    marginTop: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    // alignItems: 'center',
  },
  imageContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  imageContainerRow3: {
    marginTop: 20,
    // width: '48%',
    // height: 200,
  },
  restaurantImage: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  restaurantImage2: {
    width: 195,
    height: 150,
    // borderRadius: 50,
  },
  restaurantImage3: {
    width: 195,
    height: 150,
    marginTop: 30,
    // borderRadius: 50,
  },
  imageName: {
    fontSize: 14,
    position: 'absolute',
    top: 140,
  },
  imageName2: {
    fontSize: 14,
    position: 'absolute',
    top: 160,
  },
  imageName3: {
    fontSize: 14,
    position: 'absolute',
    top: 190,
  },
  restaurantName: {
    fontSize: 18,
    marginTop: 10,
  },
  imageText: {
    fontSize: 12,
    textAlign: 'center',
    position: 'absolute',
    top: 180,
  },
  imageText3: {
    fontSize: 12,
    textAlign: 'center',
    position: 'absolute',
    top: 210,
  },
//   cartImageContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     zIndex: 1,
//   },
//   imagecart: {
//     width: 30,
//     height: 30,
//     marginLeft: 20,
//   },
//   cartImageContainer1: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     zIndex: 1,
//   },
//   imagemenu: {
//     width: 30,
//     height: 30,
//     marginRight: 20,
//   },
//   additionalImageText: {
//     marginTop: 60,
//     fontSize: 20,
//   },
}); 

export default MainScreenHome;