import { StyleSheet, View, Text, TextInput, Button, Alert, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginTokenContext } from '../../Contexts/TokenContext'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useScreenContext } from '../../Contexts/ScreenContext'
import styles from './Style'



const LoginPage = ({ navigation }) => {
    const { tokenStatus, setTokenStatus } = useContext(LoginTokenContext)
    const [userData, setUserData] = useState({ username: '', password: '' })
    // console.log(userData);
    const handleLogin = async () => {
        if (!userData.username || !userData.password) { Alert.alert("Please fill the form ") }
        else {
            await AsyncStorage.setItem("isLoggedin", userData.username)
            setTokenStatus(true)
        }
    }
    const screenContext = useScreenContext();
    const screenStyles = styles(
      screenContext,
      screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
      screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    return (

        < KeyboardAwareScrollView extraHeight={250} >
            <View
                style={screenStyles.container} >

                <Text style={{ fontSize: 50, alignSelf: 'center' }}> Login</Text>

                <TextInput style={screenStyles.textInput}
                    placeholder="Enter username"
                    onChangeText={(e) => setUserData({ ...userData, username: e })}
                />
                <TextInput style={screenStyles.textInput}
                    secureTextEntry
                    placeholder="Enter password"
                    onChangeText={(e) => setUserData({ ...userData, password: e })}
                />

                <TouchableOpacity onPress={handleLogin}>
                    <View style={screenStyles.button}>
                        <Text style={screenStyles.buttonText}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ KeyboardAwareScrollView>


    )
}

export default LoginPage

