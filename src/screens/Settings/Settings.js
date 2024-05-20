import { View, Text } from 'react-native'
import React from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import MenuDrawerButton from '../../Components/MenuDrawerButton/MenuDrawerButton';
import LinearGradient from 'react-native-linear-gradient';
import ColorPalette from '../../Assets/Themes/ColorPalette';


const Settings = ({ navigation }) => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  return (
    <View style={screenStyles.canvas}>
      <MenuDrawerButton navigation={navigation} />

      <Text>Settings</Text>
      <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
        
        colors={[ColorPalette.green,'white']}
        style={screenStyles.linearGradient}>
        <Text >
          gradient
        </Text>
      </LinearGradient>
    </View>
  )
}

export default Settings