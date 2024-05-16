import { StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import LoginPage from './src/screens/LoginPage/LoginPage'
import Details from './src/screens/Details/Details'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TokenContext, { LoginTokenContext } from './src/Contexts/TokenContext'
import { ScreenContextProvider } from './src/Contexts/ScreenContext'
import HomeTabStack from './src/Stacks/HomeTabStack'
import { Provider } from 'react-redux'
import { Store } from './src/Store/Store'


const Stack = createNativeStackNavigator()

const App = () => {
  const { tokenStatus, setTokenStatus } = useContext(LoginTokenContext)
  const [token, setToken] = useState(true)

  const tokenCheck = async () => {
    if (await AsyncStorage.getItem("isLoggedin")) {
      setToken(true)
    }
    else {
      setToken(false)
    }
  }

  useEffect(() => {
    tokenCheck()
  }, [tokenStatus])


  return (

    <NavigationContainer>



      {!token ?
        <Stack.Navigator initialRouteName='LoginPage' >
          <Stack.Screen
            name='LoginPage'
            component={LoginPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        :
        <Stack.Navigator>
          <Stack.Screen
            name='HomeTabStack'
            component={HomeTabStack}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Details'
            component={Details}
          />
        </Stack.Navigator>
      }
    </NavigationContainer >

  )
}

export default function Main() {
  return (
    <ScreenContextProvider>
      <TokenContext>
        <Provider store={Store}>
          <App />
          </Provider>
      </TokenContext>
    </ScreenContextProvider>
  )
}

const styles = StyleSheet.create({})