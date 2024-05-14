import { View, Text, Alert, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginTokenContext } from '../../Contexts/TokenContext'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useScreenContext } from '../../Contexts/ScreenContext'
import styles from './Style'
import { TextInput } from 'react-native-paper'
import { validPassword } from '../../RegExp/RegExp'



const LoginPage = ({ navigation }) => {
    const { tokenStatus, setTokenStatus } = useContext(LoginTokenContext)
    const [userData, setUserData] = useState({ username: '', password: '' })
    const [passwordError, setPasswordError] = useState(false);
    // console.log(userData);

    const handleLogin = async () => {
        if (!validPassword.test(userData.password)) {
            setPasswordError(true);
        }
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

                    onChangeText={(e) => setUserData({ ...userData, username: e })}
                    mode="outlined"
                    label="Username"
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
                {passwordError &&
                    <Text style={screenStyles.invalidInput}>Invalid Password!</Text>
                }
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

