import {StyleSheet, Platform} from 'react-native';
import StaticVariables from '../../../preference/StaticVariables';
import {Colors} from '../../../theme/Colors';

const font = Platform.OS === StaticVariables.PLATFORM_ANDROID ? 'Roboto' : null;

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    outerContainer: {
      marginHorizontal: width * 0.09,
      marginTop: height * 0.03,
      marginBottom: height * 0.02,
    },
    mainTextbox: {
      paddingVertical: 5,
    },
    selectionContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    checkBox: {
      backgroundColor: Colors.theme.backgroundPrimary,
      borderColor: Colors.theme.backgroundPrimary,
      paddingLeft: 0,
      marginLeft: 3,
    },
    sectionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    leftSection: {
      flex: 1,
    },
    rightSection: {
      flex: 1,
      alignItems: 'flex-end',
      marginRight: 3,
    },
    sectionText: {
      color: Colors.theme.appPrimary,
      fontSize:
        (screenContext.isTypeTablet ? 21 : 15) / screenContext.windowFontScale,
      fontFamily: font,
    },
    loginHelp: {
      fontSize:
        (screenContext.isTypeTablet ? 20 : 14) / screenContext.windowFontScale,
    },
    orText: {
      color: Colors.name.black,
      fontSize:
        (screenContext.isTypeTablet ? 20 : 14) / screenContext.windowFontScale,
      fontWeight: '600',
      fontFamily: font,
      textAlign: 'center',
    },
    buttonContainer: {
      marginVertical: height * 0.01,
      height: height * 0.07,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      borderRadius: width * 0.02,
      backgroundColor: Colors.name.lightGreen,
    },
    codeButtonColor: {
      backgroundColor: Colors.theme.appSecondary,
    },
    buttonText: {
      color: Colors.theme.backgroundPrimary,
      fontSize:
        (screenContext.isTypeTablet ? 22 : 16) / screenContext.windowFontScale,
      fontWeight: 'bold',
      fontFamily: font,
    },
    checkBoxTitle: {
      fontSize:
        (screenContext.isTypeTablet ? 21 : 15) / screenContext.windowFontScale,
      fontWeight: 'normal',
      fontFamily: font,
    },
    textInputContainer: {
      fontSize:
        (screenContext.isTypeTablet ? 18 : 12) / screenContext.windowFontScale,
      fontFamily: font,
      lineHeight: height * 0.025,
      color: Colors.name.black,
    },
    textInputIOSContainer: {
      fontSize:
        (screenContext.isTypeTablet ? 18 : 12) / screenContext.windowFontScale,
      fontFamily: font,
      height: height * 0.065,
      color: Colors.name.black,
    },
  });

export default styles;
