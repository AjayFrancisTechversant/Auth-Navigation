import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    card: {
      borderRadius: 10,
      borderColor: ColorPalette.green,
      borderWidth: 0.5,
      width: '80%',
      alignSelf: 'center',
      marginVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      elevation: 10,
      backgroundColor: 'white',
    },
    title: {
      fontSize: 25,
    },
    button: {
      margin: 2,
    },
  });
export default styles;
