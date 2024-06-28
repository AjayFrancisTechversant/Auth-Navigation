import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ColorPalette from '../../Assets/Themes/ColorPalette';
import {updateFriends} from '../../Redux/Slices/AddFriendSlice';

const AddFriendButton = ({item}) => {
  const dispatch = useDispatch();
  const addedFriends = useSelector(state => state.AddFriend.addedFriends);
  const friendAdded = addedFriends.some(i => i.id.value === item.id.value);
  const handleAddFriend = () => {
    if (friendAdded) {
      //remove logic
      const tempArray = addedFriends.filter(i => i.id.value != item.id.value);
      dispatch(updateFriends(tempArray));
    } else {
      //add logic
      const tempArray = [...addedFriends, item];
      dispatch(updateFriends(tempArray));
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleAddFriend}>
        <FontAwesome5
          name={friendAdded ? 'user-check' : 'user-plus'}
          color={ColorPalette.blue}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddFriendButton;
