import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Listing from '../screens/Listing/Listing'
import Me from '../screens/Me/Me'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import HomeDrawerStack from './HomeDrawerStack'
import Notes from '../screens/Notes/Notes';

const HomeTabStack = () => {
    const HomeTabStack = createBottomTabNavigator()
    return (
        <HomeTabStack.Navigator screenOptions={{ tabBarActiveTintColor: ColorPalette.green }}>
            <HomeTabStack.Screen
                name='Home'
                component={HomeDrawerStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" color={color} size={size} />
                    )

                }}
            />

            <HomeTabStack.Screen
                name='Me'
                component={Me}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" color={color} size={size} />
                    )
                }}
            />

        </HomeTabStack.Navigator>
    )
}

export default HomeTabStack