import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './Style'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useScreenContext } from '../../Contexts/ScreenContext';

const Listing = () => {
    const [newEntry, setNewEntry] = useState()
    const [items, setItems] = useState([{ title: "Red", uri: 'https://i.postimg.cc/Y2T7c9nd/red.jpg',desc:'Red Colour' }, { title: "Blue", uri: 'https://i.postimg.cc/VkWPbFYh/Blue.png',desc:'Blue Colour' }, { title: "Green", uri: 'https://i.postimg.cc/W4pLmJz1/green.png',desc:'Green Colour' }, { title: "Yellow", uri: 'https://i.postimg.cc/6QHsM54L/yellow.webp',desc:'Yellow Colour' } ])
    const [refresh, setRefresh] = useState(false)

    const handleAdd = () => {
        newEntry && items.push(newEntry)
        setNewEntry("")

    }
    const handleDelete = (i) => {

        // console.log(i);
        items.splice(i, 1)
        // console.log(items);
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
        <View style={screenStyles.container}>
            <Text style={screenStyles.title}>Listing</Text>
            <View style={screenStyles.addContainer}>
                <TextInput value={newEntry} style={screenStyles.textInput}
                    onChangeText={(e) => setNewEntry(e)}
                    placeholder="Enter an Item"

                />
                <TouchableOpacity onPress={handleAdd} >
                    <View style={screenStyles.button}>
                        <Text style={screenStyles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={screenStyles.title} >Items:</Text>
            {items.length > 0 ? <FlatList extraData={refresh}
                data={items}
                renderItem={({ index, item }) =>
                    <View style={screenStyles.itemContainer}>
                        
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
                    </View>
                }

            />
                :
                <Text style={screenStyles.noItemsToDisplay}>No Items to Display!!</Text>
            }


        </View>
    )
}

export default Listing

