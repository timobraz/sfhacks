import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { router } from "expo-router";

export default function Navbar({navigation}) {
  return (
    <View className="absolute z-[999] bottom-5 left-0 right-0 shadow-2xl bg-zinc-100 mx-4 rounded-full p-4 flex-row justify-between items-center">
      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <AntDesign name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <EvilIcons name="navicon" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <AntDesign name="user" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
