import { View, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Navbar from '../components/navbar';
import React from 'react';

const Bar = ({ height, color }) => <View className={`w-5 rounded ${height} ${color}`} />;

const Leaderboard = () => {
  const compostHeight = 'h-10';
  const landfillHeight = 'h-6';
  const recyclingHeight = 'h-12';
  return (
    <>
      <ScrollView className="flex-1">
        <View className="h-full w-full flex flex-col bg-slate-900 pb-28">
          <View>
            <Text className="mt-7 text-white text-[45px] tracking-[10px] text-center font-[Koulen]">Leaderboard</Text>
            <Text className="text-gray-400 text-2xl text-center font-[Koulen]">in trash points</Text>
          </View>
          {/* <View className="w-full px-7 py-5">
            <View className=" bg-red-500 h-96">
              <View className="flex justify-center flex-row gap-x-2">
                <MaterialCommunityIcons name="crown" size={24} color="black" />
                <Text className="font-[Koulen] text-4xl pt-0.5">Temu</Text>
              </View>
            </View>
          </View> */}

          <View className="flex-col justify-center">
            <View className="flex-row gap-x-4 items-center justify-center">
              <MaterialCommunityIcons name="crown" size={45} color="gold" />
              <Text className="text-7xl font-[Koulen] text-white leading-[150px]">TEMU</Text>
              <Text className="text-md font-semibold text-green-500">224 points</Text>
            </View>
            <View className="ml-8 mr-8 -mt-8">
              {[
                { rank: '2.', name: 'ANDY', points: '224 points' },
                { rank: '3.', name: 'PRAN', points: '224 points' },
                { rank: '4.', name: 'MI', points: '224 points' },
                { rank: '5.', name: 'ANDROID', points: '224 points' },
              ].map((item, index) => (
                <View key={index} className="flex-row items-center justify-between px-4 my-2">
                  <Text className="text-xl font-bold uppercase text-white">{item.rank}</Text>
                  <Text className="flex-1 text-xl font-bold uppercase text-white text-center">{item.name}</Text>
                  <Text className="text-md font-semibold text-green-500">{item.points}</Text>
                </View>
              ))}
            </View>
          </View>
          <View className="h-[200px] w-full bg-zinc-100 rounded-3xl mt-5 p-4">
            <Text className="font-[Koulen] text-center text-[25px] tracking-[2px]">Winner Stats</Text>
            <View className="flex-row justify-around">
              <Text className="font-[Koulen] text-[17px] text-center">COMPOST</Text>
              <Text className="font-[Koulen] text-[17px] text-center">LANDFILL</Text>
              <Text className="font-[Koulen] text-[17px] text-center">RECYLCING</Text>
            </View>
            <View className="flex-row justify-around -mt-2">
              <Text className="font-[Koulen] text-[17px] text-center">38</Text>
              <Text className="font-[Koulen] text-[17px] text-center">10</Text>
              <Text className="font-[Koulen] text-[17px] text-center">76</Text>
            </View>
            <View className="flex-row justify-around mt-4 items-end w-full">
              <Bar height={compostHeight} color="bg-green-500" />
              <Bar height={landfillHeight} color="bg-red-500" />
              <Bar height={recyclingHeight} color="bg-blue-500" />
            </View>
          </View>

          <View className="h-[200px] w-full bg-zinc-100 rounded-3xl mt-2 p-4">
            <View className="ml-2">
              <Text className="font-[Koulen]  text-left text-[30px] tracking-[2px]">You are...</Text>
              <Text className="flex text-2xl mt-4 font-[Koulen]">
                <Text className="text-green-500 font-bold">69</Text> points away from taking number{' '}
                <Text className="text-green-500 font-bold">4</Text> on the leaderboard
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Navbar />
    </>
  );
};

export default Leaderboard;
