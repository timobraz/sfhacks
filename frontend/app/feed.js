import { View, Text, ScrollView, ViewBase, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { Image } from 'expo-image';
import Navbar from '../components/navbar';
import axios from 'axios';
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Feed = () => {
  const [feed, setFeed] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://concise-hookworm-utterly.ngrok-free.app/posts');
      setFeed(res.data);
      console.log(res.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <SafeAreaView className=" bg-[#E9E9E9] -mt-16 ">
        <View>
          <Text className="font-[Koulen] text-[65px] tracking-[16px] text-center ml-3 color-[#202020]">CleanASF</Text>
          <View className="w-[95%] left-[2.5%] h-1 bg-[#D9D9D9]  -mt-5 mb-4 rounded-xl" />

          <ScrollView className="gap-4 pt-2" contentContainerStyle={{ paddingBottom: 180 }}>
            {feed &&
              feed.map((post, i) => (
                <View key={post._id} className="px-6 space-y-3 mb-5">
                  <Image
                    source={{ uri: post.image }}
                    placeholder={blurhash}
                    contentFit="cover"
                    transition={1000}
                    className="h-72 w-full rounded-[23px] relative p-4 flex flex-row mt-6 justify-between"
                  >
                    <Text className="font-[Koulen] text-xl tracking-[-1px] color-[#F57502]">San Francisco, CA</Text>
                    <Text className="font-[Koulen] text-xl tracking-[-1px] font-bold color-[#F57502]">2 hours ago</Text>
                  </Image>
                  <View className="flex flex-col justify-between">
                    <View className="flex flex-row gap-2">
                      <Image
                        className="rounded-full h-14 w-14 bg-slate-300"
                        source={require('../assets/timo.jpeg')}
                      ></Image>
                      <View className="flex-col">
                        <View className="flex-row justify-between w-[270px]">
                          <Text className="font-[Koulen] text-2xl font-bold tracking-tighter color-[#202020] top-1">
                            {post.user_id.username || 'Timo'}
                          </Text>
                          <Text className="font-[Koulen] text-xl font-bold tracking-tighter text-green-500 top-1">
                            +{post.trashPoints || 0} Trash Points
                          </Text>
                        </View>
                        <Text className="font-[RobotoRegular] text-[17px] tracking-tighter color-[#858484] top-1 w-[270px] leading-[-5px]">
                          {post.description || 'No description available'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
          </ScrollView>
        </View>
      </SafeAreaView>
      <Navbar />
    </>
  );
};

export default Feed;
