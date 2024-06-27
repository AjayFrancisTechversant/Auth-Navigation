import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    commentsContainer: {
      backgroundColor: ColorPalette.lightOrange,
      height: screenContext.isPortrait ? height * 0.75 : width * 0.55,
      elevation: 5,
      borderRadius: 20,
      margin: 20,
      overflow: 'hidden',
    },
    emptyComponentContainer: {
      margin: 30,
      alignSelf: 'center',
    },
    emptyComponentText: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    },
    loadingContainer: {
      margin: 30,
      alignSelf: 'center',
    },
    commentCard: {
      borderRadius: 20,
      backgroundColor: 'white',
      padding: 20,
      elevation: 5,
      marginTop: 10,
      marginHorizontal: 10,
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
