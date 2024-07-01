import React, {useCallback, useRef, useState} from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ColorPalette from '../../Assets/Themes/ColorPalette';
import {updateLikes} from '../../Redux/Slices/LikeSlice';

const LikeDislikeButton = ({item}) => {
  const dispatch = useDispatch();
  const likedUsers = useSelector(state => state.Likes.likedUsers);
  const liked = likedUsers.some(i => i.id.value === item.id.value);
  const scaleValue = useRef(new Animated.Value(1)).current;
  const handleLikeDislike = useCallback(() => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    if (liked) {
      //dislike logic
      const tempArray = likedUsers.filter(i => i.id.value != item.id.value);
      dispatch(updateLikes(tempArray));
    } else {
      //like logic
      const tempArray = [...likedUsers, item];
      dispatch(updateLikes(tempArray));
    }
  }, [dispatch, liked, likedUsers, item]);

  return (
    <View>
      <TouchableOpacity onPress={handleLikeDislike}>
        <Animated.View style={{transform: [{scale: scaleValue}]}}>
          <MaterialIcons
            size={30}
            name={liked ? 'favorite' : 'favorite-border'}
            color={ColorPalette.red}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default LikeDislikeButton;
