
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { View, Text, TouchableOpacity, StatusBar, Dimensions, Image, Pressable } from 'react-native';
const { width } = Dimensions.get('window');
import axios from 'axios';
import { router } from 'expo-router';
function Upload() {
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
    <View className="h-full w-full flex items-center flex-col bg-[#D7BCED]">
      <View className="flex-row gap-5 items-center">
        <Pressable onPress={()=>router.push('/Menu')}>
          <Image 
          source={backImg}
          className="w-10 h-10"
          />
        </Pressable>
        
        <Text className="mt-7 text-[45px] tracking-[10px] text-center font-[Koulen]">
          Upload
        </Text>

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
      <Navbar />
    </View>
  );
}

export default Upload;
