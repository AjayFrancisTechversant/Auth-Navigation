import { View, Text } from 'react-native'
import React from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';


const RNElements = () => {
    const screenContext = useScreenContext();
    const screenStyles = styles(
      screenContext,
      screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
      screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
  return (
    <View style={screenStyles.canvas}>
      <Text style={screenStyles.mainHeading}>RNElements</Text>
    </View>
  )
}

export default RNElements