import {StyleSheet} from 'react-native';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    wholeContainer: {
      alignItems: 'center',
      flex: 1,
    },
    bgImageContainer: {
      paddingTop: 10,
      width: screenContext.isPortrait ? width : height,
      alignItems: 'center',
    },
    bgImage: {
      height: height * 0.45,
      width: screenContext.isPortrait ? width * 0.92 : height * 0.94,
    },
    bgImageStyle: {
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
    },
    scrollView: {
      marginBottom: 0,
      height: screenContext.isPortrait ? height * 0.71 : width * 0.45,
    },
    contentsContainer: {
      marginHorizontal: 10,
      marginTop: -height * 0.03,
      height: height * 0.75,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      backgroundColor: 'white',
      paddingBottom: 0,
    },
    contentsSubContainer: {
      margin: 20,
      justifyContent: 'space-between',
    },
    titleAndPriceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: -20,
      paddingHorizontal: 20,
      paddingTop: 10,
      marginTop: -20,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
    },
    title: {
      fontSize: 40,
      fontFamily: 'Helvetica-Bold',
      width: 200,
    },
    price: {
      fontSize: 20,
      color: ColorPalette.green,
      fontFamily: 'Helvetica-Bold',
    },
    location: {
      color: ColorPalette.green,
      fontSize: 20,
      fontFamily: 'Helvetica-Bold',
    },
    subTitle: {
      fontSize: 20,
      fontFamily: 'Helvetica-Bold',
    },
    subText: {
      fontFamily: 'Helvetica-Bold',
      color: 'gray',
    },
    numberBoxContainer: {
      marginVertical: 10,
      flexDirection: 'row',
    },
    numberBoxSelected: {
      marginHorizontal: 5,
      height: 30,
      width: 30,
      backgroundColor: ColorPalette.green,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    numberBoxNotSelected: {
      marginHorizontal: 5,
      height: 30,
      width: 30,
      backgroundColor: ColorPalette.lightGreen,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
      position: 'absolute',
      bottom: -5,
      backgroundColor: 'white',
    },
    bookmarkTouchableOpacity: {
      height: 50,
      width: width * 0.15,
      borderWidth: 1,
      borderColor: ColorPalette.green,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default styles;
