import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    button: {
      borderWidth: 1,
      height: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 5,
      borderColor: ColorPalette.green,
    },
    icon: {
      marginLeft: 10,
      color: ColorPalette.green,
    },
    buttonText: {
      marginLeft: 20,
      color: ColorPalette.green,
    },
    rightIcon: {
      marginRight: 20,
      color: ColorPalette.green,
    },
  });
export default styles;
