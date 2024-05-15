import React, { useState } from 'react';
import { View,  TouchableOpacity } from 'react-native';
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ColorPalette from '../../Assets/Themes/ColorPalette';



const AddFriendButton = () => {
    const [friendAdded, setFriendAdded] = useState(false);

    const handleAddFriend = () => {
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