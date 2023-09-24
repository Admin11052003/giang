import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Retrieve user data from AsyncStorage
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

      // Check if the provided username and password match the stored data
      if (username === storedUsername && password === storedPassword) {
        Alert.alert('Login Successful');
      } else {
        Alert.alert('Login Failed', 'Incorrect username or password');
      }
    } catch (error) {
      Alert.alert('Error logging in', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        styles={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        styles={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding: 20,
  },
  input:{
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    //borderradius: 5,
  },
});
export default LoginScreen;