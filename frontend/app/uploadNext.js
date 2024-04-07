
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import { View, Text, TouchableOpacity, StatusBar, Dimensions, Pressable, SafeAreaView, TextInput, Modal} from 'react-native';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import axios from 'axios';

function UploadNext() {
  const {imageData} = useLocalSearchParams();
  const [description, setDescription] = useState('');
  const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
const [modalVisible, setModalVisible] = useState(false);
 const [data,setData]=useState({});
  const image = require('../assets/vectorThing.png');

  const pressed = async () => {
    try {
      const res = await axios.post("https://concise-hookworm-utterly.ngrok-free.app/upload", {
        image: imageData,
        description: description,
      });
      if (res.data){
        console.log(res.data);
        setData(res.data);
        setModalVisible(true);
      }
     
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
    <SafeAreaView className="h-[2000px] w-full flex items-center flex-col bg-[#D7BCED] -mt-16">
      <View className="flex-row gap-5 items-center p-7 h-[500px]">
        <Image
                source={{ uri: `data:image/jpeg;base64,${imageData}`}}
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
      <TouchableOpacity className='flex flex-row justify-center gap-2 items-center' onPress={()=>{pressed(); setModalVisible(true)}}>
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
          <FinalResultModal isVisible={modalVisible} setModalVisible={setModalVisible} data={data} />

    <Navbar />
    </>
  );
}
const FinalResultModal = ({ isVisible, setModalVisible,data }) => {
  const handlePress = () => {
    setModalVisible(false);
    router.push('/feed');
  };
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View className="flex-1 justify-center items-center bg-black bg-opacity-20">
          <View className="bg-white p-4 rounded-lg">
            <Image
              source={{ uri: data.img }}
              width={380}
              height={500}
              borderRadius={10}
              marginBottom={16}
            />
            <Text className="text-xl font-bold text-center mb-2">
              You've earned <Text className="text-emerald-500">{data.points}</Text> points!
            </Text>
            <Text className="text-center text-lg">
              Compost: <Text className="font-bold text-emerald-600">{data.class1}</Text>
            </Text>
            <Text className="text-center text-lg">
              Landfill: <Text className="font-bold text-amber-900">{data.class2}</Text>
            </Text>
            <Text className="text-center  text-lg">
              Recycling: <Text className="font-bold text-sky-400">{data.class3}</Text>
            </Text>
            <Pressable onPress={handlePress} className="mt-6 bg-blue-500 py-2 px-4 rounded-lg">
              <Text className="text-white text-lg font-bold text-center">Awesome!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );};
export default UploadNext;
