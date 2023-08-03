import React from "react";
import { FlatList, Text, View } from "react-native";
import MessageCard from "../MessageCard";

function Messages({ messages }) {
  return (
    <FlatList
      data={messages}
      renderItem={({ item }) => <MessageCard message={item} />}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}
export default Messages;
