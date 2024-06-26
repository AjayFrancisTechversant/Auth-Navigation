import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import { Button, Divider, Menu } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ColorPalette from '../../Assets/Themes/ColorPalette';


const I18njs = () => {
    //menu
    const [languageMenuVisible, setLanguageMenuVisible] = useState(false);
    const openLanguageMenu = () => setLanguageMenuVisible(true);
    const closeLanguageMenu = () => setLanguageMenuVisible(false);
    //
    const [selectedLanguage, setSelectedLanguage] = useState('English')
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    return (
        <View style={screenStyles.canvas}>
            <View style={screenStyles.selectLanguageContainer}>
                <Text>Language: </Text>
                <Menu
                    visible={languageMenuVisible}
                    onDismiss={closeLanguageMenu}
                    anchor={<Button
                        mode='contained-tonal'
                        theme={{colors:{secondaryContainer:ColorPalette.lightGreen}}}
                        onPress={openLanguageMenu}>{selectedLanguage} <AntDesign name='caretdown' size={10} /></Button>}
                    anchorPosition='bottom'
                theme={{colors:{elevation:{level2:'white'}}}}
                >
                    
                    <Menu.Item onPress={() => {
                        setSelectedLanguage('English')
                        setLanguageMenuVisible(false)
                    }}
                        title="English" />
                    <Divider />
                    <Menu.Item onPress={() => {
                        setSelectedLanguage('French')
                        setLanguageMenuVisible(false)

                    }}
                        title="French" />
                    <Divider />
                    <Menu.Item onPress={() => {
                        setSelectedLanguage('German')
                        setLanguageMenuVisible(false)

                    }}
                        title="German" />
                </Menu>
            </View>
        </View>
    )
}

export default I18njs