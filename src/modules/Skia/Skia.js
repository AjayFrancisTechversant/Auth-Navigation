import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './Style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MenuDrawerButton from '../../Components/MenuDrawerButton/MenuDrawerButton';
import ColorPalette from '../../Assets/Themes/ColorPalette';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SkiaEditor from '../../Components/SkiaEditor/SkiaEditor';
import MySkiaProjects from '../../Components/MySkiaProjects/MySkiaProjects';

const Skia = ({navigation}) => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  const [isEditing, setisEditing] = useState(false);
  const [isMyPojectsOpen, setIsMyPojectsOpen] = useState(false);

  return (
    <View style={screenStyles.canvas}>
      {isEditing ? (
        <SkiaEditor setisEditing={setisEditing} />
      ) : 
      isMyPojectsOpen?
<MySkiaProjects setIsMyPojectsOpen={setIsMyPojectsOpen}/>
      :
      (
        <View>
          <Text style={screenStyles.heading}>Skia Editor</Text>
          <View style={screenStyles.menuButton}>
            <MenuDrawerButton
              navigation={navigation}
              color={ColorPalette.green}
            />
          </View>
          <View style={screenStyles.plusButtonImageContainer}>
            <TouchableOpacity onPress={()=>setisEditing(true)}>
              <AntDesign
                name="pluscircleo"
                size={150}
                color={ColorPalette.gray}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>setIsMyPojectsOpen(true)} style={screenStyles.myProjectsButton}>
            <Text style={screenStyles.myProjectsText}>My Projects</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Skia;
