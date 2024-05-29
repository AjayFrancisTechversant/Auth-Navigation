import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import { AllUsersData } from '../../Data/Data';
import { database } from '../../DB/Database';
import { FlatList } from 'react-native-gesture-handler';

const DBFetch = () => {
  const [fetchedUsersArray, setFetchedUsersArray] = useState([])
  const numberOfUsers = fetchedUsersArray.length


  useEffect(() => {
    // writeData()
    getData1()
  }, [])

  const writeData = async () => {
    AllUsersData.map(async (i) => {
      try {
        await database.write(async () => {
          await database.get('users').create(j => {
            j.name = i.name.first + ' ' + i.name.last
            j.age = i.dob.age
            j.gender = i.gender
            j.email = i.email
            j.phone = i.phone
          })
        })
      } catch (error) {
        console.log(error);
      }
    }
    )
  }


  const getData1 = () => {
    const userDatat = database.collections.get('users')
    userDatat.query().observe().forEach((item) => {
      let temp = []
      item.forEach(data => {
        temp.push(data._raw)
      })
      setFetchedUsersArray(temp)
    })
  }
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  return (
    <View>
      <FlatList
        ListEmptyComponent={<Text>No Data</Text>}
        data={fetchedUsersArray}
        renderItem={({item,})=>
          
          
          <View style={screenStyles.card}>
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Gender: {item.gender}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Phone: {item.phone}</Text>
          
          </View>
        
        }
      />

    </View>
  )
}

export default DBFetch