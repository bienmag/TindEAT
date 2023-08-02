import React from "react";
import { Text, Pressable, View, StyleSheet, Image } from "react-native";
function ChatRoom({ burger }) {
  return (
    <Pressable onPress={() => console.warn(burger.dsc)}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image style={styles.avatar} source={{ uri: burger.img }}></Image>
        </View>
        <View style={styles.midContainer}>
          <Text>{burger.dsc}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 5,
    alignItems: "center",
    borderColor: "red",
    backgroundColor: "gray",
    padding: 10,
    // justifyContent: "space-between",
  },
  leftContainer: { flexDirection: "row" },
  avatar: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 50,
  },
  midContainer: {},
});

export default ChatRoom;
