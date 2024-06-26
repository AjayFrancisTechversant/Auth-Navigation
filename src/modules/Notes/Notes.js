import { Text, View, TouchableOpacity, FlatList, Alert, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Style'
import { useScreenContext } from '../../Contexts/ScreenContext';
import Card from '../../Components/Card/Card';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInput } from 'react-native-paper';
import Entypo from "react-native-vector-icons/Entypo";
import { database } from '../../DB/Database';


const Notes = () => {

    const [refresh, setRefresh] = useState(false)
    const [isAdding, setIsAdding] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [allNotes, setAllNotes] = useState([])
    const [isAddLoading, setIsAddLoading] = useState(false)
    const [isEditLoading, setIsEditLoading] = useState(false)
    const [isDeleteLoading, setIsDeleteLoading] = useState(false)
    const [editNoteId, setEditNoteId] = useState('')

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
        if (title || desc) {
            setIsAddLoading(true)
            await database.write(async () => {
                await database.get('notes').create(note => {
                    note.title = title
                    note.desc = desc
                })
            })
            setTitle('')
            setDesc('')
            setIsAddLoading(false)
            setIsAdding(false)
        } else {
            Alert.alert("Please Fill")
        }

    }

    //delete
    const handleDeleteNote =async (id) => {
        setIsDeleteLoading(true)
        await database.write(async () => {
            (await database.get('notes').find(id)).destroyPermanently()
        })
        setIsDeleteLoading(false)
    }

    //edit
    const handleEditNote = async () => {
        setIsEditLoading(true)
        await database.write(async () => {

            (await database.get('notes').find(editNoteId)).update((i) => {
                i.title = title
                i.desc = desc
            })

        })
        setIsEditLoading(false)
        setTitle('')
        setDesc('')
        setIsEditing(false)
        setIsAdding(false)

    }


    const handlePlusButton = () => {
        setIsAdding(true)
    }

    const handleCheckButton = () => {
        isAdding ? addNewNote() : handleEditNote()

    }
    const handleEditButton = async (id) => {
        setEditNoteId(id)
        setIsEditing(true)
        setTitle((await database.get('notes').find(id))._raw.title);
        setDesc((await database.get('notes').find(id))._raw.desc);
    }
    const handleCrossButton = () => {
        setTitle('')
        setDesc('')
        setIsAdding(false)
        setIsEditing(false)
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
                <TouchableOpacity onPress={handlePlusButton} style={screenStyles.addNoteButton}>
                    <FontAwesome name='plus' size={20} color='white' />
                </TouchableOpacity>
                <FlatList extraData={refresh} ListEmptyComponent={
                    <Text style={screenStyles.noItemsToDisplay}>No Items to Display!!</Text>
                }
                    ListHeaderComponent={<View>
                        <Text style={screenStyles.title}>Notes</Text>
                        {(isAdding || isEditing) && <View style={screenStyles.addNoteContainer}>
                            <Text style={screenStyles.subTitle}>{isAdding ? 'Add Note' : 'Update Note'}</Text>
                            <TextInput style={screenStyles.titleTextInput}
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
                            <TextInput style={screenStyles.descTextInput}
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
                                <TouchableOpacity onPress={handleCrossButton} style={screenStyles.cancelAddButton}>
                                    <Entypo size={25} name='cross' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleCheckButton} style={screenStyles.saveAddButton}>
                                    {isAddLoading || isEditLoading ? <ActivityIndicator color={'white'} /> : <Entypo size={25} name='check' />}
                                </TouchableOpacity>
                            </View>
                        </View>}
                    </View>}
                    data={allNotes}
                    renderItem={({ item }) =>
                        <Card item={item} isDeleteLoading={isDeleteLoading} handleDeleteNote={handleDeleteNote} setIsEditing={setIsEditing} handleEditButton={handleEditButton} />
                    }
                />
            </View>
        </View>
    )
}


export default Notes