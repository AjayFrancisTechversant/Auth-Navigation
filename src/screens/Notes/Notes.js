import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Style'
import { useScreenContext } from '../../Contexts/ScreenContext';
import Card from '../../Components/Card/Card';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInput } from 'react-native-paper';
import Entypo from "react-native-vector-icons/Entypo";
import { database } from '../../DB/Database';
import { useScrollToTop } from '@react-navigation/native';


const Notes = () => {
  
    const [refresh, setRefresh] = useState(false)
    const [isAdding, setIsAdding] = useState(false)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [allNotes, setAllNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    //read
    const getNotes = () => {
        const notesData = database.collections.get('notes')
        notesData.query().observe().forEach((item) => {
            let temp = []
            item.forEach(data => {
                temp.push(data._raw)
            })
            setAllNotes(temp)
        })
    }

    //create
    const addNewNote = async () => {
        await database.write(async () => {
             await database.get('notes').create(note => {
                note.title = title
                note.desc = desc
            })
        })
        setTitle('')
        setDesc('')
        setIsAdding(false)
    }

    //delete
    const handleDeleteNote = async(id) => {
        await database.write(async () => {
(await database.get('notes').find(id)).destroyPermanently()
        })
    }
    
    //edit

    const handleEditNote=()=>{
        
    }



    const handleNewNote = () => {
        setIsAdding(true)
        
    }
    const handleCancelAddButton = () => {
        setTitle('')
        setDesc('')
        setIsAdding(false)
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
                        {isAdding && <View style={screenStyles.addNoteContainer}>
                            <Text style={screenStyles.subTitle}>Add Note</Text>
                            <TextInput style={screenStyles.textInput}
                                mode="outlined"
                                label="Title"
                                selectionColor={ColorPalette.green}
                                underlineColor={ColorPalette.green}
                                activeUnderlineColor={ColorPalette.green}
                                outlineColor={ColorPalette.green}
                                activeOutlineColor={ColorPalette.green}
                                value={title}
                                onChangeText={text => setTitle(text)}
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
                                value={desc}
                                onChangeText={text => setDesc(text)}
                            />

                            <View style={screenStyles.buttonsContainer}>
                                <TouchableOpacity onPress={handleCancelAddButton} style={screenStyles.cancelAddButton}>
                                    <Entypo size={25} name='cross' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={addNewNote} style={screenStyles.saveAddButton}>
                                    <Entypo size={25} name='check' />
                                </TouchableOpacity>
                            </View>
                        </View>}
                    </View>}
                    data={allNotes}
                    renderItem={({index,item})=>
                        <Card item={item} handleDeleteNote={handleDeleteNote}/>
                    }

                />
            </View>
        </View>
    )
}

export default Notes