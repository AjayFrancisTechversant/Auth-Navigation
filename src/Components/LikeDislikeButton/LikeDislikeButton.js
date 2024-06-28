import React, {useCallback, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ColorPalette from '../../Assets/Themes/ColorPalette';
import {updateLikes} from '../../Redux/Slices/LikeSlice';

const LikeDislikeButton = ({item}) => {
  const dispatch = useDispatch();
  const likedUsers = useSelector(state => state.Likes.likedUsers);
  const liked = likedUsers.some(i => i.id.value === item.id.value);
  const handleLikeDislike = useCallback(
    () => {
      if (liked) {
        //dislike logic
        const tempArray=likedUsers.filter(i=>i.id.value!=item.id.value)
        dispatch(updateLikes(tempArray));
      } else {
        //like logic
        const tempArray=[...likedUsers,item]
        dispatch(updateLikes(tempArray));
      }
    },
    [dispatch,liked,likedUsers,item],
  )
 

  return (
    <View>
      <TouchableOpacity onPress={handleLikeDislike}>
        <MaterialIcons
          size={30}
          name={liked ? 'favorite' : 'favorite-border'}
          color={ColorPalette.red}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LikeDislikeButton;
