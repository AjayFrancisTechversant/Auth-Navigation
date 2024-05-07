import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './Style'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Listing = () => {
    const [newEntry, setNewEntry] = useState()
    const [items, setItems] = useState(["a","b","c","d","e"])
    const [refresh,setRefresh]=useState(false)

    const handleAdd = () => {
        newEntry&&items.push(newEntry)
        setNewEntry("")

    }
    const handleDelete = (i) => {
        
        console.log(i);
        items.splice(i,1)
        console.log(items);
        if(refresh==false){
            setRefresh(true)
        }
        else{
            setRefresh(false)
        }


    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listing</Text>
            <View style={styles.addContainer}>
                <TextInput value={newEntry} style={styles.textInput}
                    onChangeText={(e) => setNewEntry(e)}
                    placeholder="Enter an Item"

                />
                <TouchableOpacity onPress={handleAdd} >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <Text style={styles.itemContainer} >Items:</Text>
            {items.length>0?<FlatList extraData={refresh}
                data={items}
                renderItem={({ index, item }) =>
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemCard}>{`${index+1}.${item}`}</Text>
                        <TouchableOpacity onPress={()=>handleDelete(index)} >
                            <View style={styles.deleteButton}>
                                <Text ><Icon name='delete' size={30} color={'red'}  /></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }

            />
        :
        <Text style={styles.noItemsToDisplay}>No Items to Display!!</Text>
        }


        </View>
    )
}

export default Listing

