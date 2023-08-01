import React from "react";
import { Text, Image, ImageBackground, View, StyleSheet } from "react-native";
const App = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground
          source={require("./assets/pizza.jpeg")}
          style={styles.image}
        >
          <View style={styles.cardInner}>
            <Text style={styles.name}>Pizza</Text>
            <Text style={styles.bio}>Pizza Margarita</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  card: {
    width: "95%",
    height: "70%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
  },

  cardInner: {
    padding: 10,
  },

  name: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },

  bio: {
    fontSize: 18,
    color: "white",
    lineHeight: 25,
  },
});

export default App;
