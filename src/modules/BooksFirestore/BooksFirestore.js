import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import FireStoreCard from '../../Components/FireStoreCard/FireStoreCard';
import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './Style';
import StaticVariables from '../../Preferences/StaticVariables';

const BooksFirestore = () => {
  const [title, setTitle] = useState(StaticVariables.EMPTY_STRING);
  const [desc, setDesc] = useState(StaticVariables.EMPTY_STRING);
  const [allBooks, setAllBooks] = useState(StaticVariables.EMPTY_ARRAY);
  const [editId, setEditId] = useState(null);
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
        firestore().collection('Books').add({
          title: title,
          desc: desc,
        });
        setTitle(StaticVariables.EMPTY_STRING);
        setDesc(StaticVariables.EMPTY_STRING);
      } catch (error) {
        console.log('e', error);
      }
    } else {
      Alert.alert('Please provide Title');
    }
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('Books')
      .onSnapshot(querySnapshot => {
        const books = StaticVariables.EMPTY_ARRAY;
        querySnapshot.forEach(documentSnapshot => {
          books.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setAllBooks(books);
      });
    return () => subscriber();
  }, []);

  const handleDelete = id => {
    firestore().collection('Books').doc(id).delete();
  };

  const handleEditButton = book => {
    setTitle(book.title);
    setDesc(book.desc);
    setEditId(book.key);
    setModalVisible(true);
  };

  const handleUpdate = () => {
    if (title) {
      if (editId) {
        firestore().collection('Books').doc(editId).update({title, desc});
        setModalVisible(false);
        setTitle(StaticVariables.EMPTY_STRING);
        setDesc(StaticVariables.EMPTY_STRING);
        setEditId(null);
      }
    } else {
      Alert.alert('Please provide Title');
    }
  };

  return (
    <View style={screenStyles.canvas}>
      <View style={screenStyles.container}>
        <FlatList
          ListEmptyComponent={
            <Text style={screenStyles.noItemsToDisplay}>
              No Items to Display!!
            </Text>
          }
          ListHeaderComponent={
            <View>
              <Text style={screenStyles.title}>FireStore</Text>
              <View style={screenStyles.addContainer}>
                <TextInput
                  value={title}
                  onChangeText={e => setTitle(e)}
                  mode="outlined"
                  label="Title"
                  selectionColor={ColorPalette.green}
                  underlineColor={ColorPalette.green}
                  activeUnderlineColor={ColorPalette.green}
                  outlineColor={ColorPalette.green}
                  activeOutlineColor={ColorPalette.green}
                />
                <TextInput
                  value={desc}
                  onChangeText={e => setDesc(e)}
                  mode="outlined"
                  label="Description"
                  selectionColor={ColorPalette.green}
                  underlineColor={ColorPalette.green}
                  activeUnderlineColor={ColorPalette.green}
                  outlineColor={ColorPalette.green}
                  activeOutlineColor={ColorPalette.green}
                />
                <TouchableOpacity onPress={handleAdd}>
                  <View style={screenStyles.button}>
                    <Text style={screenStyles.buttonText}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={screenStyles.title}>Books:</Text>
            </View>
          }
          data={allBooks}
          renderItem={({item}) => (
            <FireStoreCard
              desc={desc}
              title={title}
              setDesc={setDesc}
              setTitle={setTitle}
              handleUpdate={handleUpdate}
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
              handleDelete={handleDelete}
              handleEditButton={handleEditButton}
              item={item}
            />
          )}
        />
      </View>
    </View>
  );
};

export default BooksFirestore;
