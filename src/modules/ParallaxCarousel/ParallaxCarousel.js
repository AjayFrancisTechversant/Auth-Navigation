import { View, Text } from 'react-native'
import React from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';

const ParallaxCarousel = () => {
    const screenContext = useScreenContext();
    const screenStyles = styles(
      screenContext,
      screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
      screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
  return (
    <View>
      <Text>ParallaxCarousel</Text>
    </View>
  )
}

export default ParallaxCarousel