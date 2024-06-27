import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
      borderRadius: 10,
      elevation: 5,
      backgroundColor: 'white',
    },
    image: {
      height: height*0.11,
      margin: height*0.012,
      alignSelf: 'center',
      borderRadius: 80,
      flex: 1 / 4,
    },
    detailsContainer: {
      flex: 2 / 4,
      alignSelf: 'center',
    },
    title: {
      fontSize: 15,
      color: ColorPalette.green,
      fontFamily: 'Helvetica-Bold',
    },
    buttonsContainer: {
      flex: 1 / 4,
      justifyContent: 'space-evenly',
      alignItems: 'center',
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
      borderWidth: 0.5,
      backgroundColor: 'white',
      borderRadius: 10,
      marginVertical: height*0.01,
    },
    modalImage: {
      height: height*0.118,
      width: height*0.118,
      borderRadius: 10,
    },
    modalButtonsContainer: {
      flexDirection: 'row',
      width: height*0.118,
      justifyContent: 'space-evenly',
      marginVertical: height*0.01,
    },
    descContainer: {
      alignItems: 'center',
      marginBottom: height*0.01,
    },
  });
export default styles;
