import {View, Text, TouchableOpacity, BackHandler} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createThumbnail} from 'react-native-create-thumbnail';
import RNFS from 'react-native-fs';
import {useScreenContext} from '../../Contexts/ScreenContext';
import VideoPlayerComponent from '../../Components/VideoPlayerComponent/VideoPlayerComponent';
import MenuDrawerButton from '../../Components/MenuDrawerButton/MenuDrawerButton';
import ColorPalette from '../../Assets/Themes/ColorPalette';
import styles from './Style';

const VideoPlayerScreen = ({navigation}) => {
  const screenContext = useScreenContext();
  const [showVideoPlayerComponent, setShowVideoPlayerComponent] =
    useState(false);
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );

  useEffect(() => {
    copyAndCreateThumbnail();
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (showVideoPlayerComponent) {
          setShowVideoPlayerComponent(false);
          return true;
        }
      },
    );
    return () => backHandler.remove();
  }, [showVideoPlayerComponent]);

  const copyAndCreateThumbnail = async () => {
    const assetPath = '../../Assets/Videos/sampleVideo1.mp4';
    const destPath = `${RNFS.DocumentDirectoryPath}/sample-video.mp4`;

    try {
      await RNFS.copyFileAssets(assetPath, destPath);
      createThumbnail({
        timeStamp: 10000,
        url: `file://${destPath}`,
      })
        .then(response => console.log('Thumbnail created:', response))
        .catch(err => console.log('Error creating thumbnail:', err));
    } catch (err) {
      console.log('Error copying file:', err);
    }
  };

  return (
    <View style={screenStyles.canvas}>
      {!showVideoPlayerComponent ? (
        <View>
          <View style={screenStyles.menuButton}>
            <MenuDrawerButton
              navigation={navigation}
              color={ColorPalette.green}
            />
          </View>
          <Text style={screenStyles.heading}>VideoPlayer</Text>
          <TouchableOpacity onPress={() => setShowVideoPlayerComponent(true)}>
            <Text>Play Video</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <VideoPlayerComponent
          setShowVideoPlayerComponent={setShowVideoPlayerComponent}
        />
      )}
    </View>
  );
};

export default VideoPlayerScreen;
