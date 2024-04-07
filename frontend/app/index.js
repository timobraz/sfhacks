import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import About from "./about";
import Upload from "./upload";
import Leaderboard from "./leaderboard";
import Heatmap from "./heatmap";
import Menu from "./Menu"; // Assuming Menu is in the same directory
import Feed from "./feed";
import Profile from "./profile";
import Navbar from "../components/navbar";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Koulen: require("../assets/fonts/Koulen.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack.Navigator
      presentation="transparentModal"
      initialRouteName="Menu"
      independent={true}
      
    >
      <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }}/>
      <Stack.Screen name="About" component={About} options={{ headerShown: false }}/>
      <Stack.Screen name="Upload" component={Upload} options={{ headerShown: false }}/>
      <Stack.Screen name="Leaderboard" component={Leaderboard} options={{ headerShown: false }}/>
      <Stack.Screen name="Heatmap" component={Heatmap} options={{ headerShown: false }}/>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }}/>
      <Stack.Screen name="Navbar" component={Navbar} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default App;
