import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ColorPalette from '../../Assets/Themes/ColorPalette';



const Card = ({ index, item, handleDeleteNote }) => {
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    console.log(item);
    return (
        <>
            <View style={screenStyles.card}>
                <View style={screenStyles.titleAndDescContainer}>
                    <Text style={screenStyles.title} >{item.title}</Text>
                    <Text style={screenStyles.desc}>{item.desc}</Text>
                </View>
               <View style={screenStyles.buttonsContainer}>
                    <TouchableOpacity style={screenStyles.button} onPress={() => handleDeleteNote(item.id)} >
                        <MaterialIcons name='delete' size={30} color={'red'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={screenStyles.button}>
                    <MaterialIcons name='edit' size={30} color={ColorPalette.yellow} />
                    </TouchableOpacity>
               </View>

            </View>
        </>
    )
}

export default Card

