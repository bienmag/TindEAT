import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, useWindowDimensions, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
  runOnJS,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import like from "../../../assets/LIKE.png";
import nope from "../../../assets/nope.png";

const swipe_velocity = 900;

const AnimatedStack = (props) => {
  const { data, renderItem, onSwipeRight, onSwipeLeft, setCurrentFood } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  const currentFood = data[currentIndex];
  const nextFood = data[nextIndex];

  const { width: screenWidth } = useWindowDimensions();
  const hiddenTranslateX = 2 * screenWidth;
  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(
    () => interpolate(translateX.value, [0, hiddenTranslateX], [0, 60]) + "deg"
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

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslateX, 0, hiddenTranslateX],
          [1, 0.8, 1]
        ),
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX, 0, hiddenTranslateX],
      [1, 0.5, 1]
    ),
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (e, ctx) => {
      translateX.value = ctx.startX + e.translationX;
    },
    onEnd: (e) => {
      if (Math.abs(e.velocityX) < swipe_velocity) {
        translateX.value = withSpring(0);
        return;
      }

      translateX.value = withSpring(
        e.velocityX > 0 ? hiddenTranslateX : -hiddenTranslateX,
        {},
        () => runOnJS(setCurrentIndex)(currentIndex + 1)
      );
      const onSwipe = e.velocityX > 0 ? onSwipeRight : onSwipeLeft;
      onSwipe && runOnJS(onSwipe)();
    },
  });

  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, hiddenTranslateX / 5], [0, 1]),
  }));

  const nopeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -hiddenTranslateX / 5], [0, 1]),
  }));

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1);
  }, [currentIndex, translateX]);

  useEffect(() => {
    setCurrentFood(currentFood);
  }, [currentFood]);

  return currentFood !== undefined && nextFood !== undefined ? (
    <View style={styles.pageContainer}>
      <View style={styles.nextCardContainer}>
        <Animated.View style={[styles.animatedCard, nextCardStyle]}>
          {renderItem({ item: nextFood })}
        </Animated.View>
      </View>
      <GestureHandlerRootView style={styles.pageContainer}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
            {renderItem({ item: currentFood })}
            <Animated.Image
              source={like}
              style={[styles.like, { left: 10 }, likeStyle]}
              resizeMode="contain"
            ></Animated.Image>
            <Animated.Image
              source={nope}
              style={[styles.like, { right: 10 }, nopeStyle]}
              resizeMode="contain"
            ></Animated.Image>
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </View>
  ) : (
    <View style={styles.pageContainer}>
      <Text>No more food yet found. </Text>
      <Text> Please come back later</Text>
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

  animatedCard: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  like: {
    width: 150,
    height: 150,
    position: "absolute",
    top: 120,
  },
});

export default AnimatedStack;
