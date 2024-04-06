import { View, Text } from "react-native";
import Navbar from "../components/navbar";
import React from "react";

const Leaderboard = () => {
  return (
    <View className="Flex-1">
      <View className="h-full w-full flex flex-col bg-slate-900">
        <View>
          <Text className="mt-7 text-white text-[45px] tracking-[10px] text-center font-[Koulen]">
            Leaderboard
          </Text>
        </View>
      </View>
      <Navbar />
    </View>
  );
};

export default Leaderboard;
