import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";
import { useFonts } from "expo-font";

export default function Navbar() {
  return (
    <View className="absolute bottom-0 left-0 right-0 bg-zinc-100 mx-4 rounded-full p-4 flex-row justify-between items-center">
      <TouchableOpacity>
        <AntDesign name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <EvilIcons name="navicon" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="user" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
