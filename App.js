//npm install async-storage
//npm install @react-native-async-storage/async-storage
//npm install @react-navigation/native
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-masked-view/masked-view --save
//npm install @react-navigation/stack
//npx pod-install

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import trangsanpham from './screens/trangsanpham';
import trangdangnhap from './screens/trangdangnhap';
import dangky from './screens/dangky';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={trangsanpham} />
        <Stack.Screen name="Login" component={trangdangnhap} />
        <Stack.Screen name="SignUp" component={dangky} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
