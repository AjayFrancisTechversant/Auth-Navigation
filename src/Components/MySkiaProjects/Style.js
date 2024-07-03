import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    canvas: {flex: 1, backgroundColor: ColorPalette.white},
    goBackButton: {
      position: 'absolute',
      top: height * 0.02,
      left: height * 0.02,
      zIndex: 1,
    },
    heading: {
      fontSize: 30,
      alignSelf: 'center',
      fontWeight: 'bold',
      margin: height * 0.01,
    },
    card:{borderRadius:10,elevation:5,backgroundColor:ColorPalette.white,margin:height*0.01,
      width:screenContext.isPortrait?width*0.45:height*0.23,
    },
    imageThumbnail: {
      width:screenContext.isPortrait?width*0.45:height*0.23,
      height: height / 4,
    },
   
  });
export default styles;
