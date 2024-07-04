import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    canvas: {flex: 1, backgroundColor: ColorPalette.white},
    pdfView:{flex:1,margin:height*0.01,}
  });
export default styles;
