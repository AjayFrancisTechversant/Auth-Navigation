import {View, Text} from 'react-native';
import React from 'react';
import {useScreenContext} from '../../Contexts/ScreenContext';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Style';

const MySkiaProjects = ({setIsMyPojectsOpen}) => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  return (
    <View style={screenStyles.canvas}>
          <TouchableOpacity onPress={()=>setIsMyPojectsOpen(false)} style={screenStyles.goBackButton}>
<AntDesign name='left' size={30} color={ColorPalette.black} />
      </TouchableOpacity>
      <Text>MySkiaProjects</Text>
    </View>
  );
};

export default MySkiaProjects;
