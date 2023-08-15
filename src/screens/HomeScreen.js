import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Card from "../components/TinderCard";
import AnimatedStack from "../components/AnimatedStack";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { DataStore } from "aws-amplify";
import { UserToFood, UserToUser } from "../models";
const HomeScreen = ({ burgers, user }) => {
  const [currentFood, setCurrentFood] = useState(burgers[0]);
  console.log("current food", currentFood);
  const onSwipeRight = () => {
    console.warn("swipe right", currentFood.dsc);
    const createMatch = async () => {
      await DataStore.save(
        new UserToFood({
          userId: user.id,
          foodId: currentFood.id,
        })
      );
    };
    createMatch();
  };

  const onSwipeLeft = () => {
    console.warn("swipe left", currentFood.dsc);
  };

  //check if there is a match already with this food and if so create usersMatch
  useEffect(() => {
    async function fetchFoodMatches() {
      const foodMatch = await DataStore.query(UserToFood, (userToFood) =>
        userToFood.foodId.eq(currentFood.id)
      );
      console.log("food match", foodMatch[0]);
      if (!foodMatch[0] === undefined) {
        return;
      } else {
        const userMatch = await DataStore.save(
          new UserToUser({
            userId_1: user.id,
            userId_2: foodMatch[0].userId,
            food: currentFood.dsc,
          })
        );

        //then i need to emit with socket that there is new userMatch
      }
    }
    fetchFoodMatches();
  }, [currentFood]);

  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        data={burgers}
        renderItem={({ item }) => <Card food={item} />}
        onSwipeRight={onSwipeRight}
        onSwipeLeft={onSwipeLeft}
        setCurrentFood={setCurrentFood}
      />

      <View style={styles.icons}>
        <View style={styles.button}>
          <MaterialCommunityIcons name="restore" size={30} color="#FBD88B" />
        </View>
        <View style={styles.button}>
          <Feather name="x" size={30} color="#F76C6B" />
        </View>

        <View style={styles.button}>
          <FontAwesome name="star" size={30} color="#3AB4CC" />
        </View>

        <View style={styles.button}>
          <AntDesign name="heart" size={30} color="#4FCC94"></AntDesign>
        </View>

        <View style={styles.button}>
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={30}
            color="#A65CD2"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  icons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
  },
});

export default HomeScreen;
