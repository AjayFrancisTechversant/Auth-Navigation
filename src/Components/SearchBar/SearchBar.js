import { View, Text } from 'react-native'
import React from 'react'
import styles from './Style';
import { useScreenContext } from '../../Contexts/ScreenContext';
import { Searchbar } from 'react-native-paper';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const SearchBar = ({searchText,setSearchText}) => {

    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );

    return (
        <View >
            <Searchbar onChangeText={(e)=>setSearchText(e)}
            value={searchText}
            style={screenStyles.searchBar}
                placeholder="Search"
            iconColor={ColorPalette.green}
            elevation={2}
            rippleColor={ColorPalette.green}
            cursorColor={ColorPalette.green}
            placeholderTextColor={ColorPalette.green}
            
            />
        </View>
    )
}

export default SearchBar