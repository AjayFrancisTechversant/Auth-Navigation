import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    canvas: {backgroundColor: 'white', flex: 1},
    canvasSkiaContainer:{borderWidth:1,flex:1/2},
    canvasSkia: {height: '100%', width},
    canvasSkia2: {height: '100%', width},
    undoButton:{position:'absolute',alignItems:'center',justifyContent:'center',borderRadius:10,top:20,right:20},

  });
export default styles;
