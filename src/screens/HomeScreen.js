import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Card from "../components/TinderCard";
import AnimatedStack from "../components/AnimatedStack";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const HomeScreen = ({ burgers }) => {
  const [currentFood, setCurrentFood] = useState(null);
  const onSwipeRight = () => {
    console.warn("swipe right", currentFood.dsc);
    // const createMatch = async () => {
    //   await DataStore.save(
    //     new UserToFood({
    //       userId: user.id,
    //       foodId: food.id,
    //     })
    //   );
    // };
    // createMatch();
  };

  const onSwipeLeft = () => {
    console.warn("swipe left", currentFood.dsc);
  };

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
