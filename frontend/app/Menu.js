import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

const Menu = ({ navigation }) => {
  return (
    <View>
      <View className="font-[Koulen] ">
        <Text className="font-[Koulen] text-[55px] tracking-[20px] text-center pt-5 ml-3">Navigation</Text>
        <View className="-space-y-44 flex h-screen ">
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Upload')}>
            <View className="bg-pink-300 w-full h-60  rounded-t-[48px] p-8 -mb-20">
              <Text className="text-4xl font-extrabold ">UPLOAD</Text>
              <Text className="text-2xl tracking-[-1px]">Take a pic of your trash</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Leaderboard')}>
            <View className="bg-slate-800 w-full h-60 rounded-t-[48px] p-8 -my-4 -mb-12">
              <Text className="text-4xl font-extrabold text-orange-100">LEADERBOARD</Text>
              <Text className="text-2xl tracking-[-1px] text-orange-100">See the top 10 earth lovers</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Heatmap')}>
            <View className="bg-yellow-300 w-full h-60 rounded-t-[48px] p-8 -my-4 -mb-14">
              <Text className="text-4xl font-extrabold ">HEAT MAP</Text>
              <Text className="text-2xl tracking-[-1px]">Popular trash pickup zones</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('About')}>
            <View className="bg-orange-700 w-full rounded-t-[48px] p-8 -my-4 h-full -mb-8">
              <Text className="text-4xl font-extrabold text-orange-100 ">ABOUT</Text>
              <Text className="text-2xl tracking-[-1px] text-orange-100">Read our story</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default Menu;
