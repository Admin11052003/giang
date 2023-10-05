import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'; // Import expo-location for location services

const YourComponent = () => {
  const [location, setLocation] = useState(null);

  // Function to get the current location
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []); // Get location when the component mounts

  const initialRegion = {
    latitude: location ? location.coords.latitude : 37.78825,
    longitude: location ? location.coords.longitude : -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const markerCoordinate = {
    latitude: location ? location.coords.latitude : 37.78825,
    longitude: location ? location.coords.longitude : -122.4324,
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={markerCoordinate}
          title="Your Location"
          description="You are here"
        >
          <Image source={require('../assets/hinh10.jpg')} style={{ width: 40, height: 40 }} />
        </Marker>
      </MapView>
    </View>
  );
};

export default YourComponent;
