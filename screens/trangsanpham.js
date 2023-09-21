import React from 'react';
import { View, Text, Button } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={{marginBottom: 50}}>
      {/* <Text>Landing Screen</Text> */}
      <Button 
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default LandingScreen;
