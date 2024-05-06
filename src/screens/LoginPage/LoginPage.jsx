import { StyleSheet, View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginTokenContext } from '../../Contexts/TokenContext'
// import {RootStackParamList} from '../../../App'





const LoginPage = ({ navigation }) => {
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
        <View style={styles.container} >
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
        </View>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: { flex: 1,justifyContent:'center',marginHorizontal:50 },
    textInput: { marginVertical: 15, borderWidth: 1, borderRadius: 10 },
    button: {
        alignSelf: 'center',
        width: 100,
        alignItems: 'center',
        backgroundColor: '#5ead97',
        borderRadius: 10
    },
    buttonText: {
        padding: 10,
        color: 'white',
        fontSize: 18
    }
})