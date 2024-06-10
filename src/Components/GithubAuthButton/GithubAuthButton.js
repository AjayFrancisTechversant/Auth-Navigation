import React from 'react'
import styles from './Style';
import { useScreenContext } from '../../Contexts/ScreenContext';
import { Image, TouchableOpacity } from 'react-native';


const GithubAuthButton = () => {
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    return (
        <TouchableOpacity style={screenStyles.logoContainer}>
            <Image style={screenStyles.GithubLogo} source={require('../../Assets/Images/Github-Logo.png')} />
        </TouchableOpacity>
    )
}

export default GithubAuthButton