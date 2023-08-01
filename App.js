import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "./src/components/TinderCard";
import { burgers } from "./public/burgers";
import AnimatedStack from "./src/components/Animated";

const App = () => {
  const onSwipeRight = (food) => {
    console.warn("swipe right", food.dsc);
  };

  const onSwipeLeft = (food) => {
    console.warn("swipe left", food.dsc);
  };

  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        data={burgers}
        renderItem={({ item }) => <Card food={item} />}
      />
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
});

export default App;
