import { Text, View } from 'react-native'
import React from 'react'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withDecay,
    withSpring,
} from 'react-native-reanimated';
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';
import styles from './Style';

function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }

const SlidingButton = () => {
    const translationX = useSharedValue(0);
    const prevTranslationX = useSharedValue(0);
    //height,width,sliderWidth should be passed as props 
    const height=70
    const width=350
    const sliderWidth=70
    
    const screenStyles = styles(height,width,sliderWidth);
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
          { translateX: translationX.value },
        ],
      }));

    const pan = Gesture.Pan()
        .minDistance(1)
        .onStart(()=>
            prevTranslationX.value=translationX.value
        )
       
        .onUpdate((event) => {
            const maxTranslateX = width-sliderWidth-5
            const  minTranslateX = 0

            translationX.value = withSpring(clamp(
                prevTranslationX.value + event.translationX,
                minTranslateX,
                maxTranslateX
              ))
          })
          
        .activateAfterLongPress(5000)
        .runOnJS(true)
        

    return (
        <View style={screenStyles.container}>
            <GestureHandlerRootView>
                <GestureDetector gesture={pan}>
                    <Animated.View style={[animatedStyles,screenStyles.slider]}>
                        <Text>Slider</Text>
                    </Animated.View>
                </GestureDetector>

            </GestureHandlerRootView>
        </View>
    );
}


export default SlidingButton