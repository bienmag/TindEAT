import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import ChatRoom from "./src/components/Chats/ChatRoom";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import { Image, Text, View } from "react-native";
import { Amplify, Auth, DataStore } from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react-native";
import ProfileScreen from "./src/screens/ProfileScreen";
import { Food, User } from "./src/models";
import LoadingScreen from "./src/screens/LoadingScreen";
// import { burgers } from "./public/burgers";
Amplify.configure(config);
const Stack = createNativeStackNavigator();

function App() {
  const [burgers, setBurgers] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchBurgers = async () => {
      const data = await DataStore.query(Food);
      setBurgers(data);
    };
    fetchBurgers();

    const getCurrentUser = async () => {
      const current = await Auth.currentAuthenticatedUser();

      const dbUsers = await DataStore.query(User, (u) =>
        u.sub.eq(current.attributes.sub)
      );

      if (dbUsers.length < 0) {
        return;
      }
      const dbUser = dbUsers[0];
      setUser(dbUser);
    };
    getCurrentUser();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        {burgers.length !== 0 ? (
          <Stack.Screen
            name="home"
            component={Home}
            initialParams={{ user: user, burgers: burgers }}
          />
        ) : (
          <Stack.Screen name="loading" component={LoadingScreen}></Stack.Screen>
        )}
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
        <Stack.Screen name="profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
