import { View, Text, FlatList, TouchableOpacity, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Style'
import { useScreenContext } from '../../Contexts/ScreenContext'
import { TextInput } from 'react-native-paper'
import firestore from '@react-native-firebase/firestore';
import FireStoreCard from '../../Components/FireStoreCard/FireStoreCard'

const BooksFirestore = () => {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [allBooks, setAllBooks] = useState([])
  const [editId, setEditId] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);

  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );

  const handleAdd = () => {
    if (title) {
      try {
        firestore()
          .collection('Books')
          .add({
            title: title,
            desc: desc,
          })
        setTitle('')
        setDesc('')
      } catch (error) {
        console.log('e', error);
      }
    }
    else {
      Alert.alert('Please provide Title')
    }
  }

  useEffect(() => {
    const subscriber = firestore()
      .collection('Books')
      .onSnapshot(querySnapshot => {
        const books = [];
        querySnapshot.forEach(documentSnapshot => {
          books.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setAllBooks(books);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  const handleDelete = (id) => {
    firestore()
      .collection('Books')
      .doc(id)
      .delete()
 
  }

  //edit button only
  const handleEditButton = (book) => {
    setTitle(book.title)
    setDesc(book.desc)
    setEditId(book.key)
    setModalVisible(true)
  }

  const handleUpdate = () => {
   if(title){ if (editId) {
      firestore()
        .collection('Books')
        .doc(editId)
        .update({ title, desc })
      setModalVisible(false)
      setTitle('')
      setDesc('')
      setEditId(null)
    }}
    else{
      Alert.alert('Please provide Title')
    }
  }

  return (
    <View style={screenStyles.canvas}>
      <View style={screenStyles.container}>
        <FlatList ListEmptyComponent={
          <Text style={screenStyles.noItemsToDisplay}>No Items to Display!!</Text>
        }
          ListHeaderComponent={<><Text style={screenStyles.title}>FireStore</Text>
            <View style={screenStyles.addContainer}>
              <TextInput value={title} 
                onChangeText={(e) => setTitle(e)}
                mode="outlined"
                label="Title"
                selectionColor={ColorPalette.green}
                underlineColor={ColorPalette.green}
                activeUnderlineColor={ColorPalette.green}
                outlineColor={ColorPalette.green}
                activeOutlineColor={ColorPalette.green}
              />
              <TextInput value={desc} 
                onChangeText={(e) => setDesc(e)}
                mode="outlined"
                label="Description"
                selectionColor={ColorPalette.green}
                underlineColor={ColorPalette.green}
                activeUnderlineColor={ColorPalette.green}
                outlineColor={ColorPalette.green}
                activeOutlineColor={ColorPalette.green}
              />
              <TouchableOpacity onPress={handleAdd} >
                <View style={screenStyles.button}>
                  <Text style={screenStyles.buttonText}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={screenStyles.title} >Books:</Text>
          </>}
          data={allBooks}
          renderItem={({ index, item }) =>
            <FireStoreCard desc={desc} title={title} setDesc={setDesc} setTitle={setTitle} handleUpdate={handleUpdate} setModalVisible={setModalVisible} modalVisible={modalVisible} handleDelete={handleDelete} handleEditButton={handleEditButton} item={item} />
          }
        />

      </View>
    </View>
  )
}

export default BooksFirestore