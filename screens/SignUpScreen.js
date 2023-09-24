import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      // Save user data to AsyncStorage
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);

      Alert.alert('Sign Up Successful');
      navigation.navigate('Login'); // Navigate to Login after successful signup
    } catch (error) {
      Alert.alert('Error signing up', error.message);
    }
  };

  return (
    //<View style={{padding : 20}}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Sign Up"
        onPress={handleSignUp}
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
export default SignUpScreen;
