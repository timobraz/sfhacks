import { View, Text, ScrollView, ViewBase } from "react-native";
import React from "react";
import { Image } from "expo-image";
import Navbar from "../components/navbar";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Feed = () => {
  return (
    <View className="flex flex-1">
      <View>
        <Text className="font-[Koulen] text-[55px] tracking-[16px] text-center pt-5 ml-3">
          Feed
        </Text>
        <ScrollView
          className="gap-4"
          contentContainerStyle={{ paddingBottom: 180 }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <View key={i} className="px-6 space-y-2 ">
              <View className="flex flex-row justify-between">
                <View className="flex flex-row gap-2">
                  <View className="rounded-full h-14 w-14 bg-slate-300"></View>
                  <View>
                    <Text className="text-2xl font-bold tracking-tighter ">
                      Timofey
                    </Text>
                    <Text className="text-lg tracking-[-1px]">9th Street</Text>
                  </View>
                </View>
                <View>
                  <Text className="text-xl font-bold tracking-tighter text-green-500 ">
                    +3 Trash Points
                  </Text>
                  <Text className="text-xl tracking-[-1px] font-bold">
                    2 hours ago
                  </Text>
                </View>
              </View>
              <Image
                source="https://picsum.photos/seed/696/3000/2000"
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
                className="h-72 w-full rounded-[48px]"
              />
              <View className="h-[1px] w-full bg-slate-400"></View>
            </View>
          ))}
        </ScrollView>
      </View>
      <Navbar />
    </View>
  );
};

export default Feed;
