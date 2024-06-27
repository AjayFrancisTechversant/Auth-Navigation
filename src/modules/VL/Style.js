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
    flexDRow: {
      flexDirection: 'row',
    },
  });
export default styles;
