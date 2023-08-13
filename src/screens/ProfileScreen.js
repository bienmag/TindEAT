import react, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { User } from "../models";
import { DataStore } from "aws-amplify";
import "core-js/full/symbol/async-iterator";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const isValid = () => {
    // return name && bio;
    return name;
  };
  const save = () => {
    if (!isValid()) {
      console.warn("Not valid");
      return;
    }
    const newUser = new User({
      name,
    });

    DataStore.save(newUser);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name..."
          value={name}
          onChangeText={setName}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Bio..."
          multiline
          numberOfLines={3}
          value={bio}
          onChangeText={setBio}
        ></TextInput>
        <Pressable style={styles.button}>
          <Text onPress={save}>Save</Text>
        </Pressable>
        {/* do sign out */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  input: {
    margin: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: 2,
  },
  button: {
    backgroundColor: "red",
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    color: "red", // change to tinder color
  },
});

export default ProfileScreen;
