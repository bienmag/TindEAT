import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
function ChatListItem({ burger }) {
  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate("chatroom", { burger });
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image style={styles.avatar} source={{ uri: burger.img }}></Image>
        </View>
        <View style={styles.midContainer}>
          <Text>{burger.dsc}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 5,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#CDCDCD",
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

export default ChatListItem;
