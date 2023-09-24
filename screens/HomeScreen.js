import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const restaurantData = [
  // { id: 1, name: 'Restaurant 1', image: require('../assets/hinha.png') },
  // { id: 2, name: 'Restaurant 2', image: require('../assets/hinhb.png') },
  // { id: 3, name: 'Restaurant 3', image: require('../assets/hinhc.png') },
  // Add more restaurant data as needed
  {
    id: 1,
    // name: 'Restaurant 1',
    images: [
    //   require('../assets/hinha.png'),
    //   require('../assets/hinhb.png'),
    //   require('../assets/hinhc.png'),
      // require('../assets/hinhf.png'),
      { source: require('../assets/hinha.png'), name: 'Breakfast' },
      { source: require('../assets/hinhb.png'), name: 'Ramen' },
      { source: require('../assets/hinhc.png'), name: 'Sandwiches' },
      { source: require('../assets/hinhf.png'), name: 'Mediterannean' },
    ],
    additionalImage: require('../assets/hinhd.png'),
    additionalImageText: 'Best Deals',
    // addImage: { source: require('../assets/hinhe.png'), name: 'Forbidden Salad' },
    addImage: require('../assets/hinhe.png'),
    addImageText: 'Most Popular',
    // addImageText2: 'Forbidden Salad',
    
  },
];

const HomeScreen = () => {
  const renderItem = ({ item }) => {
    const images = item.images.map((image, index) => (
      // <Image key={index} source={image} style={styles.restaurantImage} />
      <View key={index} style={styles.imageContainer}>
        <Image source={image.source} style={styles.restaurantImage} />
        <Text style={styles.imageName}>{image.name}</Text>
      </View>
    ));

    return (
      <View style={styles.restaurantCard}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <View style={styles.imageContainer}>{images}</View>
        <View>
          <Text style={styles.additionalImageText}>{item.additionalImageText}</Text>
          <Image
          source={item.additionalImage}
          style={styles.additionalImage}
          />
          <Text style={{marginLeft: 180, marginTop: 200, position: 'absolute', fontSize: 20, color: 'white'}}>Ramen</Text>
        </View>
        <View>
          <Text style={styles.addImageText}>{item.addImageText}</Text>
          <Image
          source={item.addImage}
          style={styles.addImage}
          />
        <Text style={{marginLeft: 10, marginTop: 10}}>Forbidden Salad</Text>
        <Text style={{marginLeft: 340, marginTop: 280, position: 'absolute'}}>$11.00</Text>
        </View>
      </View>
    );
  };

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
      <Text style={styles.header}>Popular Categories</Text>
      <FlatList
        data={restaurantData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* <Text style={styles.best}>Popular Categories</Text> */}
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
    marginTop: 40,
  },
  restaurantCard: {
    // padding: 20,
    // marginTop: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    // alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  imageName: {
    marginTop: 90,
    fontSize: 14,
    position: 'absolute',
    left: 10,
  },
  restaurantName: {
    fontSize: 18,
    marginTop: 10,
  },
  additionalImage: {
    width: 400,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  additionalImageText: {
    marginTop: 60,
    fontSize: 20,
  },
  addImage: {
    width: 380,
    height: 180,
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 10,
  },
  addImageText: {
    marginTop: 50,
    fontSize: 20,
  },
  addImageText2: {
    // marginTop: 50,
    fontSize: 20,
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

// const HomeScreen = () => {
//   const renderItem = ({ item }) => (
//     <View style={styles.restaurantCard}>
//       <Image source={item.image} style={styles.restaurantImage} />
//       <Text style={styles.restaurantName}>{item.name}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Choose a Restaurant</Text>
//       <FlatList
//         data={restaurantData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   restaurantCard: {
//     padding: 20,
//     margin: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   restaurantImage: {
//     width: 100,
//     height: 100,
//     marginBottom: 10,
//     borderRadius: 50,
//   },
//   restaurantName: {
//     fontSize: 18,
//   },
// });

export default HomeScreen;