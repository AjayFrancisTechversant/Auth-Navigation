import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    canvas: {
      flex: 1,
    },
    bgImage: {
      height: '100%',
    },
    BlurViewContainer: {
      overflow: 'hidden',
      position: 'absolute',
      alignSelf: 'center',
      borderRadius: 20,
      width: width * 0.8,
      bottom: 40,
      elevation: 20,
      height: screenContext.isPortrait ? 'auto' : 200,
      borderWidth: 2,
      borderColor: ColorPalette.transWhite,
    },
    MenuDrawerButton: {
      position: 'absolute',
      top: 30,
      left: 30,
    },
    whiteText: {
      color: ColorPalette.white,
    },

    currentLocationButtonContainer: {
      overflow: 'hidden',
      position: 'absolute',
      borderRadius: 20,
      bottom: 30,
      right: 30,
      elevation: 20,
      borderWidth: 1,
      borderColor: ColorPalette.transWhite,
    },
    currentLocationButton: {
      height: 60,
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainHeading: {
      fontSize: 40,
      fontWeight: 'bold',
      color: ColorPalette.white,
      alignSelf: 'center',
      margin: 20,
      fontFamily: 'Helvetica',
    },
    subHeading: {
      fontSize: 20,
      margin: 30,
    },
    text: {
      marginVertical: 5,
      marginLeft: 20,
    },
    closeButton: {
      position: 'absolute',
      right: 10,
      top: 10,
    },
    openMapsButton: {
      borderRadius: 20,
      backgroundColor: 'rgba(255,255,255,0.2)',
      width: 200,
      alignSelf: 'center',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      flexDirection: 'row',
      gap: 5,
    },
    openMapsText: {color: ColorPalette.white},
  });
export default styles;
