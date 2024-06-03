import { View, Text, Alert, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useScreenContext } from '../../Contexts/ScreenContext'
import styles from './Style'
import { TextInput } from 'react-native-paper'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginTokenContext } from '../../Contexts/TokenContext'


const LoginPage = ({ navigation }) => {
    const { tokenStatus, setTokenStatus } = useContext(LoginTokenContext)
    const [userData, setUserData] = useState({ email: '', password: '' })


    const handleLogin = async () => {

        if (!userData.email || !userData.password) {
            Alert.alert('Please fill the form completeley!!!')
        }
        else {
            auth()
                .signInWithEmailAndPassword(userData.email, userData.password)
                .then(() => {
                    console.log('signed in!');
                    //  AsyncStorage.setItem("isLoggedin", userData.email)
                    // setTokenStatus(true)
                })
                .catch(error => {
                    if (error.code === 'auth/invalid-email') {
                        Alert.alert('That email address is invalid!');
                    }
                    if (error.code === 'auth/invalid-credential') {
                        Alert.alert('Invalid Credentials');
                    }


                    console.error(error);
                });
        }
    }
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );

    return (

        < KeyboardAwareScrollView extraHeight={250} style={screenStyles.canvas} >
            <View
                style={screenStyles.container} >

                <Text style={{ fontSize: 50, alignSelf: 'center' }}> Log In</Text>

                <TextInput style={screenStyles.textInput}

                    onChangeText={(e) => setUserData({ ...userData, email: e })}
                    mode="outlined"
                    label="Email"
                    selectionColor={ColorPalette.green}
                    underlineColor={ColorPalette.green}
                    activeUnderlineColor={ColorPalette.green}
                    outlineColor={ColorPalette.green}
                    activeOutlineColor={ColorPalette.green}
                />
                <TextInput style={screenStyles.textInput}
                    secureTextEntry

                    onChangeText={(e) => setUserData({ ...userData, password: e })}
                    mode="outlined"
                    label="Password"
                    selectionColor={ColorPalette.green}
                    underlineColor={ColorPalette.green}
                    activeUnderlineColor={ColorPalette.green}
                    outlineColor={ColorPalette.green}
                    activeOutlineColor={ColorPalette.green}
                />
                <TouchableOpacity onPress={handleLogin}>
                    <View style={screenStyles.button}>
                        <Text style={screenStyles.buttonText}>Login</Text>
                    </View>
                </TouchableOpacity>
                <View style={screenStyles.lastViewContainer}>
                    <Text >New User? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')}>
                        <Text style={screenStyles.greenUnderlinetext}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ KeyboardAwareScrollView>


    )
}

export default LoginPage

