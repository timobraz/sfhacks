import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Navbar from '../components/navbar';
import React from 'react';
import { Pressable } from 'react-native';
import { Image } from 'react-native';
import { router } from 'expo-router';

const Bar = ({ height, color }) => <View className={`w-5 rounded ${height} ${color}`} />;

const Leaderboard = () => {
  const compostHeight = 'h-10';
  const landfillHeight = 'h-6';
  const recyclingHeight = 'h-12';
  const backImg = require('../assets/back-arrow-white.png');

  return (
    <>
      <SafeAreaView className="h-[2000px] flex flex-col pb-28 bg-[#202020] -mt-16">
        <View>
          <Text className="mt-3 text-white text-[63px] tracking-[10px] text-center font-[Koulen] ml-2">
            Leaderboard
          </Text>
          <Text className="text-gray-400 text-xl text-center font-[Koulen] -mt-6">in trash points</Text>
        </View>
        {/* <View className="w-full px-7 py-5">
            <View className=" bg-red-500 h-96">
              <View className="flex justify-center flex-row gap-x-2">
                <MaterialCommunityIcons name="crown" size={24} color="black" />
                <Text className="font-[Koulen] text-4xl pt-0.5">Temu</Text>
              </View>
            </View>
          </View> */}

        <View className="flex-col justify-center -mt-8">
          <View className="flex-row gap-x-4 items-center justify-center">
            <MaterialCommunityIcons name="crown" size={45} color="gold" />
            <Text className="text-6xl font-[Koulen] text-white leading-[150px]">I luv SF</Text>
            <Text className="text-md font-semibold text-green-500 font-[Koulen]">29840 pts</Text>
          </View>
          <View className="ml-8 mr-8 -mt-8">
            {[
              { rank: '2.', name: 'ECOWARRIOR', points: '22400 pts' },
              { rank: '3.', name: 'TEMU', points: '19700 pts' },
              { rank: '4.', name: 'GREEEN', points: '15300 pts' },
              { rank: '5.', name: 'litterlooter', points: '14970 pts' },
            ].map((item, index) => (
              <View key={index} className="flex-row items-center justify-between px-4 my-2">
                <Text className="text-xl font-bold uppercase text-white font-[Koulen]">{item.rank}</Text>
                <Text className="flex-1 text-2xl font-bold uppercase text-white text-center font-[Koulen]">
                  {item.name}
                </Text>
                <Text className="text-md font-semibold text-green-500 font-[Koulen]">{item.points}</Text>
              </View>
            ))}
          </View>
        </View>
        <View className="h-[190px] w-full bg-zinc-100 rounded-3xl mt-5 p-3">
          <Text className="font-[Koulen] text-center text-[25px] tracking-[2px]">Winner Stats</Text>
          <View className="flex-row justify-around">
            <Text className="font-[Koulen] text-gray-500 text-[17px] text-center">COMPOST</Text>
            <Text className="font-[Koulen] text-gray-500 text-[17px] text-center">LANDFILL</Text>
            <Text className="font-[Koulen] text-gray-500 text-[17px] text-center">RECYCLING</Text>
          </View>
          <View className="flex-row justify-around -mt-2">
            <Text className="font-[Koulen] text-[17px] text-center">238</Text>
            <Text className="font-[Koulen] text-[17px] text-center">110</Text>
            <Text className="font-[Koulen] text-[17px] text-center">376</Text>
          </View>
          <View className="flex-row justify-around mt-4 items-end w-full">
            <Bar height={compostHeight} color="bg-green-400" />
            <Bar height={landfillHeight} color="bg-orange-800" />
            <Bar height={recyclingHeight} color="bg-sky-200" />
          </View>
        </View>

        <View className="h-auto w-full bg-zinc-100 rounded-3xl mt-2 p-4">
          <View className="ml-2">
            <Text className="font-[Koulen]  text-left text-[30px] tracking-[2px]">You are...</Text>
            <Text className="flex text-xl mt-[22px] font-[Koulen]">
              <Text className="text-green-500 font-bold">2700</Text> points away from taking number{' '}
              <Text className="text-green-500 font-bold">2</Text> on the leaderboard
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <Navbar />
    </>
  );
};

export default Leaderboard;
