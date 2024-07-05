import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    canvas: {flex: 1, backgroundColor: ColorPalette.white},
    menuButton: {position: 'absolute', top: height * 0.01, left: height * 0.01},
    heading:{fontSize:20,fontWeight:'bold',alignSelf:'center',margin:height*0.01}
  });
export default styles;
