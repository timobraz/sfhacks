import { StyleSheet, View, Text } from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const BlurredRedDot = () => {
  return (
    <View
      className="h-3 w-3 bg-red-500 rounded-full"
      style={{
        shadowColor: "#FF0000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.99,
        shadowRadius: 20,
        elevation: 50,
      }}
    />
  );
};

const Heatmap = ({ navigation }) => {
  return (
    <View className="px-4">
      <Text className="font-[Koulen] text-[55px] tracking-[16px] text-center pt-5 ml-3">
        Heatmap
      </Text>
      <Text className="font-[Koulen] text-[25px] text-center -mt-4">
        Fill The Map!
      </Text>
      <View className="flex flex-row justify-center mt-5">
        <BlurredRedDot />
        <BlurredRedDot />
        <BlurredRedDot />
      </View>
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
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "85%",
    borderRadius: 10,
  },
});

export default Heatmap;
