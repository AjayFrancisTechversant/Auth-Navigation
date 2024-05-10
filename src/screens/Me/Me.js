import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import { LoginTokenContext } from '../../Contexts/TokenContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OptionCard from '../../Components/OptionCard/OptionCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Me = () => {
    const { tokenStatus, setTokenStatus } = useContext(LoginTokenContext)
    const [username, setUserName] = useState('')
    const handleLogout = async () => {
        await AsyncStorage.removeItem("isLoggedin")
        setTokenStatus(false)
    }
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    const getUsername = async () => {
        setUserName(await AsyncStorage.getItem("isLoggedin"))
    }
    useEffect(() => {
        getUsername()
    }, [])
    return (
        <KeyboardAwareScrollView style={screenStyles.container}>
            <View style={screenStyles.headerContainer}>
                <View style={screenStyles.headerTitleContainer}>
                    <Text style={screenStyles.headerTitle}>Profile</Text>
                </View>
                <TouchableOpacity style={screenStyles.button} onPress={handleLogout}>
                        <MaterialIcons style={screenStyles.logoutIcon} size={30} name="logout" />
                </TouchableOpacity>
            </View>
            <View style={screenStyles.userDetailsContainer} >
                <Image
                    style={screenStyles.profilePicture}
                    source={require('../../Assets/Images/profilePicDummy.webp')}
                />
                <Text style={screenStyles.username}>{username}</Text>
                <Text>+91 7478348881</Text>
                <Text>ajay@email.com</Text>
            </View>

            <View style={screenStyles.threeIconContainer}>
                <TouchableOpacity >
                    <AntDesign style={screenStyles.threeIcon} name='heart' color='red' size={30} />
                    <Text style={screenStyles.threeIconTitle}>Favourites</Text>
                    <Text style={screenStyles.threeIconSubtitle}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 style={screenStyles.threeIcon} name='user-friends' color='#2ba0e3' size={30} />
                    <Text style={screenStyles.threeIconTitle}>Friends</Text>
                    <Text style={screenStyles.threeIconSubtitle}>127</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 style={screenStyles.threeIcon} name='trophy' color='#e3b22b' size={30} />
                    <Text style={screenStyles.threeIconTitle}>Achivements</Text>
                    <Text style={screenStyles.threeIconSubtitle}>2</Text>
                </TouchableOpacity>
            </View>


            <View style={screenStyles.OptionCardContainer}>
                <OptionCard iconName={'boxes'} iconFamily={'FontAwesome5'} optionTitle={'My Orders'} />
                <OptionCard iconName={'dollar'} iconFamily={'FontAwesome'} optionTitle={'Refer and Earn'} />
                <OptionCard iconName={'help-with-circle'} iconFamily={'AntDesign'} optionTitle={'Help Center'} />
                <OptionCard iconName={'edit'} iconFamily={'AntDesign'} optionTitle={'Edit Profile Details'} />
                <OptionCard iconName={'setting'} iconFamily={'AntDesign'} optionTitle={'Settings'} />

            </View>

        </KeyboardAwareScrollView>
    )
}

export default Me