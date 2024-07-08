import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    commentCard: {
      borderRadius: 20,
      backgroundColor: 'white',
      padding: height * 0.025,
      elevation: 5,
      marginTop: height * 0.0125,
      marginHorizontal: width * 0.0243,
    },
    commentTitle: {
      fontWeight: 'bold',
      color: ColorPalette.lightOrange,
    },
    modalFullScreenBackground: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: ColorPalette.transBlack,
    },
    userContainer: {
      alignSelf: 'center',
      width: screenContext.isPortrait ? width * 0.8 : height * 0.7,
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: height * 0.03,
    },
    closeButton: {position: 'absolute', right: 10, top: 10},
    title: {
      fontSize: 15,
      color: ColorPalette.green,
      fontFamily: 'Helvetica-Bold',
    },
    descContainer: {
      alignItems: 'center',
      marginBottom: height * 0.01,
    },
  });
export default styles;
