import React from "react";
import { ScrollView, StyleSheet, FlatList } from "react-native";
import ChatListItem from "../ChatListItem";
function Chats(props) {
  const burgers = props.food;
  return (
    <ScrollView style={styles.chatsContainer} vertical={true}>
      <FlatList
        data={burgers}
        renderItem={({ item }) => <ChatListItem burger={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chatsContainer: {
    padding: 20,
  },
});

export default Chats;
