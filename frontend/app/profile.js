import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
import Navbar from "../components/navbar";
const Bar = ({ height, color }) => (
  <View className={`w-5 rounded ${height} ${color}`} />
);
const Profile = ({ navigation }) => {
  const compostHeight = "h-10";
  const landfillHeight = "h-6";
  const recyclingHeight = "h-12";

  return (
    <>
    <View className="px-4">
      <Text className="font-[Koulen] text-[55px] tracking-[16px] text-center pt-5 ml-3">
        PROFILE
      </Text>
      <View className="flex-row justify-center">
        <Image
          source="https://picsum.photos/seed/696/3000/2000"
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
          className="h-40 w-40 rounded-full"
        />
        <View className="flex-col justify-center  flex-start ml-3">
          <Text className="font-[Koulen] text-[40px] -mb-4">ANDROID</Text>
          <Text className="font-[Koulen] text-[25px] ">Andrew A</Text>
        </View>
      </View>
      <View className="h-[200px] w-full bg-slate-400 rounded-2xl mt-5 p-4">
        <Text className="font-[Koulen] text-[25px] tracking-[5px]">
          MY STATS
        </Text>
        <View className="flex-row justify-around">
          <Text className="font-[Koulen] text-[17px] text-center">COMPOST</Text>
          <Text className="font-[Koulen] text-[17px] text-center">
            LANDFILL
          </Text>
          <Text className="font-[Koulen] text-[17px] text-center">
            RECYLCING
          </Text>
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
      <View className="h-[200px] w-full bg-slate-400 rounded-2xl mt-1 p-4">
        <Text className="font-[Koulen] text-[25px] tracking-[5px]">WEEKLY</Text>
      </View>
      
    </View>
    <Navbar></Navbar>
    </>

  );
};

export default Profile;
