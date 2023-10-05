import React from 'react';
import { View, Image, Text } from 'react-native'; // Import Image
import { SearchBar, Icon } from 'react-native-elements';

const App = () => {
  return (
    <View>
        <View>
        <Image source={require('../assets/Icon_Filter.png')} style={{ width: '20%', height: 20, marginLeft: 350, position: 'absolute', marginTop: 50}} />
      </View>
      <SearchBar
        placeholder="Search"
        lightTheme
        round
        containerStyle={{ backgroundColor: 'white', borderBottomColor: 'transparent', borderTopColor: 'transparent', width: '80%' }}
        inputContainerStyle={{ backgroundColor: '#EDEDED' }}
        searchIcon={<Icon name="search" color="black" />}
        // Thêm icon bên phải của thanh tìm kiếm
    //     rightIcon={
    //       <Image source={require('../assets/Icon_Filter.png')} style={{ width: '20%', height: 20 }} />
    //     }
    //     rightIconContainerStyle={{ paddingRight: 10 }}
      />
      
      {/* Ảnh được chèn ở dưới thanh tìm kiếm */}
      <View>
        <Text style={{fontSize: 22, marginTop: 30, marginLeft: 30, fontWeight: 'bold'}}>Next To You</Text>  
        <Text style={{fontSize: 16, marginTop: 30, marginLeft: 320, position: 'absolute', color: 'gray'}}>On the map</Text> 
        <Image style={{marginTop: 35, marginLeft: 410, position: 'absolute'}}source={require('../assets/iconMore.png')} />  
      </View>
      <View style={styles.container}>
        <Image source={require('../assets/imgDogCard.png')} style={[styles.image, styles.firstImage]} />
        <Text style={{fontSize: 18, position: 'absolute', marginTop: 240, marginLeft: 20}}>Go for a walk</Text> 
        <Text style={{fontSize: 18, position: 'absolute', marginTop: 265, marginLeft: 20}}>and feed the dog</Text> 
        <Image source={require('../assets/imgDogCard.png')} style={[styles.image, styles.lastImage]} />
        {/* <Image source={require('../assets/imgDogCard.png')} style={styles.image} /> */}
        <Image style={{position: 'absolute', marginTop: 243, marginLeft: 220}} source={require('../assets/Icon_Chat.png')} />
        <Text style={{fontSize: 14, position: 'absolute', marginTop: 20, marginLeft: 30, color: 'white'}}>Until 26.09</Text>
        <Image style={{position: 'absolute', marginTop: 20, marginLeft: 220}} source={require('../assets/Icon_Like.png')} /> 
        <Image style={{position: 'absolute', marginTop: 80, marginLeft: 20}} source={require('../assets/Ava+Name+Verify.png')} /> 
      </View>

      <View>
        <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 90, marginLeft: 30}}>Categories</Text>    
        <Text style={{fontSize: 16, marginTop: 90, marginLeft: 350, position: 'absolute', color: 'gray'}}>See all</Text> 
        <Image style={{marginTop: 95, marginLeft: 410, position: 'absolute'}}source={require('../assets/iconMore.png')} />
      </View>
      <View>
        <Image source={require('../assets/Rectangle 1041.png')} />
        <Image style={{marginTop: -80, marginLeft: 50}}source={require('../assets/Icon_Moving.png')} />
        <Text style={{fontSize: 14, position: 'absolute', marginTop: 35, marginLeft: 110, fontWeight: 'bold'}}>Moving and things</Text>
        <Text style={{fontSize: 14, position: 'absolute', marginTop: 55, marginLeft: 110, color: 'gray'}}>24 tasks</Text>
        <Image style={{marginTop: -80, marginLeft: 50, position: 'absolute', marginTop: 40, marginLeft: 370,}}source={require('../assets/iconMore.png')} />

        <Image style={{marginTop: 40, marginLeft: 50}}source={require('../assets/Icon_House.png')} />
        <Text style={{fontSize: 14, position: 'absolute', marginTop: 125, marginLeft: 110, fontWeight: 'bold'}}>Help around the house</Text>
        <Text style={{fontSize: 14, position: 'absolute', marginTop: 145, marginLeft: 110, color: 'gray'}}>5 tasks</Text>
        <Image style={{marginTop: -80, marginLeft: 50, position: 'absolute', marginTop: 130, marginLeft: 370,}}source={require('../assets/iconMore.png')} />
      </View>
      
      <View>
        <Image style={{marginTop: 100, width: '100%', height: 70}}source={require('../assets/mmm.png')} />
      </View>
    </View>
  );
};

const styles = {
    container: {
      flexDirection: 'row', // Xếp ảnh theo hàng ngang
      justifyContent: 'space-between', // Canh ảnh đều khoảng cách
      paddingHorizontal: 20, // Khoảng cách lề trái và phải
      marginTop: 20, // Khoảng cách từ top
      marginLeft: 20,
    },
    image: {
      width: 232, // Kích thước ảnh theo chiều ngang
      height: 228, // Kích thước ảnh theo chiều cao
      resizeMode: 'cover', // Đảm bảo ảnh không bị méo
    },
    firstImage: {
        marginRight: 20, // Khoảng cách giữa ảnh thứ nhất và thứ hai
    },
    lastImage: {
        marginLeft: 20, // Khoảng cách giữa ảnh thứ ba và thứ hai
    },
    // container2: {
    //     flexDirection: 'row', // Xếp ảnh theo hàng ngang
    //     justifyContent: 'space-between', // Canh ảnh đều khoảng cách
    //     paddingHorizontal: 20, // Khoảng cách lề trái và phải
    //     marginTop: 300, // Khoảng cách từ top
    //     marginLeft: 50,
    //   },
  };

export default App;
