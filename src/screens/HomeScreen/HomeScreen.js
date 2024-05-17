import { View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';

import MenuDrawerButton from '../../Components/MenuDrawerButton/MenuDrawerButton';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Card from '../../Components/Card/Card';

const HomeScreen = ({ navigation }) => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
 
  return (
    <View style={screenStyles.canvas}>
      <View style={screenStyles.container}>
        <View style={screenStyles.headerContainer}>
          <View style={screenStyles.headerContents}>
            <TouchableOpacity>
              <Image
                style={screenStyles.logo}
                source={require('../../Assets/Images/Logo/NetFriends_logo_with_sidelabel.png')}
              />
            </TouchableOpacity>
            <MenuDrawerButton navigation={navigation} />
          </View>
        </View>
          <SearchBar/>
      <View >
          
      </View>
      </View>
    </View>
  )
}

export default HomeScreen