import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/Settings/Settings';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ColorPalette from '../Assets/Themes/ColorPalette';
import DrawerContents from '../Components/DrawerContents/DrawerContents';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'


const HomeDrawerStack = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator screenOptions={{
            drawerPosition: 'left', headerShown: false,
            drawerActiveTintColor: ColorPalette.green
        }} drawerContent={(props) => <DrawerContents {...props} />}>
            <Drawer.Screen
                options={{
                    drawerIcon: () => <Entypo name='home' color={ColorPalette.green} size={20} />
                }}
                name="HomeScreen" component={HomeScreen}
            />
            <Drawer.Screen
                options={{
                    drawerIcon: () => <Ionicons name='settings' color={ColorPalette.green} size={20} />
                }}
                name="settings" component={Settings}
            />
        </Drawer.Navigator>
    )
}

export default HomeDrawerStack