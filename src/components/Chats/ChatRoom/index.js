import { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAnswerFromAI } from "../../../api";
import Messages from "../Messages";
import HomeScreen from "../../../screens/HomeScreen";

function ChatRoom(props) {
  const [firstMessage, setFirstMessage] = useState();
  const [text, setText] = useState("");
  const user = "Rita";
  const [messages, setMessages] = useState([]);

  function sendMessage() {
    setMessages([
      ...messages,
      { id: messages.length + 1, user: user, text: text },
    ]);
  }

  useEffect(() => {
    async function fetchAnswerFromAI() {
      const prompt = `this is an app like tinder but with food. now the user has a match with burger ${props.route.params.burger.dsc}. can you welcome the ${user} as if you were a burger called ${props.route.params.burger.dsc} from ${props.route.params.burger.name}?`;
      const response = await getAnswerFromAI(prompt);
      const answer = response.choices[0].text;
      if (answer) {
        setFirstMessage({
          id: 1,
          user: props.route.params.burger.name,
          text: answer,
        });
      }
    }
    if (firstMessage === undefined && messages.length === 0) {
      fetchAnswerFromAI();
    }
  }, []);

  useEffect(() => {
    if (firstMessage) {
      setMessages([...messages, firstMessage]);
    }
  }, [firstMessage]);

  useEffect(() => {
    async function fetchAnswerFromAI(prompt) {
      const response = await getAnswerFromAI(prompt);
      const answer = response.choices[0].text;
      if (answer) {
        const newMessage = {
          id: messages.length + 1,
          user: props.route.params.burger.name,
          text: answer,
        };
        setMessages([...messages, newMessage]);
      }
    }
    if (messages.length !== 0) {
      if (messages[messages.length - 1].user === user) {
        const prompt = messages[messages.length - 1].text;
        fetchAnswerFromAI(prompt);
      }
    }
  }, [messages]);

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: props.route.params.burger.img }}
        />
        <Text>{props.route.params.burger.dsc}</Text>
      </View>
      {messages.length !== 0 && <Messages messages={messages} />}
      <View style={styles.lowerContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => setText(newText)}
          value={text}
          placeholder="useless placeholder"
        />
        <Button
          style={styles.button}
          onPress={sendMessage}
          title="Send"
          color="#841584"
          accessibilityLabel="Send a message"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    margin: 10,
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
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    width: "78%",
  },
});

export default ChatRoom;
