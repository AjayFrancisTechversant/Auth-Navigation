import { Text, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import React from 'react'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
    Easing
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

const SliderButton = ({height,width,sliderWidth,sliderText,onPressFn}) => {
    const translationX = useSharedValue(0);
    const prevTranslationX = useSharedValue(0);
    //foll.  should be passed as props 
    const screenStyles = styles(height, width, sliderWidth);
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            { translateX: translationX.value },
        ],
    }));
    const pan = Gesture.Pan()
        .minDistance(1)
        .onStart(() =>
            prevTranslationX.value = translationX.value
        )
        .onUpdate((event) => {
            const maxTranslateX = width - sliderWidth - 5
            const minTranslateX = 0

            translationX.value = withSpring(clamp(
                prevTranslationX.value + event.translationX,
                minTranslateX,
                maxTranslateX
            ))
            if (translationX.value > width * 0.75) {
                onPressFn()
                translationX.value=withTiming(0,{duration:500,easing: Easing.bounce})
            }
        })
        .onEnd(() => {
                translationX.value=withTiming(0,{duration:500,easing: Easing.bounce})
        })
        .runOnJS(true)
    return (
        <View style={screenStyles.container}>
            <Text style={screenStyles.sliderText} >{sliderText}</Text>
            <GestureHandlerRootView>
                <GestureDetector gesture={pan}>
                    <Animated.View style={[animatedStyles, screenStyles.slider]}>
                        <Feather style={screenStyles.sliderIcon} name='chevrons-right' size={height*0.4}/>
                    </Animated.View>
                </GestureDetector>

            </GestureHandlerRootView>
        </View>
    );
}


export default SliderButton