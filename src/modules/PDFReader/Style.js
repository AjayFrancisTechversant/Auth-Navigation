import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    canvas: {flex: 1, backgroundColor: ColorPalette.white},
    pdfView: {flex: 1, margin: height * 0.01},
    backButton: {position: 'absolute', top: height * 0.01, left: height * 0.01,zIndex:2},
  });
export default styles;
