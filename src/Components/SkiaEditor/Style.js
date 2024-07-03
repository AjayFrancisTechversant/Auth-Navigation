import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    canvas: {
      backgroundColor: ColorPalette.black,
      flex: 1,
    },
    headerContents: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    canvasSkiaContainer: {
      alignSelf: 'center',
      height: screenContext.isPortrait ? height * 0.7 : width * 0.8,
      width: screenContext.isPortrait ? width * 0.9 : height * 0.6,   
      borderRadius: 5,backgroundColor:ColorPalette.white
    },
    canvasSkia: {flex: 1},
    toolsContainer: {
      flexDirection: 'row',
      gap: width * 0.03,
      borderWidth: 2,
      borderRadius: 10,
      margin: height * 0.02,
      alignSelf: 'center',
      padding: height * 0.01,
      borderColor: ColorPalette.white,
    },
    modalFullScreenBackground: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: ColorPalette.transBlack,
    },
    modalView:{alignSelf:'center',justifyContent:'center',position:'absolute',bottom:height*0.2,},
    colorPreviewStyle:{margin:height*0.01,alignSelf:'center',width:width*0.1,height:width*0.1,borderRadius:10},
    colorSliderStyle:{width:width*0.7,margin:height*0.01},
    ModalOKButton:{height:height*0.05,width:width*0.4,backgroundColor:ColorPalette.white,justifyContent:'center',alignItems:'center',borderRadius:10,alignSelf:'center',margin:height*0.02},
    OKText:{color:ColorPalette.black}
  });
export default styles;
