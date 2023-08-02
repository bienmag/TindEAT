import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { burgers } from "../../public/burgers";

const MatchesScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.text}>New Matches </Text>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.users}
        showsHorizontalScrollIndicator={false}
      >
        {burgers.map((burger) => (
          <View style={styles.user} key={burger.id}>
            <Image source={{ uri: burger.img }} style={styles.image}></Image>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    color: "red", // change to tinder color
  },
  users: {
    flexDirection: "row",
  },

  user: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 50,
    borderWidth: 3,
    padding: 3,
    borderColor: "red", // change to tinder color
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});

export default MatchesScreen;
