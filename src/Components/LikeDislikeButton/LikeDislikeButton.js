import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ColorPalette from '../../Assets/Themes/ColorPalette';
import { useDispatch, useSelector } from 'react-redux';
import { dislike, like } from '../../Slices/LikeSlice';



const LikeDislikeButton = ({userId}) => {
    const likedUsersId=useSelector((state)=>state.Likes.likedUsersId)
    const dispatch=useDispatch()
    const [liked, setLiked] = useState(likedUsersId.includes(userId));

    const handleLike = () => {
        if(liked){
        dispatch(dislike(userId))
        }
        else{
            dispatch(like(userId))
        }
        setLiked(!liked);
        
    };
   
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );


    return (
        <View>
            <TouchableOpacity onPress={handleLike}>
                <MaterialIcons size={30} name={liked?'favorite':'favorite-border'} color={ColorPalette.red}/>
            </TouchableOpacity>

        </View>
    );
};

export default LikeDislikeButton;