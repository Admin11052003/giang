import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {/* Other UI components can be added here */}
        <TouchableOpacity onPress={() => handleGoBack()}>
          <Text style={{ fontSize: 18 }}>Trở về</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 18 }}>Next to You</Text>
      </View>
    </View>
  );
};

const handleGoBack = () => {
  // Handle navigation to go back to the previous screen
  // You can use navigation.goBack() or any navigation mechanism you're using
};

export default HomeScreen;
