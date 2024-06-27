import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    canvas: {
      backgroundColor: 'white',
      flex: 1,
    },
    container: {
      flex: 1,
      marginHorizontal: screenContext.isPortrait ? width * 0.1 : width * 0.3,
      marginTop: 50,
    },
    heading: {
      fontSize: 50,
      alignSelf: 'center',
    },
    textInput: {
      marginVertical: 15,
    },
    button: {
      alignSelf: 'center',
      width: 100,
      alignItems: 'center',
      backgroundColor: ColorPalette.green,
      borderRadius: 10,
    },
    buttonText: {
      padding: 10,
      color: ColorPalette.white,
      fontSize: 18,
    },
    lastViewContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 10,
    },
    greenUnderlinetext: {
      color: ColorPalette.green,
      textDecorationLine: 'underline',
    },
    selfAlignCenter: {
      alignSelf: 'center',
    },
    AlllogoContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 30,
    },
    eachLogoContainer: {
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    facebookLogo: {
      height: 30,
      width: 30,
      margin: 5,
    },
  });
export default styles;
