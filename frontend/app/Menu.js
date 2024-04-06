import { View, Text,  TouchableWithoutFeedback } from "react-native";
import {StyleSheet, SafeAreaView} from 'react-native';
import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


const Menu = ({ navigation }) => {
  const insets = useSafeAreaInsets();


  return (
    <SafeAreaView className='flex-1 bg-inherit' style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
        <Text className="font-[Koulen] text-[55px] tracking-[20px] text-center ml-3">Navigation</Text>
        <View className="-space-y-44 flex h-screen ">
          <TouchableWithoutFeedback  onPress={() => navigation.navigate('Upload')}>
          <View className="bg-[#D7BCED] w-full h-60  rounded-t-[48px] p-8 -mb-16">
            <Text className="text-5xl font-extrabold font-[Koulen] leading-loose tracking-[-2px] pt-[17px] mt-2">UPLOAD</Text>
            <Text className="text-xl tracking-[-1px] -mt-2 font-[Koulen]">Take a pic of your trash</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback  onPress={() => navigation.navigate('Leaderboard')}>
          <View className="bg-[#202020] w-full h-60 rounded-t-[48px] p-8 -my-4 -mb-16">
            <Text className="text-5xl font-extrabold text-white tracking-[-2px] font-[Koulen] pt-[17px] mt-2">LEADERBOARD</Text>
            <Text className="text-xl tracking-[-1px] text-white font-[Koulen] -mt-2">See the top 10 earth lovers</Text></View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback  onPress={() => navigation.navigate('Heatmap')}>
          <View className="bg-[#CBD87D] w-full h-60 rounded-t-[48px] p-8 -my-4 -mb-14 mt-2">
            <Text className="text-5xl font-extrabold tracking-[-2px] font-[Koulen] pt-[17px]">HEAT MAP</Text>
            <Text className="text-xl tracking-[-1px] font-[Koulen] -mt-2">Popular trash pickup zones</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback  onPress={() => navigation.navigate('About')}>
          <View className="bg-[#EB5851] w-full rounded-t-[48px] p-8 -my-4 h-full -mb-12">
            <Text className="text-5xl font-extrabold text-white tracking-[-2px] font-[Koulen] pt-[17px] mt-2">ABOUT</Text>
            <Text className="text-xl tracking-[-1px] text-white font-[Koulen] -mt-2">Read our story</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
    </SafeAreaView>
  );
};

export default Menu;
