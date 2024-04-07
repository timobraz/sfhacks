import { View, Text, StyleSheet} from "react-native";
import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Navbar from "../components/navbar";
const About = () => {
  return (
    <>
    <SafeAreaView className="bg-red-500 h-[2000px] -mt-16">
      <Text className="font-[Koulen] text-[55px] tracking-[16px] text-center ml-4 pt-5">About Us!</Text>
    </SafeAreaView>
    <Navbar />
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B1CFEB`",
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
})

export default About;
