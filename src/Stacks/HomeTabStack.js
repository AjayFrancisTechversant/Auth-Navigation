import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home'
import Listing from '../Components/Listing/Listing'
import Me from '../screens/Me/Me'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

const HomeTabStack = () => {
    const HomeTabStack = createBottomTabNavigator()
    return (
        <HomeTabStack.Navigator screenOptions={{tabBarActiveTintColor:ColorPalette.green}}>
            <HomeTabStack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" color={color} size={size} />
                    )

                }}
            />
            <HomeTabStack.Screen
                name='Listing'
                component={Listing}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="list" color={color} size={size} />
                    )

                }}
            />
            <HomeTabStack.Screen
                name='Me'
                component={Me}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" color={color} size={size} />
                    )
                }}
            />

        </HomeTabStack.Navigator>
    )
}

export default HomeTabStack