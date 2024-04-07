import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { router } from "expo-router";

export default function Navbar({navigation}) {
  return (
    <View className="absolute z-[999] bottom-5 left-0 right-0 shadow-2xl bg-zinc-100 mx-4 rounded-full p-4 flex-row justify-between items-center border-4">
      <TouchableOpacity onPress={() => router.push("/feed")}>
        <AntDesign name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/Menu")}>
        <EvilIcons name="navicon" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/uploadNext")}>
        <AntDesign name="user" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
