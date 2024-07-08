import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useScreenContext} from '../../Contexts/ScreenContext';
import MenuDrawerButton from '../../Components/MenuDrawerButton';
import ColorPalette from '../../Assets/Themes/ColorPalette';
import ChatIcon from '../../Assets/SVGs/chatIcon.svg';
import CommentsContainer from '../../Components/CommentsContainer';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllComments} from '../../Redux/Slices/CommentsSlice';
import styles from './Style';
import AddCommentButton from '../../Components/AddCommentButton';

const CommentsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {comments, loading, error} = useSelector(state => state.Comments);
  useEffect(() => {
    fetchInitialComments();
  }, []);

  const fetchInitialComments = async () => {
    try {
      await dispatch(fetchAllComments());
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddComment = () => {
    try {
      //
    } catch (error) {
      console.log(error);
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
      <View style={screenStyles.plusButtonContainer}>
        <AddCommentButton/>
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

export default React.memo(CommentsScreen);
