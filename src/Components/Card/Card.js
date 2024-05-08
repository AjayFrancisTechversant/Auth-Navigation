import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const Card = ({ index, item, handleDelete, Component }) => {
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    return (
        <>
            {Component == 'Listing' ? <View style={screenStyles.itemContainer}>
    
                <View style={screenStyles.imageContainer} >
                    <Image
                        style={screenStyles.image}
                        source={{ uri: item.uri }}
                    />
                </View>
                <View style={screenStyles.titleandDescContainer}>
                    <Text style={screenStyles.itemTitle} >{item.title}</Text>
                    <Text >{item.desc}</Text>
                </View>
                <View style={screenStyles.deleteContainer}>
                    <TouchableOpacity onPress={() => handleDelete(index)} >
                        <View style={screenStyles.deleteButton}>
                            <Text ><MaterialIcons name='delete' size={30} color={'red'} /></Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            :
            <View style={screenStyles.button}>
            <Text style={screenStyles.buttonText}>{item.title}</Text>
        </View>}
        </>
    )
}

export default Card

{/* <View style={screenStyles.itemContainer}>
                        
<View style={screenStyles.imageContainer} >
    <Image 
        style={screenStyles.image}
        source={{ uri: item.uri }}
    />
</View>
<View style={screenStyles.titleandDescContainer}>
    <Text style={screenStyles.itemTitle} >{item.title}</Text>
    <Text >{item.desc}</Text>
    </View>
<View style={screenStyles.deleteContainer}>
    <TouchableOpacity onPress={() => handleDelete(index)} >
        <View style={screenStyles.deleteButton}>
            <Text ><Icon name='delete' size={30} color={'red'} /></Text>
        </View>
    </TouchableOpacity>
</View>
</View> */}