import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ColorPalette from '../Assets/Themes/ColorPalette';
import DrawerContents from '../Components/DrawerContents/DrawerContents';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Booking from '../screens/Booking/Booking';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import OfflineDBFetch from '../screens/OfflineDBFetch/OfflineDBFetch';
import Charts from '../screens/Charts/Charts';
import BooksFirestore from '../screens/BooksFirestore/BooksFirestore';
import BooksRealtimeDatabase from '../screens/BooksRealtimeDatabase/BooksRealtimeDatabase';
import Listing from '../screens/Listing/Listing';
import Notes from '../screens/Notes/Notes';



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
                    drawerIcon: () => <Feather name="list" color={ColorPalette.green} size={20} />
                }}
                name="Listing" component={Listing}
            />
            <Drawer.Screen
                options={{
                    drawerIcon: () => <FontAwesome6 name='note-sticky' color={ColorPalette.green} size={20} />
                }}
                name="Notes (Watermelon DB)" component={Notes}
            />
             <Drawer.Screen
                options={{
                    drawerIcon: () => <MaterialCommunityIcons name='fruit-watermelon' color={ColorPalette.green} size={20} />
                }}
                name="OfflineDBFetch" component={OfflineDBFetch}
            />
              <Drawer.Screen
                options={{
                    drawerIcon: () => <MaterialCommunityIcons name='chart-arc' color={ColorPalette.green} size={20} />
                }}
                name="Charts" component={Charts}
            />
             <Drawer.Screen
                options={{
                    drawerIcon: () => <Ionicons name='logo-firebase' color={ColorPalette.green} size={20} />
                }}
                name="BooksFirestore" component={BooksFirestore}
            />
             <Drawer.Screen
                options={{
                    drawerIcon: () => <Ionicons name='logo-firebase' color={ColorPalette.green} size={20} />
                }}
                name="TodoRealtimeDatabase" component={BooksRealtimeDatabase}
            />
        </Drawer.Navigator>
    )
}

export default HomeDrawerStack