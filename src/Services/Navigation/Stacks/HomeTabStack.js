import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Me from '../../../modules/Me/Me'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeDrawerStack from './HomeDrawerStack'
import ImageUploader from '../../../modules/ImageUploader/ImageUploader';
import Booking from '../../../modules/Booking/Booking';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'


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
                        <AntDesign name='cloudupload' color={color} size={35} />
                    )
                }}
            />
              <HomeTabStack.Screen
                name='Booking'
                component={Booking}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name='book-bookmark' color={color} size={size} />
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