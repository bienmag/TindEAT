import React from "react";
import { ScrollView, StyleSheet, FlatList, Text } from "react-native";
import ChatListItem from "../ChatListItem";
function Chats(props) {
  const burgers = props.food;
  return (
    <ScrollView style={styles.chatsContainer} vertical={true}>
      <Text style={styles.text}>Messages</Text>
      <FlatList
        data={burgers}
        renderItem={({ item }) => <ChatListItem burger={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chatsContainer: {},
  text: {
    fontWeight: "bold",
    fontSize: 24,
    color: "red", // change to tinder color
    padding: 10,
  },
});

export default Chats;
