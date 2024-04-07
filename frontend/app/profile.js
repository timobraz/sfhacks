import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import Navbar from '../components/navbar';
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Bar = ({ height, color }) => <View className={`w-5 rounded ${height} ${color}`} />;
const Profile = ({ navigation }) => {
  const compostHeight = 'h-10';
  const landfillHeight = 'h-6';
  const recyclingHeight = 'h-12';

  return (
    <>
    <View className="px-4 h-full bg-zinc-900">
      <Text className="font-[Koulen] text-white text-[55px] tracking-[16px] text-center pt-5 ml-3">PROFILE</Text>
      <View className="flex-row justify-center items-center">
        <Image
          source="https://picsum.photos/seed/696/3000/2000"
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
          className="h-24 w-24 rounded-full"
        />
        <View className="flex-col justify-center  flex-start ml-6">
          <Text className="font-[Koulen] text-white text-[40px] -mb-4">ANDROID</Text>
          <Text className="font-[Koulen] text-white text-[25px] ">Andrew A</Text>
        </View>
      </View>
      <View className="h-[200px] w-full bg-zinc-100 rounded-3xl mt-5 p-4">
        <Text className="font-[Koulen] text-[25px] tracking-[3px]">TOTAL STATS</Text>
        <View className="flex-row justify-around">
          <Text className="font-[Koulen] text-gray-500 text-[17px] text-center">COMPOST</Text>
          <Text className="font-[Koulen] text-gray-500 text-[17px] text-center">LANDFILL</Text>
          <Text className="font-[Koulen] text-gray-500 text-[17px] text-center">RECYLCING</Text>
        </View>
        <View className="flex-row justify-around -mt-2">
          <Text className="font-[Koulen] text-[17px] text-center">38</Text>
          <Text className="font-[Koulen] text-[17px] text-center">10</Text>
          <Text className="font-[Koulen] text-[17px] text-center">76</Text>
        </View>
        <View className="flex-row justify-around mt-4 items-end w-full">
          <Bar height={compostHeight} color="bg-green-400" />
          <Bar height={landfillHeight} color="bg-orange-800" />
          <Bar height={recyclingHeight} color="bg-sky-200" />
        </View>
      </View>
      <View className="h-[200px] w-full bg-zinc-100 rounded-2xl mt-1 p-4">
        <Text className="font-[Koulen] text-[25px] tracking-[5px]">WEEKLY</Text>
      </View>
    </View>
    <Navbar />
    </>
  );
};

export default Profile;
