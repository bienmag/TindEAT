import "react-native-gesture-handler";
import React from "react";
import ChatRoom from "./src/components/Chats/ChatRoom";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import { Image, SafeAreaView, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="matches" component={Home} />
        <Stack.Screen
          name="chatroom"
          component={ChatRoom}
          options={({ route }) => ({
            title: route.params.burger.name,
            headerRight: () => (
              <Image
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 50,
                }}
                source={{ uri: route.params.burger.img }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
