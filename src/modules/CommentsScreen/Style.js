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
      left: height * 0.025,
      top: height * 0.025,
    },
    plusButton: {
      position: 'absolute',
      right: height * 0.025,
      top:height*0.025
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headingContainer: {
      justifyContent: 'center',
      margin: height * 0.025,
      gap: height * 0.01,
    },
    flexDRow: {
      flexDirection: 'row',
    },
  });
export default styles;
