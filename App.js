import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import MatchesScreen from "./src/screens/MatchesScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Fontisto } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.topNavigation}>
        <Fontisto name="tinder" size={30} color="gray" />
        <MaterialCommunityIcons
          name="star-four-points"
          size={30}
          color="gray"
        />
        <Ionicons name="chatbubbles-sharp" size={30} color="gray" />
        <Ionicons name="ios-person" size={30} color="gray" />
      </View>
      <View style={styles.pageContainer}>
        <HomeScreen />
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
