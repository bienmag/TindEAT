import { useState } from "react";
import { Image, Text, View, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ChatRoom(props) {
  const [text, onChangeText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: props.route.params.burger.img }}
        />
        <Text>{props.route.params.burger.dsc}</Text>
      </View>
      <View style={styles.lowerContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="useless placeholder"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    justifyContent: "space-between",
    flex: 1,
  },
  upperContainer: {
    width: "100%",
    alignItems: "center",
  },

  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    margin: 10,
  },
  lowerContainer: {
    width: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
  },
});

export default ChatRoom;
