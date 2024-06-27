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
      margin: 20,
    },
    headerContainer: {
      flexDirection: 'row',
      height: 200,
      justifyContent: 'flex-end',
      marginBottom: -70,
    },
    BGImageStyle: {
      borderRadius: 10,
    },

    logoutIcon: {
      color: ColorPalette.green,
      margin: 20,
    },
    editContainer: {
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      borderColor: ColorPalette.green,
    },
    textInput: {
      marginVertical: 5,
      width: width * 0.6,
    },
    editBoxTitle: {
      alignSelf: 'center',
    },
    editButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 10,
    },
    cancelEditButton: {
      backgroundColor: ColorPalette.red,
      height: 30,
      width: 30,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    saveEditButton: {
      backgroundColor: ColorPalette.green,
      height: 30,
      width: 30,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    //userDetails
    userDetailsContainer: {
      marginVertical: 20,
      alignItems: 'center',
    },
    profilePicture: {
      height: 150,
      width: 150,
      borderRadius: 100,
    },
    username: {
      fontSize: 30,
      fontFamily: 'Helvetica-Bold',
    },
    // 3IconContainer
    threeIconContainer: {
      flexDirection: 'row',
      marginVertical: 20,
      borderColor: 'blue',
    },
    threeIconButton: {
      flex: 1 / 3,
      alignItems: 'center',
    },
    threeIconTitle: {
      fontFamily: 'Rajdhani-Medium',
    },
    threeIconSubtitle: {
      alignSelf: 'center',
      fontFamily: 'Rajdhani-Bold',
    },

    OptionCardContainer: {
      marginHorizontal: screenContext.isPortrait ? 20 : 100,
    },
  });
export default styles;
