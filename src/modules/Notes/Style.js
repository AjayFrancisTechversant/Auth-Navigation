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
      marginTop: 20,
    },
    addNoteButton: {
      position: 'absolute',
      backgroundColor: ColorPalette.green,
      borderRadius: 10,
      height: 50,
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 20,
      right: 20,
      zIndex: 1,
    },

    title: {
      fontSize: 50,
      alignSelf: 'center',
      fontFamily: 'helvetica-light-587ebe5a59211',
    },
    subTitle: {
      alignSelf: 'center',
      marginTop: 10,
      fontFamily: 'helvetica',
      fontSize: 20,
    },
    addNoteContainer: {
      height: 270,
      width: '80%',
      borderWidth: 0.5,
      borderColor: ColorPalette.green,
      elevation: 5,
      backgroundColor: 'white',
      borderRadius: 10,
      alignSelf: 'center',
      marginVertical: 10,
    },

    noItemsToDisplay: {
      marginHorizontal: 50,
      color: ColorPalette.orange,
    },
    titleTextInput: {
      margin: 10,
      backgroundColor: 'white',
    },
    descTextInput: {
      margin: 10,
      backgroundColor: 'white',
      height: 80,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    cancelAddButton: {
      backgroundColor: ColorPalette.red,
      height: 30,
      width: 30,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    saveAddButton: {
      backgroundColor: ColorPalette.green,
      height: 30,
      width: 30,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default styles;
