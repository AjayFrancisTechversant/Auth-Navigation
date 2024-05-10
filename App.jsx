import { StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import LoginPage from './src/screens/LoginPage/LoginPage'
import Home from './src/screens/Home/Home'
import Details from './src/screens/Details/Details'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TokenContext, { LoginTokenContext } from './src/Contexts/TokenContext'
import { ScreenContextProvider } from './src/Contexts/ScreenContext'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Me from './src/screens/Me/Me'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Listing from './src/Components/Listing/Listing'
import Feather from 'react-native-vector-icons/Feather'
import HomeStack from './src/Stacks/HomeStack'
import OptionCard from './src/Components/OptionCard/OptionCard'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

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
        <Tab.Navigator screenOptions={{tabBarActiveTintColor:'#5ead97',
          
        }}>
          <Tab.Screen
          
          name='HomeStack'
          component={HomeStack} 
          options={{ headerShown: false,
            tabBarLabel:'Home',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" color={color} size={size} />
            )
          
          }}
          />
            <Tab.Screen
          
          name='Listing'
          component={Listing} 
          options={{ headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Feather name="list" color={color} size={size} />
            )
          
          }}
          />
            <Tab.Screen
          name='Me'
          component={Me} 
          options={{ headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" color={color} size={size} />
            )
            }}
          />

        </Tab.Navigator>
        }

    </NavigationContainer >

  )
}

export default function Main() {
  return (
    <ScreenContextProvider>
      <TokenContext>
        <App />
       
      </TokenContext>
    </ScreenContextProvider>
  )
}

const styles = StyleSheet.create({})