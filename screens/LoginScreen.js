import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Xử lý logic đăng nhập ở đây
    // Kiểm tra thông tin đăng nhập, nếu đúng, chuyển đến màn hình chính
    if (username === 'qqq' && password === 'qqq') {
        alert('Đăng nhập thành công');
        navigation.navigate('Main');
    }
    else{
        alert('Đăng nhập không thành công');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.img}>
              <Image source={require('../assets/logo.png')} style={styles.headerImage} />
      </View>
      <TextInput
        placeholder="Tài khoản"
        onChangeText={text => setUsername(text)}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder="Mật khẩu"
        onChangeText={text => setPassword(text)}
        value={password}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 250,
  },
  input: {
    width: 300,
    height: 40,
    borderBottomWidth: 1,
    margin: 10,
  },
  img: {
    marginBottom:150,
  },
});

export default LoginScreen;
