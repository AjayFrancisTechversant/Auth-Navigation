import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    canvas: {backgroundColor: ColorPalette.white},
    linearGradientStyle: {height},
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: height * 0.02,
    },
    headerText: {color: ColorPalette.green},
    coverImage: {
      alignSelf: 'center',
      marginVertical: height * 0.05,
      borderRadius: 5,
    },
    titleAndLikeButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: width * 0.1,
    },
    songTitle: {fontSize: 25, color: ColorPalette.green, fontWeight: 'bold'},
    songSubTitle: {color: ColorPalette.green},
    likeButton: {alignSelf: 'center'},
    playBackButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: width * 0.1,
      alignItems: 'center',
    },
    bottomButtonsSuperContainer: {
      marginHorizontal: width * 0.1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    shareAndPlaylistButtonsContainer: {flexDirection: 'row', gap: width * 0.1},
    lyricsText: {
      color: ColorPalette.green,
      margin: width * 0.1,
      fontWeight: 'bold',
    },
    lyricsBox: {
      height: height * 0.5,
      width: screenContext.isPortrait ? width * 0.9 : height * 0.9,
      backgroundColor: ColorPalette.lightGreen,
      borderRadius: 20,
      alignSelf: 'center',
      marginBottom: height * 0.05,
    },
  });
export default styles;
