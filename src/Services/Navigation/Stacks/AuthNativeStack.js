import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RegisterPage from '../../../screens/RegisterPage/RegisterPage'
import LoginPage from '../../../screens/LoginPage/LoginPage'

const Stack = createNativeStackNavigator()

const AuthNativeStack = () => {
    return (

        <Stack.Navigator initialRouteName='LoginPage' >
            <Stack.Screen
                name='LoginPage'
                component={LoginPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='RegisterPage'
                component={RegisterPage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AuthNativeStack