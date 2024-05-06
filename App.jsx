import { StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import LoginPage from './src/screens/LoginPage/LoginPage'
import Home from './src/screens/Home/Home'
import Details from './src/screens/Details/Details'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TokenContext, { LoginTokenContext } from './src/Contexts/TokenContext'


const Stack = createNativeStackNavigator()

const App = () => {
  const {tokenStatus,setTokenStatus}=useContext(LoginTokenContext)
  const [token,setToken]=useState(true)

  const tokenCheck=async()=>{
    if(await AsyncStorage.getItem("isLoggedin")){
      setToken(true)
    }
    else{
      setToken(false)
    }
  }

  useEffect(()=>{
    tokenCheck()
  },[tokenStatus])
  

  return (
   
      <NavigationContainer>
  
        <Stack.Navigator initialRouteName='LoginPage' >

       {!token?
          <Stack.Screen
            name='LoginPage'
            component={LoginPage}
          options={{headerShown:false}}
          />
          :
         <>
            <Stack.Screen
              name='Home'
              component={Home}
            />
            <Stack.Screen
              name='Details'
              component={Details}
            />
         </>}
        </Stack.Navigator>
      </NavigationContainer >
  
  )
}

// export default App
export default function Main(){
  return(
    <TokenContext>
      <App/>
    </TokenContext>
  )
}

const styles = StyleSheet.create({})