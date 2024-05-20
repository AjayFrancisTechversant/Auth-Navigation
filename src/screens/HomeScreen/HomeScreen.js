import { View, Image, TouchableOpacity, FlatList, ActivityIndicator, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import MenuDrawerButton from '../../Components/MenuDrawerButton/MenuDrawerButton';
import SearchBar from '../../Components/SearchBar/SearchBar';
import HomeScreenCard from '../../Components/HomeScreenCard/HomeScreenCard';
import { getUsers } from '../../Services/getUsers';
import { useSelector } from 'react-redux';


const HomeScreen = ({ navigation }) => {
  // const likedUsers=useSelector((state)=>state.Likes.likedUsers)
  // const addedFriends=useSelector((state)=>state.AddFriend.addedFriends)
  const [modalCloseToggle,setModalCloseToggle]=useState(true)

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const initialFetch = async () => {
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
    initialFetch()
  }, [modalCloseToggle])
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );

  return (
    <View style={screenStyles.canvas}>
      <View style={screenStyles.container}
      >
        <FlatList
        extraData={modalCloseToggle}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={!isLoading&&<Text>Nothing to Display!!</Text>}
          ListHeaderComponent={<>
            <View style={screenStyles.headerContainer}>
              <View style={screenStyles.headerContents}>
                <View style={screenStyles.menuDrawerButtonContainer}>
                  <MenuDrawerButton navigation={navigation} />
                </View>

                <View style={screenStyles.logoContainer} >
                  <TouchableOpacity >
                    <Image
                      style={screenStyles.logo}
                      source={require('../../Assets/Images/Logo/NetFriends_logo_with_sidelabel.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={screenStyles.searchBarContainer}>
              <SearchBar />
            </View></>}
          data={users}
          keyExtractor={item => Math.random().toString(36).substring(2)}
          renderItem={({ item }) =>
            <View style={screenStyles.homeScreenCardContainer}>
              <HomeScreenCard modalCloseToggle={modalCloseToggle} setModalCloseToggle={setModalCloseToggle} item={item} />
            </View>
          }
          onEndReached={fetchMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            isLoading &&
            <ActivityIndicator size='large' />

          }
        />
      </View>
    </View>
  )
}

export default HomeScreen