import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Card from "./src/components/TinderCard";
import { burgers } from "./public/burgers";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";

const App = () => {
  const { width: screenWidth } = useWindowDimensions();
  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(
    () => interpolate(translateX.value, [0, screenWidth], [0, 60]) + "deg"
  );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (e, ctx) => {
      translateX.value = ctx.startX + e.translationX;
    },
    onEnd: () => {
      console.log("Touch end");
    },
  });

  return (
    <View style={styles.pageContainer}>
      <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
            <Card food={burgers[0]}></Card>
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  card: {
    width: "95%",
    height: "70%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
  },

  cardInner: {
    padding: 10,
  },

  name: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },

  bio: {
    fontSize: 18,
    color: "white",
    lineHeight: 25,
  },

  animatedCard: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
