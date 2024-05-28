import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ColorPalette from '../Assets/Themes/ColorPalette';
import DrawerContents from '../Components/DrawerContents/DrawerContents';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Booking from '../screens/Booking/Booking';
import DBFetch from '../screens/DBFetch/DBFetch';


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
                    drawerIcon: () => <FontAwesome6 name='book-bookmark' color={ColorPalette.green} size={20} />
                }}
                name="Booking" component={Booking}
            />
             <Drawer.Screen
                options={{
                    drawerIcon: () => <FontAwesome6 name='book-bookmark' color={ColorPalette.green} size={20} />
                }}
                name="dbFetch" component={DBFetch}
            />
        </Drawer.Navigator>
    )
}

export default HomeDrawerStack