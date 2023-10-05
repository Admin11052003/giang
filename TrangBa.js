import React, {useState} from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/cho.jpg')} // Đặt URL hình ảnh của bạn ở đây
        style={styles.image}
      />
      <View style={styles.textContainer}>
      <Text style={styles.text}>Go for a walk and feed the dog</Text>
      </View>
      <View style={styles.Heart}>
      <Text><Icon name="heart" size={24} color="red" /></Text>
    </View>
    <View style={styles.textContainer2}>
      <Text style={styles.text2}>Leaving for a week, French Bulldog Wilfred needs help feeding twice a day and walk from 26 to 30 September. I bought food, it will be easy.</Text>
      </View>
      <View style={styles.textContainer2}>
      <Text style={styles.text3}>Reward 34$</Text>
      </View>
      <Image
        source={require('./assets/duoi.jpg')} // Đặt URL hình ảnh của bạn ở đây
        style={styles.image2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 380, // Điều chỉnh kích thước hình ảnh theo ý muốn
    height: 490,
    resizeMode: 'contain', // Có thể thay đổi chế độ xem hình ảnh tại đây
  },
  text: {
    fontSize: 26, // Kích thước văn bản
    fontWeight: 'bold', // Độ đậm
    color: 'black', // Màu văn bản
    textAlign: 'left',
  },
  textContainer: {
    width: 200, // Độ rộng của phần tử bao bọc
    height: 100, // Chiều cao của phần tử bao bọc
    backgroundColor: 'white', // Màu nền của phần tử bao bọc
    marginLeft: -130,
  },
  Heart: {
    marginLeft:220,
    marginTop: -80,
  },
  textContainer2: {
    marginTop: 30,
    width: 350,
    marginLeft:20,
  },
  text2: {
    fontSize: 20, // Kích thước văn bản
  },
  text3: {
    fontSize: 20, // Kích thước văn bản
    fontWeight: 'bold',
  },
  image2: {
    width: 430, // Điều chỉnh kích thước hình ảnh theo ý muốn
    height: 100,
    resizeMode: 'contain', // Có thể thay đổi chế độ xem hình ảnh tại đây
    marginTop:10,
  },
});


export default App;