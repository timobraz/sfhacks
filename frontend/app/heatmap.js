import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const mockData = [
  {
    latlng: { latitude: 37.7749, longitude: -122.4194 },
    title: 'Trash Pickup Site 1',
    description: 'Collected 5 bags of trash here.',
  },
  {
    latlng: { latitude: 37.7837, longitude: -122.409 },
    title: 'Trash Pickup Site 2',
    description: 'Collected 3 bags of trash here.',
  },
  {
    latlng: { latitude: 37.768, longitude: -122.4376 },
    title: 'Trash Pickup Site 3',
    description: 'Collected 4 bags of trash here.',
  },
  // Add more mock data points as needed
];

const BlurredRedDot = () => {
  return (
    <View
      className="h-3 w-3 bg-red-500 rounded-full"
      style={{
        shadowColor: '#FF0000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.99,
        shadowRadius: 20,
        elevation: 50,
        opacity: 0.9,
      }}
    />
  );
};
const Heatmap = ({ navigation }) => {
  return (
    <View className="px-4 bg-[#CBD87D]">
      <Text className="font-[Koulen] text-[55px] tracking-[16px] text-center pt-5 ml-3">Heatmap</Text>
      <Text className="font-[Koulen] text-[25px] text-center -mt-4">Fill The Map!</Text>
      <View>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.739871,
            longitude: -122.443093,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
          }}
          showsUserLocation={true}
        >
          {mockData.map((marker, index) => (
            <Marker key={index} coordinate={marker.latlng} anchor={{ x: 0.5, y: 0.5 }}>
              <BlurredRedDot />
            </Marker>
          ))}
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '85%',
    borderRadius: 10,
  },
});
export default Heatmap;
