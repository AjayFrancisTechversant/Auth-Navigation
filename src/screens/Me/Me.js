import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import { LoginTokenContext } from '../../Contexts/TokenContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OptionCard from '../../Components/OptionCard/OptionCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ColorPalette from '../../Assets/Themes/ColorPalette';
import { TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';


const Me = () => {
    const likeCount=useSelector((state) => state.Likes.value)
    const { tokenStatus, setTokenStatus } = useContext(LoginTokenContext)
    const [username, setUserName] = useState('')
    const [mobileNumber, setMobileNumber] = useState()
    const [tempMobileNumber, setTempMobileNumber] = useState()
    const [email, setEmail] = useState()
    const [tempEmail, setTempEmail] = useState()
    const [isEditing, setIsEditing] = useState(false)
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
    const handleEditOption = () => {
        setIsEditing(true)
    }
    const handleCancelEdit = () => {
        setTempMobileNumber(mobileNumber)
        setTempEmail(email)
        setIsEditing(false)

    }
    const handleSaveEdit = () => {
        setMobileNumber(tempMobileNumber)
        setEmail(tempEmail)
        setIsEditing(false)

    }
    useEffect(() => {
        getUsername()
    }, [])
    return (
        <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            style={screenStyles.container}>

            <ImageBackground style={screenStyles.headerContainer} source={require('../../Assets/Images/profilePageBG.jpg')}
                imageStyle={screenStyles.BGImageStyle}>
                <TouchableOpacity onPress={handleLogout}>
                    <MaterialIcons style={screenStyles.logoutIcon} size={30} name="logout" />
                </TouchableOpacity>
            </ImageBackground>

            <View style={screenStyles.userDetailsContainer} >
                <Image
                    style={screenStyles.profilePicture}
                    source={require('../../Assets/Images/profilePicDummy.webp')}
                />
                <Text style={screenStyles.username}>{username}</Text>
                {
                    isEditing ?
                        <View style={screenStyles.editContainer}>
                            <Text style={screenStyles.editBoxTitle}>Edit Profile Details</Text>
                            <TextInput
                                style={screenStyles.textInput}
                                inputMode='numeric'
                                outlineColor={ColorPalette.green}
                                cursorColor={ColorPalette.green}
                                selectionColor={ColorPalette.green}
                                activeOutlineColor={ColorPalette.green}
                                label={'Mobile Number'}
                                mode='outlined'
                                onChangeText={(e) => setTempMobileNumber(e)}
                                value={tempMobileNumber}
                            />
                            <TextInput inputMode='email'
                                outlineColor={ColorPalette.green}
                                cursorColor={ColorPalette.green}
                                selectionColor={ColorPalette.green}
                                activeOutlineColor={ColorPalette.green}
                                label={'Email'}
                                mode='outlined'
                                style={screenStyles.textInput}
                                onChangeText={(e) => setTempEmail(e)}
                                value={tempEmail}
                            />
                            <View style={screenStyles.editButtonsContainer}>
                                <TouchableOpacity onPress={handleCancelEdit} style={screenStyles.cancelEditButton}>
                                    <Entypo size={25} name='cross' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleSaveEdit} style={screenStyles.saveEditButton}>
                                    <Entypo size={25} name='check' />
                                </TouchableOpacity>
                            </View>
                        </View>

                        :
                        <View>
                            <Text>Mobile: {mobileNumber}</Text>
                            <Text>Email: {email}</Text>
                        </View>
                }
            </View>

            <View style={screenStyles.threeIconContainer}>
                <TouchableOpacity >
                    <AntDesign style={screenStyles.threeIcon} name='heart' color={ColorPalette.red} size={30} />
                    <Text style={screenStyles.threeIconTitle}>Liked</Text>
                    <Text style={screenStyles.threeIconSubtitle}>{likeCount}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 style={screenStyles.threeIcon} name='user-friends' color={ColorPalette.blue} size={30} />
                    <Text style={screenStyles.threeIconTitle}>Friends</Text>
                    <Text style={screenStyles.threeIconSubtitle}>127</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 style={screenStyles.threeIcon} name='trophy' color={ColorPalette.yellow} size={30} />
                    <Text style={screenStyles.threeIconTitle}>Achivements</Text>
                    <Text style={screenStyles.threeIconSubtitle}>2</Text>
                </TouchableOpacity>
            </View>
            <View style={screenStyles.OptionCardContainer}>
                <OptionCard iconName={'boxes'} iconFamily={'FontAwesome5'} optionTitle={'My Orders'} />
                <OptionCard iconName={'dollar'} iconFamily={'FontAwesome'} optionTitle={'Refer and Earn'} />
                <OptionCard iconName={'help'} iconFamily={'Entypo'} optionTitle={'Help Center'} />
                <OptionCard onPressFn={handleEditOption} iconName={'edit'} iconFamily={'AntDesign'} optionTitle={'Edit Profile Details'} />
                <OptionCard iconName={'setting'} iconFamily={'AntDesign'} optionTitle={'Settings'} />
            </View>

        </KeyboardAwareScrollView>
    )
}

export default Me