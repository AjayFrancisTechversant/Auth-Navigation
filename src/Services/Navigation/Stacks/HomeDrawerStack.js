import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../../modules/HomeScreen/HomeScreen';
import ColorPalette from '../../../Assets/Themes/ColorPalette';
import DrawerContents from '../../../Components/DrawerContents/DrawerContents';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import OfflineDBFetch from '../../../modules/OfflineDBFetch/OfflineDBFetch';
import Charts from '../../../modules/Charts/Charts';
import BooksFirestore from '../../../modules/BooksFirestore/BooksFirestore';
import BooksRealtimeDatabase from '../../../modules/BooksRealtimeDatabase/BooksRealtimeDatabase';
import Listing from '../../../modules/Listing/Listing';
import Notes from '../../../modules/Notes/Notes';
import RNPaper from '../../../modules/RNPaper/RNPaper';
import ImageUploader from '../../../modules/ImageUploader/ImageUploader';



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
             <Drawer.Screen
                options={{
                    drawerIcon: () => <AntDesign name='cloudupload' color={ColorPalette.green} size={20} />
                }}
                name="Image Upload" component={ImageUploader}
            />
        </Drawer.Navigator>
    )
}

export default HomeDrawerStack