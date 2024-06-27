import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    commentsContainer: {
      backgroundColor: ColorPalette.lightOrange,
      height: screenContext.isPortrait ? height * 0.75 : width * 0.55,
      elevation: 5,
      borderRadius: 20,
      margin: height*0.0250,
      overflow: 'hidden',
    },
    emptyComponentContainer: {
      margin: height*0.0376,
      alignSelf: 'center',
    },
    emptyComponentText: {
      color: ColorPalette.white,
      fontSize: 15,
      fontWeight: 'bold',
    },
    loadingContainer: {
      margin: height*0.0376,
      alignSelf: 'center',
    },
    commentCard: {
      borderRadius: 20,
      backgroundColor: 'white',
      padding: height*0.25,
      elevation: 5,
      marginTop: height*0.0125,
      marginHorizontal: width*0.0243,
    },
    separator: {
      height: 5,
    },
    commentTitle: {
      fontWeight: 'bold',
      color: ColorPalette.lightOrange,
    },
  });
export default styles;
