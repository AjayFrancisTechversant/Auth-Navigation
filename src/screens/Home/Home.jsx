import { Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Style'
import { useScreenContext } from '../../Contexts/ScreenContext'
import Card from '../../Components/Card/Card'
import { getUsers } from '../../Services/getUsers'

const Home = ({ navigation }) => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const initialFunction = async () => {
        setIsLoading(true)
        let users = await getUsers(currentPage)
        setUsers(users)

        setIsLoading(false)
    }
    const fetchMore = async () => {
        if (isLoading) return;
        setIsLoading(true)
        const nextPage = currentPage + 1
        let usersList = await getUsers(nextPage)
        setUsers([...users, ...usersList])
        setCurrentPage(nextPage)
        setIsLoading(false)
    }


    useEffect(() => {
        initialFunction()
    }, [])

    const handlePress = (item) => {
        navigation.push('Details',{item})
    }
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    return (
        <View style={screenStyles.Container}>

            <FlatList                
                ListHeaderComponent={<Text style={screenStyles.title}>Users</Text>}
                data={users}
                keyExtractor={item => Math.random().toString(36).substring(2)}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => handlePress(item)}>
                        <Card Component={'Home'} item={item} />
                    </TouchableOpacity>
                }
                onEndReached={fetchMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={
                    isLoading&&
                    <ActivityIndicator size='large'/>
                    
                }

            />

        </View>
    )
}

export default Home

