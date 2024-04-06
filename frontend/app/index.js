import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import About from './about';
import Upload from './upload';
import Leaderboard from './leaderboard';
import Heatmap from './heatmap';
import Menu from './Menu'; // Assuming Menu is in the same directory
import Feed from './feed';
import { useFonts } from 'expo-font';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Koulen: require('../assets/fonts/Koulen.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className="flex-1 bg-blacks">
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerBackTitle: 'Back',

          headerBackTitleStyle: {
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
          },
          header: () => (
            <View className="hidden">
              <Text>test</Text>
            </View>
          ),

          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '800',
          },
        }}
      >
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Upload" component={Upload} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="Heatmap" component={Heatmap} />
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default App;
