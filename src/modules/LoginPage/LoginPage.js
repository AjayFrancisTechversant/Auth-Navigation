import { View, Text, Alert, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useScreenContext } from '../../Contexts/ScreenContext'
import styles from './Style'
import { TextInput } from 'react-native-paper'
import auth from '@react-native-firebase/auth';
import GoogleAuthButton from '../../Components/GoogleAuthButton/GoogleAuthButton'
import FacebookAuthButton from '../../Components/FacebookAuthButton/FacebookAuthButton'
import GithubAuthButton from '../../Components/GithubAuthButton/GithubAuthButton'

const LoginPage = ({ navigation }) => {
    const [userData, setUserData] = useState({ email: '', password: '' })
    const [isLoading, setIsLoading] = useState(false)

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
    const handleAnonymousLogin = () => {
        setIsLoading(true)
        auth()
            .signInAnonymously()
            .then(() => {
                console.log('User signed in anonymously');
            })
            .catch(error => {
                if (error.code === 'auth/operation-not-allowed') {
                    console.log('Enable anonymous in your firebase console.');
                }

                console.error(error);
            }).finally(()=>{
                setIsLoading(false)
            })
        
    }
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );

    return (

        < KeyboardAwareScrollView extraHeight={250} style={screenStyles.canvas} >
            <View style={screenStyles.container} >
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
                <Text style={screenStyles.selfAlignCenter}>--------------------------------  Or  --------------------------------</Text>
                <View style={screenStyles.AlllogoContainer}>

                    <FacebookAuthButton/>
                    <GoogleAuthButton/>
                   <GithubAuthButton/>
                </View>
                <View style={screenStyles.lastViewContainer}>
                    <Text>Continue as </Text>
                    <TouchableOpacity onPress={handleAnonymousLogin}>
                        {isLoading ?
                            <ActivityIndicator />
                            :
                            <Text style={screenStyles.greenUnderlinetext}>
                                Guest
                            </Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </ KeyboardAwareScrollView>
    )
}

export default LoginPage

