import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    canvas: {
      backgroundColor:ColorPalette.black,
      flex: 1,
    },
    headerContents:{margin:20,flexDirection:'row',justifyContent:'space-between'},
    
    canvasSkiaContainer: {alignSelf:'center',
      borderWidth: 1,
      height: screenContext.isPortrait ? height * 0.7 : width * 0.8,
      width: screenContext.isPortrait ? width * 0.9 : height * 0.6,
      borderColor:ColorPalette.gray,borderRadius:5
      
    },
    canvasSkia: {flex: 1},
    toolsContainer:{flexDirection:'row',gap:width*0.03,borderWidth:2,borderRadius:10,margin:height*0.02,alignSelf:'center',padding:height*0.01,borderColor:ColorPalette.white}
  });
export default styles;
