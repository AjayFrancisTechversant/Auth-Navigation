import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './Style'
import { useScreenContext } from '../../Contexts/ScreenContext';
import Card from '../../Components/Card/Card';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInput } from 'react-native-paper';
import Entypo from "react-native-vector-icons/Entypo";


const Notes = () => {
    const [newEntry, setNewEntry] = useState()
    const [items, setItems] = useState([{ title: "Red", uri: 'https://i.postimg.cc/Y2T7c9nd/red.jpg', desc: 'Red Colour' }, { title: "Blue", uri: 'https://i.postimg.cc/VkWPbFYh/Blue.png', desc: 'Blue Colour' }, { title: "Green", uri: 'https://i.postimg.cc/W4pLmJz1/green.png', desc: 'Green Colour' }, { title: "Yellow", uri: 'https://i.postimg.cc/6QHsM54L/yellow.webp', desc: 'Yellow Colour' }])
    const [refresh, setRefresh] = useState(false)
    const [isAdding,setIsAdding]=useState(false)

    const handleAdd = () => {
        newEntry && items.push(newEntry)
        setNewEntry("")

    }
    const handleNewNote=()=>{
        setIsAdding(true)
    }
    const handleCancelAddButton=()=>{
        setIsAdding(false)
    }


    const handleDelete = (i) => {

        items.splice(i, 1)
        if (refresh == false) {
            setRefresh(true)
        }
        else {
            setRefresh(false)
        }

    }
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    return (
        <View style={screenStyles.canvas}>
            <View style={screenStyles.container}>
                <TouchableOpacity onPress={handleNewNote} style={screenStyles.addNoteButton}>
                    <FontAwesome name='plus' size={20} color='white' />
                </TouchableOpacity>
                <FlatList extraData={refresh} ListEmptyComponent={
                    <Text style={screenStyles.noItemsToDisplay}>No Items to Display!!</Text>
                }
                    ListHeaderComponent={<View>
                        <Text style={screenStyles.title}>Notes</Text>
                        {isAdding&&<View style={screenStyles.addNoteContainer}>
                            <TextInput style={screenStyles.textInput}
                                mode="outlined"
                                label="Title"
                                selectionColor={ColorPalette.green}
                                underlineColor={ColorPalette.green}
                                activeUnderlineColor={ColorPalette.green}
                                outlineColor={ColorPalette.green}
                                activeOutlineColor={ColorPalette.green}


                            // value={}
                            // onChangeText={text => setText(text)}
                            />
                            <TextInput style={screenStyles.textInput}
                                multiline={true}
                                mode="outlined"
                                label="Description"
                                selectionColor={ColorPalette.green}
                                underlineColor={ColorPalette.green}
                                activeUnderlineColor={ColorPalette.green}
                                outlineColor={ColorPalette.green}
                                activeOutlineColor={ColorPalette.green}
                            // value={}
                            // onChangeText={text => setText(text)}
                            />

                            <View style={screenStyles.buttonsContainer}>
                                <TouchableOpacity onPress={handleCancelAddButton} style={screenStyles.cancelAddButton}>
                                    <Entypo size={25} name='cross' />
                                </TouchableOpacity>
                                <TouchableOpacity  style={screenStyles.saveAddButton}>
                                    <Entypo size={25} name='check' />
                                </TouchableOpacity>
                            </View>

                        </View>}


                    </View>}
                    data={items}
                    renderItem={({ index, item }) =>
                        <Card index={index} item={item} onPressFn={handleDelete} />
                    }

                />
            </View>
        </View>
    )
}

export default Notes