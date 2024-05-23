import { View, ImageBackground, TouchableOpacity } from 'react-native'
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


const Booking = ({ navigation }) => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );

  return (
    <View>

      <View style={screenStyles.bgImageContainer}>
        <ImageBackground
          source={require('../../Assets/Images/2GreenCups.jpg')} style={screenStyles.bgImage} imageStyle={screenStyles.bgImageStyle}>
          <View style={screenStyles.menuDrawerButton} ><MenuDrawerButton navigation={navigation} /></View>
        </ImageBackground>
      </View>
      <View style={screenStyles.transparentView}>

      </View>
      <KeyboardAwareScrollView
        style={screenStyles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={screenStyles.contentsContainer}>
          <View style={screenStyles.contentsSubContainer} >
            <View>
              <View style={screenStyles.titleAndPriceContainer}>
                <Text style={screenStyles.title}>Forest Camping</Text>
                <Text style={screenStyles.price}>$299</Text>
              </View>
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
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={screenStyles.buttonContainer}>
        <TouchableOpacity style={screenStyles.bookmarkTouchableOpacity} >
          <Ionicons size={25} color={ColorPalette.green} name='bookmark-outline' />
        </TouchableOpacity>
        <TouchableOpacity style={screenStyles.slideTouchableOpacity} >
          <Text>Slide</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Booking