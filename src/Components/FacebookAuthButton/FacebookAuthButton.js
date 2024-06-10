import React from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import { Image, TouchableOpacity } from 'react-native';


const FacebookAuthButton = () => {

    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
  return (
    <TouchableOpacity  style={screenStyles.logoContainer}>
    <Image style={screenStyles.facebookLogo} source={require('../../Assets/Images/Facebook-Logo.png')} />
</TouchableOpacity>
  )
}

export default FacebookAuthButton