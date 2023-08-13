import React from "react";
import { Text, View, StyleSheet } from "react-native";

function MessageCard({ message }) {
  return message.user !== "Rita" ? (
    <View style={styles.message}>
      <Text>{message.user}</Text>
      <Text>{message.text}</Text>
    </View>
  ) : (
    message.user === "Rita" && (
      <View style={styles.messageUser}>
        <Text>{message.user}</Text>
        <Text>{message.text}</Text>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  message: {
    borderRadius: 30,
    padding: 15,
    margin: 5,
    width: "80%",
    backgroundColor: "gray",
  },
  messageUser: {
    borderRadius: 30,
    padding: 15,
    margin: 5,
    width: "80%",
    backgroundColor: "#3AB4CC",
    alignSelf: "flex-end",
  },
});
export default MessageCard;
