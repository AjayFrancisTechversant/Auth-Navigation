import { View, Text } from 'react-native'
import React from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';

const Echarts = () => {
    const screenContext = useScreenContext();
    const screenStyles = styles(
      screenContext,
      screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
      screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
  return (
    <View>
      <Text>Echarts</Text>
    </View>
  )
}

export default Echarts