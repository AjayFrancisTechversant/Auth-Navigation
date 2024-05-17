import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/Settings/Settings';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ColorPalette from '../Assets/Themes/ColorPalette';

const HomeDrawerStack = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator  screenOptions={{
            drawerPosition:'right',headerShown:false,
            drawerActiveTintColor:ColorPalette.green
          }} >
            <Drawer.Screen  name="HomeScreen" component={HomeScreen}  />
            <Drawer.Screen name="settings" component={Settings} />
        </Drawer.Navigator>
    )
}

export default HomeDrawerStack