import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";

const Card = (props) => {
  const { dsc, img, country } = props.food;

  return (
    <View style={styles.card}>
      <ImageBackground source={{ uri: img }} style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{dsc}</Text>
          <Text style={styles.bio}>{country}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "95%",
    height: "85%",
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

export default Card;
