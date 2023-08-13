import react, { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { User } from "../models";
import { Auth, DataStore } from "aws-amplify";
import "core-js/full/symbol/async-iterator";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      const currentUser = await Auth.currentAuthenticatedUser();

      const dbUsers = await DataStore.query(User, (u) =>
        u.sub.eq(currentUser.attributes.sub)
      );
      console.log("dbusers", dbUsers);

      if (dbUsers.length < 0) {
        return;
      }
      const dbUser = dbUsers[0];
      setUser(dbUser);
    };
    getCurrentUser();
  }, []);
  console.log("user", user);

  const isValid = () => {
    return name && bio;
  };
  const save = async () => {
    if (!isValid()) {
      console.warn("Not valid");
      return;
    }
    if (user) {
      const updatedUser = await DataStore.save(
        User.copyOf(user, (updated) => {
          (updated.name = name), (updated.bio = bio);
        })
      );
    } else {
      const newUser = new User({
        name,
        bio,
        sub: user.attributes.sub,
      });

      DataStore.save(newUser);
    }
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
        <Pressable style={styles.button}>
          <Text
            onPress={() => {
              Auth.signOut();
            }}
          >
            Sign out
          </Text>
        </Pressable>
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
