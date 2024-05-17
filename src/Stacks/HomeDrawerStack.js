import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import { Text } from 'react-native-paper';
import Settings from '../screens/Settings/Settings';

const HomeDrawerStack = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="settings" component={Settings} />
        </Drawer.Navigator>
    )
}

export default HomeDrawerStack