import { View, Text,  TouchableWithoutFeedback, Animated, Pressable } from "react-native";
import {StyleSheet, SafeAreaView} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const Slot = ({route,move,color,top,textcolor,description,navigation,textmove}) => {
  const moveAnim = useRef(new Animated.Value(top)).current;
  const thingHeight = useRef(new Animated.Value(1000)).current;
  const textPosition = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(1)).current;
  const textTracking = useRef(new Animated.Value(-2)).current;
  

  const expand = () => {
    Animated.timing(moveAnim, {
      toValue: move,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(thingHeight, {
      toValue: 10000,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(textPosition, {
      toValue: textmove,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(textOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(textTracking, {
      toValue: 10,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setTimeout(()=>{navigation.navigate(route); moveAnim.setValue(0);textPosition.setValue(0); textOpacity.setValue(1);textTracking.setValue(-2);},500); 
   

  };
  return  <TouchableWithoutFeedback  >
            <Animated.View className="absolute w-full" style={[
          {
            // Bind opacity to animated value
            top: moveAnim,
            height: thingHeight,
          },
        ]}>
              <Pressable onPress={()=>expand('Upload')} className=" w-full h-full relative rounded-t-[48px] onPress" style={[
          {
            // Bind opacity to animated value
            backgroundColor: color,
          },
        ]}>
            <Animated.Text style={[
          {
            // Bind opacity to animated value
            letterSpacing: textTracking,
            left: textPosition,
            color: textcolor,
          },
        ]} className="relative text-5xl font-extrabold font-[Koulen] leading-loose tracking-[-2px] pt-[17px] mt-6 ml-10">{route}</Animated.Text>
            <Animated.Text style={[
          {
            // Bind opacity to animated value
            opacity: textOpacity,
            color: textcolor,
          },
        ]} className="relative text-xl tracking-[-1px] -mt-2 ml-10 font-[Koulen]">{description}</Animated.Text>
            </Pressable>
            </Animated.View>
          </TouchableWithoutFeedback>
}

export default Slot