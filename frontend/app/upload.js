import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
} from 'react-native';
const { width } = Dimensions.get('window');
import axios from 'axios';
import { router } from 'expo-router';
function Upload() {
  const [modalVisible, setModalVisible] = useState(true);

  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const { base64 } = await cameraRef.current.takePictureAsync((options = { base64: true, quality: 0.1 }));
      const resp = await axios.post('https://concise-hookworm-utterly.ngrok-free.app/upload', {
        image: base64,
      });
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const backImg = require('../assets/back-arrow.png');

  return (
    <>
      <SafeAreaView className="h-[2000px] w-full flex items-center flex-col bg-[#D7BCED] -mt-16">
        <View className="flex-row gap-5 items-center">
          <Text className="mt-7 text-[55px] tracking-[10px] text-center font-[Koulen]">Upload</Text>
        </View>

        <View
          style={{
            width: width - 40,
            height: 485,
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 20,
            overflow: 'hidden',
          }}
        >
          <Camera style={{ flex: 1 }} ref={cameraRef}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                justifyContent: 'flex-end',
              }}
            >
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: 50,
                  height: 60,
                  width: 60,
                  marginBottom: 20,
                }}
                onPress={takePicture}
              />
            </View>
          </Camera>
        </View>
      </SafeAreaView>
      <Navbar />
      <FinalResultModal isVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
}

const FinalResultModal = ({ isVisible, setModalVisible }) => {
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
              source={{ uri: 'https://picsum.photos/200' }}
              width={380}
              height={500}
              borderRadius={10}
              marginBottom={16}
            />
            <Text className="text-xl font-bold text-center mb-2">
              You've earned <Text className="text-emerald-500">69</Text> points!
            </Text>
            <Text className="text-center text-lg">
              Compost: <Text className="font-bold text-emerald-600">2</Text>
            </Text>
            <Text className="text-center text-lg">
              Landfill: <Text className="font-bold text-amber-900">4</Text>
            </Text>
            <Text className="text-center  text-lg">
              Recycling: <Text className="font-bold text-sky-400">6</Text>
            </Text>
            <Pressable onPress={handlePress} className="mt-6 bg-blue-500 py-2 px-4 rounded-lg">
              <Text className="text-white text-lg font-bold text-center">Awesome!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Upload;
