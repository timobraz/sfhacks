
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import { View, Text, TouchableOpacity, StatusBar, Dimensions, Pressable, SafeAreaView, TextInput } from 'react-native';
import { Image } from 'expo-image';


function UploadNext() {
  const [description, setDescription] = useState('');
  const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const image = require('../assets/vectorThing.png');

  const pressed = () => {
    console.log(description)
  }
  return (
    <>
    <SafeAreaView className="h-[2000px] w-full flex items-center flex-col bg-[#D7BCED] -mt-16">
      <View className="flex-row gap-5 items-center p-7 h-[500px]">
        <Image
                source="https://picsum.photos/seed/696/3000/2000"
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
                className="w-full h-full rounded-lg"
              >
              </Image>
      </View>
      <View className="flex-row gap-5 items-center px-7 py-2 h-auto">
        <View className="h-full w-full bg-[#E9E9E9] rounded-xl flex flex-col items-center px-5">
          <Text className="text-2xl font-[Koulen] pt-6 color-[#2F2F2F]">
            Describe what you did...
          </Text>
          <View className="w-full bg-[#D9D9D9]">
            <TextInput className="w-full h-[100px] font-[RobotoMedium] p-2" placeholder="I went to the park and"
                      multiline = {true}
                      numberOfLines = {4} 
                      onChangeText={(description) => {setDescription({description})}}
                      value={description}>

            </TextInput>
          </View>
        </View>

      </View>
      <TouchableOpacity className='flex flex-row justify-center gap-2 items-center' onPress={pressed}>
        <Text className="color-[#FFFFFF] font-Koulen text-8xl pt-16">
          SEND
        </Text>
        <View className='w-[60px] h-[60px] mb-6'>
          <Image
            source={image}
            placeholder='asdf'
            contentFit="cover"
            transition={10}
            className="w-full h-full"
          >
          </Image>
        </View>
      </TouchableOpacity>
      
    </SafeAreaView>
    <Navbar />
    </>
  );
}

export default UploadNext;
