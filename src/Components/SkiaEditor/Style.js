import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    canvas: {
      backgroundColor: ColorPalette.white,
      flex: 1,
    },
    goBackButton: {
      position: 'absolute',
      top: height * 0.02,
      left: height * 0.02,
      zIndex: 1,
    },
    canvasSkiaContainer: {
      borderWidth: 1,
      flex: 1,
    },
    undoButton: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      top: 20,
      right: 20,
    },
  });
export default styles;
