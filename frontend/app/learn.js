import { View, Text, StyleSheet} from "react-native";
import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Navbar from "../components/navbar";
const Learn = () => {
  return (
    <>
    <SafeAreaView className="bg-[#EB5851] h-[2000px] -mt-16 flex-col flex items-center">
      <Text className="font-[Koulen] text-[55px] tracking-[16px] text-center ml-4 pt-5 color-white">About Us!</Text>
      <Text className="font-[Koulen] text-lg text-center ml-4 -mt-4 color-[#DDDDDD]">And about the enviornment of course!</Text>
      <View className="flex flex-col gap-y-3">

      <View className="flex-col items-center p-5 pb-8 -mt-8 bg-white w-[93%] h-auto top-[50px] rounded-xl gap-y-3">
        <Text className='text-md font-RobotoMedium'>Bad news then good news..</Text>
        <Text className='text-xs font-RobotoRegular'>Every year, <Text className="color-red-500">7 trillion</Text> tiny pieces of plastic, roughly equal to <Text className='color-red-500'>1 million</Text> pieces each for every man, woman and child in the Bay Area, flow into San Francisco Bay (The Mercury News)</Text>
        <Text className='text-xs font-RobotoRegular'><Text className="underline">81 percent</Text> of what residents deposit into their <Text className="color-[#4875B7]">blue bins</Text> is recycled. That rate is among the highest in the nation (SF Public Press)</Text>
      </View>
      <View className="flex-col items-center p-5 pb-8 -mt-8 bg-white w-[93%] h-auto top-[50px] rounded-xl gap-y-3">
        <Text className='text-md font-RobotoMedium'>Bad news then good news..</Text>
        <Text className='text-xs font-RobotoRegular'>Every year, <Text className="color-red-500">7 trillion</Text> tiny pieces of plastic, roughly equal to <Text className='color-red-500'>1 million</Text> pieces each for every man, woman and child in the Bay Area, flow into San Francisco Bay (The Mercury News)</Text>
        <Text className='text-xs font-RobotoRegular'><Text className="underline">81 percent</Text> of what residents deposit into their <Text className="color-[#4875B7]">blue bins</Text> is recycled. That rate is among the highest in the nation (SF Public Press)</Text>
      </View>
            </View>

    </SafeAreaView>
    <Navbar />
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B1CFEB`",
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
})

export default Learn;
