import { StyleSheet, View, Text, TextInput, Button, Alert, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginTokenContext } from '../../Contexts/TokenContext'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import {RootStackParamList} from '../../../App'






const LoginPage = ({ navigation }) => {
    const window=useWindowDimensions()
    const {tokenStatus,setTokenStatus}=useContext(LoginTokenContext)
    const [userData, setUserData] = useState({ username: '', password: '' })
    // console.log(userData);
    const handleLogin = async() => {
        if (!userData.username || !userData.password) { Alert.alert("Please fill the form ") }
        else {
           await AsyncStorage.setItem("isLoggedin","true")
            setTokenStatus(true)
        }
    }
    return (
        <KeyboardAwareScrollView extraHeight={250}>
                <View
                style={styles.container} >
                    
                    <Text style={{fontSize:50,alignSelf:'center'}}> Login</Text>
                  
                        <TextInput style={styles.textInput}
                            placeholder="Enter username"
                            onChangeText={(e) => setUserData({ ...userData, username: e })}
                        />
                        <TextInput style={styles.textInput}
                            secureTextEntry
                            placeholder="Enter password"
                            onChangeText={(e) => setUserData({ ...userData, password: e })}
                        />
                  
                        <TouchableOpacity onPress={handleLogin}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Login</Text>
                            </View>
                        </TouchableOpacity>
                   
                    <Text>Height:{window.height}</Text>
                    <Text>width:{window.width}</Text>
                    <Text>fontScale:{window.fontScale}</Text>
                    <Text>scale:{window.scale}</Text>
                </View>
                </KeyboardAwareScrollView>

       
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {flex:1,marginHorizontal:50,marginTop:50},
    textInput: { marginVertical: 15, borderWidth: 1, borderRadius: 10 },
    button: {
        alignSelf: 'center',
        width: 100,
        alignItems: 'center',
        backgroundColor: '#5ead97',
        borderRadius: 10,
    },
    buttonText: {
        padding: 10,
        color: 'white',
        fontSize: 18
    }
})