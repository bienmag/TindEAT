import React from "react";
import { Text, View, StyleSheet } from "react-native";

function MessageCard({ message }) {
  return (
    <View style={styles.message}>
      <Text>{message.user}</Text>
      <Text>{message.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "black",
    padding: 15,
    margin: 5,
  },
});
export default MessageCard;
