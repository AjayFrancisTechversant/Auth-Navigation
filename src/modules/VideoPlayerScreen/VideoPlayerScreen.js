import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createThumbnail} from 'react-native-create-thumbnail';
import RNFS from 'react-native-fs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useScreenContext} from '../../Contexts/ScreenContext';
import VideoPlayerComponent from '../../Components/VideoPlayerComponent/VideoPlayerComponent';
import MenuDrawerButton from '../../Components/MenuDrawerButton/MenuDrawerButton';
import ColorPalette from '../../Assets/Themes/ColorPalette';
import styles from './Style';

const VideoPlayerScreen = ({navigation}) => {
  const [showVideoPlayerComponent, setShowVideoPlayerComponent] =
    useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );

  useEffect(() => {
    downloadAVideo();
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

  const downloadAVideo = async () => {
    const filePath = `${RNFS.DocumentDirectoryPath}/sampleVideo.pdf`;
    const fileExists = await RNFS.exists(filePath);

    if (fileExists) {
      //
    } else {
      try {
        const options = {
          fromUrl:
            'https://www.pexels.com/download/video/3209828/?fps=25.0&h=1080&w=1920',
          toFile: filePath,
        };
        setIsDownloading(true);
        await RNFS.downloadFile(options).promise;
        setIsDownloading(false);
      } catch (error) {
        Alert.alert('Download failed', error.message);
        console.log(error);
      }
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
          <View style={screenStyles.thumbnailButtonContainer}>
            {isDownloading ? (
              <ActivityIndicator color={ColorPalette.green} size={50} />
            ) : (
              <TouchableOpacity
                onPress={() => setShowVideoPlayerComponent(true)}>
                <Ionicons
                  name="play-circle"
                  color={ColorPalette.green}
                  size={80}
                />
              </TouchableOpacity>
            )}
          </View>
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
