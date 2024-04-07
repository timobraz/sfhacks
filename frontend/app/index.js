import React from 'react';

import Learn from "./learn";
import Upload from "./upload";
import Leaderboard from "./leaderboard";
import Heatmap from "./heatmap";
import Menu from "./Menu"; // Assuming Menu is in the same directory
import Feed from "./feed";
import Profile from "./profile";
import Navbar from "../components/navbar";
import { useFonts } from "expo-font";
import { View } from "react-native";



const App = () => {
  const [fontsLoaded] = useFonts({
    Koulen: require('../assets/fonts/Koulen.ttf'),
  });
  const [fontsLoadedTwo] = useFonts({
    RobotoLight: require('../assets/fonts/RobotoCondensed-Light.ttf'),
  });
  const [fontsLoadedThree] = useFonts({
    RobotoMedium: require('../assets/fonts/RobotoCondensed-Medium.ttf'),
  });
  const [fontsLoadedFour] = useFonts({
    RobotoRegular: require('../assets/fonts/RobotoCondensed-Regular.ttf'),
  });

  if (!fontsLoaded && !fontsLoadedTwo) {
    return null;
  }
  return (
    <Feed></Feed>

  );
};

export default App;
