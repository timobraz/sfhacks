import { View, Text,  TouchableWithoutFeedback, Animated, Pressable } from "react-native";
import {StyleSheet, SafeAreaView} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Slot from "../components/Slot";
import Navbar from "../components/navbar";
const Menu = ({ navigation }) => {



  return (
    <>
    
    <SafeAreaView className='flex-1 -mt-16 bg-[#E9E9E9]'>
        <Text className="color-[#202020] font-[Koulen] text-[55px] tracking-[20px] text-center ml-3">Navigation</Text>
        <View className="-space-y-44 flex h-screen ">
          <Slot route='upload' move={-100} height={10000} description={'Take a picture of your trash'} navigation={navigation} color={'#D7BCED'} top={0} textcolor='#000000' textmove={85}/>
          <Slot route='leaderboard' move={-100} height={10000} description={'See the top 5 Earth lovers!'} navigation={navigation} color={'#202020'} top={170} textcolor='#FFFFFF' textmove={0}/>
          <Slot route='heatmap' move={-100} height={10000} description={'Popular trash pickup areas'} navigation={navigation} color={'#CBD87D'} top={340} textcolor='#000000' textmove={65}/>
          <Slot route='about' move={-100} height={10000} description={'Read our story'} navigation={navigation} color={'#EB5851'} top={510} textcolor='#FFFFFF' textmove={30}/>
        </View>
    </SafeAreaView>
    
    <Navbar></Navbar>
    </>
  );
};

export default Menu;
