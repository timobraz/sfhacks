import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import Navbar from "../components/navbar";

const Feed = () => {
  const [fontsLoaded] = useFonts({
    Koulen: require("../assets/fonts/Koulen.ttf"),
  });
  {
    return !fontsLoaded ? null : (
      <View className="h-full flex flex-1">
        <View className="font-[Koulen] h-screen   ">
          <Text className="font-[Koulen] text-[45px] tracking-[20px] w-full text-center ml-2 pt-5">
            Navigation
          </Text>
          {/* <Navbar className="absolute bg-blue-200 w-full"></Navbar> */}
          <View className="-space-y-44 flex h-screen">
            <TouchableOpacity
              className="bg-[#D7BCED] w-full h-44 rounded-t-[48px] p-8 -mb-8"
              onPress={() => router.push("/upload")}
            >
              <Text className="text-5xl font-extrabold ">Upload</Text>
              <Text className="text-2xl tracking-[-1px]">
                Take a pic of your trash
              </Text>
            </TouchableOpacity>
            <View className="bg-[#202020] w-full h-44  rounded-t-[48px] p-8 -my-4">
              <Text className="text-5xl font-extrabold text-orange-100">
                Leaderboard
              </Text>
              <Text className="text-2xl tracking-[-1px] text-orange-100">
                See the top Ten earth lovers
              </Text>
            </View>
            <View className="bg-[#CBD87D] w-full h-44  rounded-t-[48px] p-8 -my-4">
              <Text className="text-5xl font-extrabold ">Heat Map</Text>
              <Text className="text-2xl tracking-[-1px]">
                Popular trash pickup zones
              </Text>
            </View>
            <View className="bg-[#EB5851] w-full  rounded-t-[48px] p-8 -my-4 h-full">
              <Text className="text-5xl font-extrabold text-orange-100 ">
                About
              </Text>
              <Text className="text-2xl tracking-[-1px] text-orange-100">
                Read our story
              </Text>
            </View>
          </View>
        </View>
        <Navbar />
      </View>
    );
  }
};

export default Feed;
