import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TokenContext from './src/Contexts/TokenContext'
import { ScreenContextProvider } from './src/Contexts/ScreenContext'
import HomeTabStack from './src/Services/Navigation/Stacks/HomeTabStack'
import { Provider } from 'react-redux'
import { persistor, store } from './src/Redux/Store/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth';
import AuthNativeStack from './src/Services/Navigation/Stacks/AuthNativeStack'
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { PaperProvider } from 'react-native-paper'
import DatePickerScreen from './src/modules/DatePickerScreen/DatePickerScreen'
import Calender from './src/modules/Calender/Calender'
import I18njs from './src/modules/I18njs/I18njs'



PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

const Stack = createNativeStackNavigator()

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const linking = {
    prefixes: ['myapp://'],
    config: {
      screens: {
        HomeTabStack: {
          screens: {
            Me: {
              path: 'Me'
            },
            Listing: {
              path: 'Listing'
            }
          }
        },

      }
    },
  };

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  const handleGetFCMToken = async () => {
    const FCMToken = await messaging().getToken()
    console.log('FCMToken:', FCMToken);
  }

  useEffect(() => {
    // handleGetFCMToken()
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (

    <NavigationContainer linking={linking}>
      {!user ?
        <Stack.Navigator  >
          <Stack.Screen
            name='AuthNativeStack'
            component={AuthNativeStack}
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
        </Stack.Navigator>
      }
    </NavigationContainer >
  )
}

export default function Main() {
  return (
    <ScreenContextProvider>
      <TokenContext>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GestureHandlerRootView>
              <PaperProvider>
                {/* <App /> */}
                <I18njs/>
              </PaperProvider>
            </GestureHandlerRootView>
          </PersistGate>
        </Provider>
      </TokenContext>
    </ScreenContextProvider>
  )
}

const styles = StyleSheet.create({})