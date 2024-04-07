import { View, Text, SafeAreaView, Modal, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Image } from 'expo-image';
import axios from 'axios';
import Navbar from '../components/navbar';
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Bar = ({ height, color }) => <View className={`w-5 rounded ${height} ${color}`} />;
const Profile = ({ navigation }) => {
  const compostHeight = 'h-6';
  const landfillHeight = 'h-12';
  const recyclingHeight = 'h-10';
  const [user, setUser] = useState({ compost: 0, landfill: 0, recycle: 0 });

  useEffect(() => {
    async function getUser() {
      const res = await axios.get('https://concise-hookworm-utterly.ngrok-free.app/user');
      console.log('prof', res?.data);

      setUser(res.data);
    }
    getUser();
  }, []);

  return (
    <>
      <View className="px-4 h-[1000px] bg-[#202020] -mt-14">
        <Text className="font-[Koulen] text-white text-[55px] tracking-[16px] text-center pt-[50px] ml-3">PROFILE</Text>
        <View className="flex-row justify-center items-center">
          <Image
            source="https://picsum.photos/seed/696/3000/2000"
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
            className="h-24 w-24 rounded-full"
          />
          <View className="flex-col justify-center  flex-start ml-6">
            <Text className="font-[Koulen] text-white text-[40px] -mb-4">"{user.username}"</Text>
            <Text className="font-[Koulen] text-white text-[25px] ">{user.name}</Text>
          </View>
        </View>
        <View className="h-[200px] w-full bg-zinc-100 rounded-3xl mt-5 p-4">
          <Text className="font-[Koulen] text-[25px] tracking-[3px]">
            TOTAL STATS -{' '}
            <Text className="text-green-500">{user.compost * 100 + user.landfill * 100 + user.recycle * 100} pts</Text>
          </Text>
          <View className="flex-row justify-around">
            <Text className="font-[Koulen] text-gray-500 text-[17px] text-center">COMPOST</Text>
            <Text className="font-[Koulen] text-gray-500 text-[17px] text-center">LANDFILL</Text>
            <Text className="font-[Koulen] text-gray-500 text-[17px] text-center">RECYCLING</Text>
          </View>
          <View className="flex-row justify-around -mt-2">
            <Text className="font-[Koulen] text-[17px] text-center">{user.compost}</Text>
            <Text className="font-[Koulen] text-[17px] text-center">{user.landfill}</Text>
            <Text className="font-[Koulen] text-[17px] text-center">{user.recycle}</Text>
          </View>
          <View className="flex-row justify-around mt-4 items-end w-full">
            <Bar height={compostHeight} color="bg-green-400" />
            <Bar height={landfillHeight} color="bg-orange-800" />
            <Bar height={recyclingHeight} color="bg-sky-200" />
          </View>
        </View>
        <View className="h-auto w-full bg-zinc-100 rounded-2xl mt-1 p-4">
          <Text className="font-[Koulen] text-[25px] tracking-[5px]">GOALS:</Text>
          <Text className="font-[Koulen] text-[15px] color-[#858484]">
            Pick up <Text className="text-green-500">23</Text> more{' '}
            <Text className="text-green-500">compost </Text>
            by the end of the week
          </Text>
          <Text className="font-[Koulen] text-[15px] color-[#858484]">
            Pick up <Text className="text-orange-800">15</Text> more{' '}
            <Text className="text-orange-800">landfill</Text> by the end of the week
          </Text>
          <Text className="font-[Koulen] text-[15px] color-[#858484]">
            Pick up <Text className="text-sky-400">53</Text> more{' '}
            <Text className="text-sky-400">recycling</Text> by the end of the week
          </Text>
        </View>
      </View>
      <Navbar />
    </>
  );
};

export default Profile;
