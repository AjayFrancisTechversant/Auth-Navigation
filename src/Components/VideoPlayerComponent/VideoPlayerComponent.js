import {View, Alert, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import Video from 'react-native-video';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './Style';

const VideoPlayerComponent = ({setShowVideoPlayerComponent}) => {
  const videoRef = useRef(null);
  const videoLocal = require('../../Assets/Videos/sampleVideo1.mp4');

  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  const onBuffer = () => {
    // console.log('buffering');
  };

  const onError = () => {
    Alert.alert('Error Occured');
  };

  return (
    <View style={screenStyles.videoPlayerContainer}>
      <TouchableOpacity
        style={screenStyles.backButton}
        onPress={() => setShowVideoPlayerComponent(false)}>
        <AntDesign name="left" size={30} color={ColorPalette.green} />
      </TouchableOpacity>
      <Video
        paused
        repeat
        // Can be a URL or a local file.
        source={videoLocal}
        // Store reference
        ref={videoRef}
        // Callback when remote video is buffering
        onBuffer={onBuffer}
        // Callback when video cannot be loaded
        onError={onError}
        style={screenStyles.VideoPlayer}
        controls
      />
    </View>
  );
};

export default React.memo(VideoPlayerComponent);
