import { View, StyleSheet } from 'react-native'
import React from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withDecay,
  } from 'react-native-reanimated';
  import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
  } from 'react-native-gesture-handler';
  
  const SIZE = 120;

const SampleComponent = () => {
    // const screenContext = useScreenContext();
    // const screenStyles = styles(
    //   screenContext,
    //   screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    //   screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    // );
    const offset = useSharedValue(0);
    const width = useSharedValue(0);
  
    const onLayout = (event) => {
      width.value = event.nativeEvent.layout.width;
    };
  
    const pan = Gesture.Pan()
      .onChange((event) => {
        offset.value += event.changeX;
      })
      .onFinalize((event) => {
        offset.value = withDecay({
          velocity: event.velocityX,
          rubberBandEffect: true,
          clamp: [-(width.value / 2) + SIZE / 2, width.value / 2 - SIZE / 2],
        });
      });
  
    const animatedStyles = useAnimatedStyle(() => ({
      transform: [{ translateX: offset.value }],
    }));
  
    return (
      <GestureHandlerRootView style={styles.container}>
        <View onLayout={onLayout} style={styles.wrapper}>
          <GestureDetector gesture={pan}>
            <Animated.View style={[styles.box, animatedStyles]} />
          </GestureDetector>
        </View>
      </GestureHandlerRootView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    wrapper: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:1
    },
    box: {
      height: SIZE,
      width: SIZE,
      backgroundColor: '#b58df1',
      borderRadius: 20,
      cursor: 'grab',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default SampleComponent