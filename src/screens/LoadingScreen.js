import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.text}>The app is loading.... </Text>
      </View>
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
});

export default LoadingScreen;
