import { View, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import MenuDrawerButton from '../../Components/MenuDrawerButton/MenuDrawerButton';
import { Text } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ColorPalette from '../../Assets/Themes/ColorPalette';
import SliderButton from '../../Components/SliderButton/SliderButton';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import HomeScreen from '../HomeScreen/HomeScreen';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';


function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}


const Booking = ({ navigation }) => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  const handleSliderSubmit=()=>{
    // Alert.alert('Booking Successfull:)')
    navigation.navigate(HomeScreen)
  }
  const translationY = useSharedValue(0);
  const prevTranslationY = useSharedValue(0);

  const overlapCardAnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateY: translationY.value },
    ],
  }));

  const pan = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      withSpring(prevTranslationY.value = translationY.value)
    })
    .onUpdate((event) => {
      const maxTranslateY = 0;
      const minTranslateY = -screenContext.windowHeight*0.34;

      translationY.value = withSpring(clamp(
        prevTranslationY.value + event.translationY,
        minTranslateY,
        maxTranslateY)
      );
    })
    .runOnJS(true);

  return (
    <View style={screenStyles.wholeContainer}>

      <View style={screenStyles.bgImageContainer}>
        <ImageBackground
          source={require('../../Assets/Images/2GreenCups.jpg')} style={screenStyles.bgImage} imageStyle={screenStyles.bgImageStyle}>
          <View style={screenStyles.menuDrawerButton} ><MenuDrawerButton navigation={navigation} /></View>
        </ImageBackground>
      </View>
          
       
          <Animated.View style={[overlapCardAnimatedStyles,screenStyles.contentsContainer]}>
         
            <View style={screenStyles.contentsSubContainer} >
            <GestureDetector gesture={pan}>
                <View style={screenStyles.titleAndPriceContainer}>
                  <Text style={screenStyles.title}>Forest Camping</Text>
                  <Text style={screenStyles.price}>$299</Text>
                </View>
                </GestureDetector>



                <KeyboardAwareScrollView
          style={screenStyles.scrollView}
          // showsVerticalScrollIndicator={false}
          // fadingEdgeLength={30}
          
        >
                <Text style={screenStyles.location}><Entypo size={20} name='location-pin' />Kecamatan Klojen</Text>
                <Text>
                  <FontAwesome name='star' size={20} color='gold' />
                  <FontAwesome name='star' size={20} color='gold' />
                  <FontAwesome name='star' size={20} color='gold' />
                  <FontAwesome name='star' size={20} color='gold' />
                  <FontAwesome name='star-half-empty' size={20} color='gold' />(4.5)
                </Text>
                <Text style={screenStyles.subTitle}>People</Text>
                <Text style={screenStyles.subText}>Number of people in your group</Text>
                <View style={screenStyles.numberBoxContainer}>
                  <TouchableOpacity style={screenStyles.numberBoxSelected}>
                    <Text>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={screenStyles.numberBoxNotSelected}>
                    <Text>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={screenStyles.numberBoxNotSelected}>
                    <Text>3</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={screenStyles.numberBoxNotSelected}>
                    <Text>4</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={screenStyles.numberBoxNotSelected}>
                    <Text>5</Text>
                  </TouchableOpacity>
                </View>
                <Text style={screenStyles.subTitle}>Description</Text>
                <Text style={screenStyles.subText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Loremscrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem
                </Text>
                </KeyboardAwareScrollView>
            </View>
            
          </Animated.View>
      
      <View style={screenStyles.buttonContainer}>
        <TouchableOpacity style={screenStyles.bookmarkTouchableOpacity} >
          <Ionicons size={25} color={ColorPalette.green} name='bookmark-outline' />
        </TouchableOpacity>
          <SliderButton height={50} width={width*0.4} sliderWidth={50} sliderText={'Slide to Pay'} onPressFn={handleSliderSubmit}/>
      </View>
    </View>
  )
}

export default Booking