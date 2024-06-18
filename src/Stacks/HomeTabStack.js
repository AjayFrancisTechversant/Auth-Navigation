import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Me from '../screens/Me/Me'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeDrawerStack from './HomeDrawerStack'
import ImageUploader from '../screens/ImageUploader/ImageUploader';

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
                name='Image Upload'
                component={ImageUploader}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name='cloudupload' color={color} size={size} />
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