import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import HomeScreen from "./HomeScreen";
import MatchesScreen from "./MatchesScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import ProfileScreen from "./ProfileScreen";

function Home() {
  const color = "#B5B5B5";
  const activeColor = "#F76C6B";
  const navigation = useNavigation();

  const route = useRoute();
  const burgers = route.params.burgers;
  const user = route.params.user;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.topNavigation}>
        <Pressable onPress={() => navigation.navigate("home")}>
          <Fontisto
            name="tinder"
            size={30}
            // color={getActiveRouteName() === "home" ? activeColor : color}
          />
        </Pressable>
        <MaterialCommunityIcons
          name="star-four-points"
          size={30}
          color={color}
        />
        <Pressable onPress={() => navigation.navigate("matches")}>
          <Ionicons
            name="chatbubbles-sharp"
            size={30}
            // color={getActiveRouteName() === "matches" ? activeColor : color}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("profile")}>
          <Ionicons name="ios-person" size={30} color={color} />
        </Pressable>
      </View>
      <View style={styles.pageContainer}>
        {route.name === "home" && <HomeScreen burgers={burgers} user={user} />}
        {route.name === "matches" && <MatchesScreen />}
        {route.name === "profile" && <ProfileScreen />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    backgroundColor: "#F8F8F8",
  },
});

export default Home;
