import React, { useState } from 'react';
import { View,  TouchableOpacity } from 'react-native';
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ColorPalette from '../../Assets/Themes/ColorPalette';
import { addFriend, removeFriend } from '../../Redux/Slices/AddFriendSlice';
import { useDispatch, useSelector } from 'react-redux';



const AddFriendButton = ({item}) => {
    const dispatch=useDispatch()
    const addedFriends=useSelector((state)=>state.AddFriend.addedFriends)
    const [friendAdded, setFriendAdded] = useState(addedFriends.some(i=>i.id.value==item.id.value));
    const handleAddFriend = () => {
        if(friendAdded){
            dispatch(removeFriend(item))
            }
            else{
                dispatch(addFriend(item))
            }
        setFriendAdded(!friendAdded);

    };
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );


    return (
        <View>
            <TouchableOpacity onPress={handleAddFriend}>
                <FontAwesome5 name={friendAdded?'user-check':'user-plus'} color={ColorPalette.blue} size={30} />
            </TouchableOpacity>
        </View>
    );
};

export default AddFriendButton;