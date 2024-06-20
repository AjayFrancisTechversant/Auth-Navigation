import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Me from '../../../modules/Me/Me'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeDrawerStack from './HomeDrawerStack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Booking from '../../../modules/Booking/Booking';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import RNPaper from '../../../modules/RNPaper/RNPaper';


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
                name='RN Paper'
                component={RNPaper}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='newspaper' color={color} size={size} />
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