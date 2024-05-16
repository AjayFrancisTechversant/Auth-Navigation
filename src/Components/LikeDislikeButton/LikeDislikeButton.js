import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ColorPalette from '../../Assets/Themes/ColorPalette';
import { useDispatch, useSelector } from 'react-redux';
import { dislike, like } from '../../Slices/LikeSlice';



const LikeDislikeButton = ({item}) => {
    const likedUsers=useSelector((state)=>state.Likes.likedUsers)
    const dispatch=useDispatch()
    const [liked, setLiked] = useState(likedUsers.some(i=>i.id.value==item.id.value));

    const handleLikeDislike = () => {
        if(liked){
        dispatch(dislike(item))
        }
        else{
            dispatch(like(item))
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
            <TouchableOpacity onPress={handleLikeDislike}>
                <MaterialIcons size={30} name={liked?'favorite':'favorite-border'} color={ColorPalette.red}/>
            </TouchableOpacity>

        </View>
    );
};

export default LikeDislikeButton;