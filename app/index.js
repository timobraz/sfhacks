import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { router } from "expo-router";
import { useFonts } from "expo-font";

const Feed = () => {
  const [fontsLoaded] = useFonts({
    Koulen: require("../assets/fonts/Koulen.ttf"),
  });
  {
    return !fontsLoaded ? null : (
      <View className=" bg-yellow-100 h-full flex flex-1">
        <View className="font-[Koulen] h-screen   ">
          <Text className="font-[Koulen] text-[50px] tracking-[20px]  text-center pt-5">Navigation</Text>
          <View className="-space-y-44 flex h-screen ">
            <TouchableOpacity className="bg-pink-300 w-full h-44  rounded-t-[48px] p-8 -mb-10" onPress={() => router.push("/feed")}>
              <Text className="text-5xl font-extrabold ">Upload</Text>
              <Text className="text-2xl tracking-[-1px]">Take a pic of your trash</Text>
            </TouchableOpacity>
            <View className="bg-slate-800 w-full h-44  rounded-t-[48px] p-8 -mb-10">
              <Text className="text-5xl font-extrabold text-orange-100">Leaderboard</Text>
              <Text className="text-2xl tracking-[-1px] text-orange-100">Take a pic of your trash</Text>
            </View>
            <View className="bg-yellow-300 w-full h-44  rounded-t-[48px] p-8 -mb-10">
              <Text className="text-5xl font-extrabold ">Heat Map</Text>
              <Text className="text-2xl tracking-[-1px]">Take a pic of your trash</Text>
            </View>
            <View className="bg-orange-700 w-full  rounded-t-[48px] p-8 -my-4 h-full">
              <Text className="text-5xl font-extrabold text-orange-100 ">About</Text>
              <Text className="text-2xl tracking-[-1px] text-orange-100">Take a pic of your trash</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

export default Feed;
