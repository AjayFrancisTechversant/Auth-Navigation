import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import React, { useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LoginTokenContext } from '../../Contexts/TokenContext';
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import { View } from 'react-native';




const DrawerContents = (props) => {
    const { tokenStatus, setTokenStatus } = useContext(LoginTokenContext)

    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    const handleLogout = async () => {
        await AsyncStorage.removeItem("isLoggedin")
        setTokenStatus(false)
    }
    return (
        <>
            <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <DrawerItem 
            label="Logout"
            onPress={handleLogout}
            icon={() => <MaterialIcons size={20} color={ColorPalette.green} name="logout" />}
        />
        </>
    )
}

export default DrawerContents