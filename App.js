import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import MatchesScreen from "./src/screens/MatchesScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  const [activeScreen, setActiveScreen] = useState("home");

  const color = "#B5B5B5";
  const activeColor = "#F76C6B";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.topNavigation}>
        <Pressable onPress={() => setActiveScreen("home")}>
          <Fontisto
            name="tinder"
            size={30}
            color={activeScreen === "home" ? activeColor : color}
          />
        </Pressable>
        <MaterialCommunityIcons
          name="star-four-points"
          size={30}
          color={color}
        />
        <Pressable onPress={() => setActiveScreen("matches")}>
          <Ionicons
            name="chatbubbles-sharp"
            size={30}
            color={activeScreen === "matches" ? activeColor : color}
          />
        </Pressable>
        <Ionicons name="ios-person" size={30} color={color} />
      </View>
      <View style={styles.pageContainer}>
        {activeScreen === "home" && <HomeScreen />}
        {activeScreen === "matches" && <MatchesScreen />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    backgroundColor: "#F8F8F8",
  },
  topNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default App;
