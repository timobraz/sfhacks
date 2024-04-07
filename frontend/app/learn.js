import { View, Text, StyleSheet, Image} from "react-native";
import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Navbar from "../components/navbar";
const Learn = () => {
  const Pran = require('../assets/PRAN.jpeg');
  const Andrew = require('../assets/Andrew.jpeg');
  const Timo = require('../assets/timo.jpeg');
  const Michael = require('../assets/mi.jpeg');
  return (
    <>
    <SafeAreaView className="bg-[#EB5851] h-[2000px] -mt-16 flex-col flex ">
      <Text className="font-[Koulen] text-[55px] tracking-[16px] text-center ml-4 pt-5 color-white">About Us!</Text>
      <Text className="font-[Koulen] text-lg text-center ml-4 -mt-4 color-[#DDDDDD]">And about the enviornment of course!</Text>
      <View className="flex flex-col gap-y-3 -mt-10">

      <View className="flex-col items-center p-5 pb-6 -mt-8 bg-white w-[93%] h-auto top-[50px] rounded-xl gap-y-3 left-[3.5%]">
        <Text className='text-md font-RobotoMedium'>Bad news then good news..</Text>
        <Text className='text-xs font-RobotoRegular'>Every year, <Text className="color-red-500">7 trillion</Text> tiny pieces of plastic, roughly equal to <Text className='color-red-500'>1 million</Text> pieces each for every man, woman and child in the Bay Area, flow into San Francisco Bay (The Mercury News)</Text>
        <Text className='text-xs font-RobotoRegular'><Text className="underline">81 percent</Text> of what residents deposit into their <Text className="color-[#4875B7]">blue bins</Text> is recycled. That rate is among the highest in the nation (SF Public Press)</Text>
      </View>
      <View className="flex-col items-center p-5 pb-6 -mt-8 bg-white w-[93%] h-auto top-[50px] rounded-xl gap-y-3 left-[3.5%]">
        <Text className='text-md font-RobotoMedium'>Its the best time to start picking up trash!</Text>
        <Text className='text-xs font-RobotoRegular'>In light of the urgent need for environmental justice to secure our planet's future, now is an opportune moment to contribute by tackling even the smallest bit of human-induced pollution. Begin today by picking up litter and snapping a photo!
        </Text>
      </View>
      <View className="flex-col items-center p-5 pb-6 -mt-8 bg-white w-[93%] h-auto top-[50px] rounded-xl gap-y-3 left-[3.5%]">
        <Text className='text-md font-RobotoMedium'>Our Team!</Text>
        <Text className='text-xs font-RobotoRegular'>We are a group of students from ASU, UCI, and UCLA who are passionate about the environment and want to make a difference. We hope that our app will inspire others to take action and help keep our planet clean!
        </Text>
        <View className='flex-row justify-around rounded-'>
          <Image
              source={Pran}
              placeholder="asdf"
              contentFit="cover"
              transition={10}
              className="w-20 h-20 rounded-l-xl"
            ></Image>
          <Image
              source={Andrew}
              placeholder="asdf"
              contentFit="cover"
              transition={10}
              className="w-20 h-20"
            ></Image>
          <Image
              source={Timo}
              placeholder="asdf"
              contentFit="cover"
              transition={10}
              className="w-20 h-20"
            ></Image>
          <Image
              source={Michael}
              placeholder="asdf"
              contentFit="cover"
              transition={10}
              className="w-20 h-20 rounded-r-xl"
            ></Image>
        </View>
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
