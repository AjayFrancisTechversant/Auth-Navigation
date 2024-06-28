import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {FAB} from 'react-native-paper';
import {useScreenContext} from '../../Contexts/ScreenContext';
import MenuDrawerButton from '../../Components/MenuDrawerButton/MenuDrawerButton';
import SearchBar from '../../Components/SearchBar/SearchBar';
import HomeScreenCard from '../../Components/HomeScreenCard/HomeScreenCard';
import {getUsers} from '../../Services/API/getUsers';
import ColorPalette from '../../Assets/Themes/ColorPalette';
import StaticVariables from '../../Preferences/StaticVariables';
import styles from './Style';

const NetFriends_logo_with_sidelabel=require('../../Assets/Images/Logo/NetFriends_logo_with_sidelabel.png')

const HomeScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState(StaticVariables.EMPTY_STRING);
  const [searchResults, setSearchResults] = useState(StaticVariables.EMPTY_ARRAY);
  const [users, setUsers] = useState(StaticVariables.EMPTY_ARRAY);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const flatListRef = useRef(null);
  const [isFabVisible, setIsFabVisible] = useState(false);

  const search = searchText => {
    setSearchResults(
      users.filter(i =>
        (i.name.first + ' ' + i.name.last)
          .toLowerCase()
          .includes(searchText.toLocaleLowerCase()),
      ),
    );
  };
  useEffect(() => {
    search(searchText);
  }, [searchText]);

  const initialFetch = async () => {
    setIsLoading(true);
    let users = await getUsers(currentPage);
    setUsers(users);

    setIsLoading(false);
  };
  const fetchMore = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const nextPage = currentPage + 1;
    let usersList = await getUsers(nextPage);
    setUsers([...users, ...usersList]);
    setCurrentPage(nextPage);
    setIsLoading(false);
  };

  useEffect(() => {
    initialFetch();
  }, []);

  const useScrollToTop = () => {
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };
  const onScroll = ({nativeEvent}) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;
    setIsFabVisible(currentScrollPosition > 50);
  };

  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  return (
    <View style={screenStyles.canvas}>
      <View style={screenStyles.container}>
        <FlatList
          onScroll={onScroll}
          ref={flatListRef}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={!isLoading && <Text>Nothing to Display!!</Text>}
          ListHeaderComponent={
            <>
              <LinearGradient
                start={{x: 0, y: 0.4}}
                end={{x: 0, y: 1}}
                colors={[ColorPalette.green, ColorPalette.white]}
                style={screenStyles.headerContainer}>
                <View style={screenStyles.headerContents}>
                  <View style={screenStyles.menuDrawerButtonContainer}>
                    <MenuDrawerButton navigation={navigation} color={ColorPalette.white} />
                  </View>
                  <View style={screenStyles.logoContainer}>
                    <TouchableOpacity>
                      <Image
                        style={screenStyles.logo}
                        source={NetFriends_logo_with_sidelabel}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </LinearGradient>
              <View style={screenStyles.searchBarContainer}>
                <SearchBar
                  searchText={searchText}
                  setSearchText={setSearchText}
                />
              </View>
            </>
          }
          data={searchText == StaticVariables.EMPTY_STRING ? users : searchResults}
          keyExtractor={item => Math.random().toString(36).substring(2)}
          renderItem={({item}) => (
            <View style={screenStyles.homeScreenCardContainer}>
              <HomeScreenCard
                item={item}
              />
            </View>
          )}
          onEndReached={!searchText && fetchMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={isLoading && <ActivityIndicator size="large" />}
        />
      </View>
      <FAB
        visible={isFabVisible}
        icon="arrow-up-bold"
        style={screenStyles.fab}
        onPress={() => useScrollToTop()}
        theme={{
          colors: {
            primaryContainer: ColorPalette.green,
            onPrimaryContainer: ColorPalette.white,
          },
        }}
      />
    </View>
  );
};

export default HomeScreen;
