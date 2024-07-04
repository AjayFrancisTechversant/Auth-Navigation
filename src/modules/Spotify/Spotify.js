import { View, Text } from 'react-native'
import React from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import SpotifyPlayer from '../../Components/SpotifyPlayer/SpotifyPlayer';

const Spotify = () => {
    const screenContext = useScreenContext();
    const screenStyles = styles(
      screenContext,
      screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
      screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
  return (
    <View>
      <SpotifyPlayer/>
    </View>
  )
}

export default Spotify