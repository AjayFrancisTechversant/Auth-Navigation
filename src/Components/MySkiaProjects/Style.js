import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    canvas:{flex:1,backgroundColor:ColorPalette.white},
    goBackButton: {
      position: 'absolute',
      top: height * 0.02,
      left: height * 0.02,
      zIndex: 1,
    },
  });
export default styles;
