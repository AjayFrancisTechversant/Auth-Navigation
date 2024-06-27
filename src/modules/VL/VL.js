import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useScreenContext} from '../../Contexts/ScreenContext';
import MenuDrawerButton from '../../Components/MenuDrawerButton/MenuDrawerButton';
import ColorPalette from '../../Assets/Themes/ColorPalette';
import ChatIcon from '../../Assets/SVGs/chatIcon.svg';
import CommentsContainer from '../../Components/CommentsContainer/CommentsContainer';
import styles from './Style';

const VL = ({navigation}) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments();
  }, []);
  const fetchComments = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await res.json();
      setComments(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  return (
    <View style={screenStyles.canvas}>
      <View style={screenStyles.MenuDrawerButton}>
        <MenuDrawerButton
          navigation={navigation}
          color={ColorPalette.lightOrange}
        />
      </View>
      <View style={[screenStyles.flexDRow, screenStyles.headingContainer]}>
        <Text style={screenStyles.heading}>Comments</Text>
        <ChatIcon fill={ColorPalette.lightOrange} width={30} height={30} />
      </View>
      <CommentsContainer
        comments={comments}
        loading={loading}></CommentsContainer>
    </View>
  );
};

export default React.memo(VL);
