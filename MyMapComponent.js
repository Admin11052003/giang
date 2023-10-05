import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import YourComponent from './YourComponent'; // Import YourComponent from the correct path
import MapView, { Marker } from 'react-native-maps'; // Import MapView and Marker

const MyMapComponent = () => {
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <TouchableOpacity onPress={() => console.log('Back button pressed')}>
          <Text>{'<'}</Text>
        </TouchableOpacity>
        <Text>Next to you</Text>
      </View>
    </View>
  );
};

export default MyMapComponent;
