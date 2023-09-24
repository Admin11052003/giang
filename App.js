//npm install async-storage
//npm install @react-native-async-storage/async-storage
//npm install @react-navigation/native
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-masked-view/masked-view --save
//npm install @react-navigation/stack
//npx pod-install

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // import trangsanpham from './screens/LandingScreen';
// // import trangdangnhap from './screens/LoginScreen';
// // import dangky from './screens/SignUpScreen';

// // import LandingScreen from './screens/LandingScreen';
// // import LoginScreen from './screens/LoginScreen';
// // import SignUpScreen from './screens/SignUpScreen';
// import HomeScreen from './screens/HomeScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     // <NavigationContainer>
//     //   <Stack.Navigator initialRouteName="Landing">
//     //     {/* <Stack.Screen name="Landing" component={LandingScreen} />
//     //     <Stack.Screen name="Login" component={LoginScreen} />
//     //     <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
//     //     <Stack.Screen name="Home" component={HomeScreen} />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
// };

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Menu" component={MenuScreen} />
        {/* Add more screens like RestaurantDetail as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;