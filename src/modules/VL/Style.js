import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    canvas: {
      flex: 1,
      backgroundColor: 'white',
    },
    MenuDrawerButton: {
      position: 'absolute',
      left: 20,
      top: 20,
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headingContainer: {
      justifyContent: 'center',
      margin: height*0.0250,
      gap: 10,
    },
    commentsContainer: {
      backgroundColor: ColorPalette.lightOrange,
      height: screenContext.isPortrait ? height * 0.75 : width * 0.55,
      elevation: 5,
      borderRadius: 20,
      margin: height*0.0250,
    },
    flexDRow: {
      flexDirection: 'row',
    },
  });
export default styles;
