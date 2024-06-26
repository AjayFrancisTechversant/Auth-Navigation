import { View, Image, TouchableOpacity, FlatList, ActivityIndicator, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import MenuDrawerButton from '../../Components/MenuDrawerButton/MenuDrawerButton';
import SearchBar from '../../Components/SearchBar/SearchBar';
import HomeScreenCard from '../../Components/HomeScreenCard/HomeScreenCard';
import { getUsers } from '../../Services/API/getUsers';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreenCarousel from '../../Components/HomeScreenCarousel/HomeScreenCarousel';


const HomeScreen = ({ navigation }) => {
  const [searchText,setSearchText]=useState('')
  const [modalCloseToggle,setModalCloseToggle]=useState(true)
  const [searchResults,setSearchResults]=useState([])
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const search=(searchText)=>{
    setSearchResults(users.filter(i=>(i.name.first+' '+i.name.last).toLowerCase().includes(searchText.toLocaleLowerCase())))
    
  }
  useEffect(()=>{
    search(searchText)
  },[searchText])

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
  }, [])
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
            <LinearGradient
             start={{ x: 0, y: 0.4 }} end={{ x: 0, y: 1 }}
             colors={[ColorPalette.green,'white']}
            style={screenStyles.headerContainer}>
              <View style={screenStyles.headerContents}>
                <View style={screenStyles.menuDrawerButtonContainer}>
                  <MenuDrawerButton navigation={navigation} screen={'Home'} />
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
            </LinearGradient>
            <View style={screenStyles.searchBarContainer}>
              <SearchBar searchText={searchText} setSearchText={setSearchText}  />
            </View>
            <HomeScreenCarousel/>
            </>}
          data={searchText==''?users:searchResults}
          keyExtractor={item => Math.random().toString(36).substring(2)}
          renderItem={({ item }) =>
            <View style={screenStyles.homeScreenCardContainer}>
              <HomeScreenCard modalCloseToggle={modalCloseToggle} setModalCloseToggle={setModalCloseToggle} item={item} />
            </View>
          }
          onEndReached={!searchText&&fetchMore}
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