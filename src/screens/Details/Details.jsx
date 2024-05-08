import {  Text, View,Alert,Button,TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginTokenContext } from '../../Contexts/TokenContext'
import Listing from '../../Components/Listing/Listing'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './Style'
import { useScreenContext } from '../../Contexts/ScreenContext'


const Details = (props) => {
    const {tokenStatus,setTokenStatus}=useContext(LoginTokenContext)
    const handleLogout=async()=>{
        await AsyncStorage.removeItem("isLoggedin")
        setTokenStatus(false)
    }
    const screenContext = useScreenContext();
    const screenStyles = styles(
      screenContext,
      screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
      screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
 
    const {title,description}=props.route.params.item

    return (
       
       <>
            <KeyboardAwareScrollView>
                <View style={{alignItems:'center'}}>
                  
                        <View style={screenStyles.card}>
                            <Text style={screenStyles.title}>{title}</Text>
                            <Text style={screenStyles.description}>{description}</Text>
                        </View>
                        <TouchableOpacity onPress={handleLogout}>  
                            <View style={screenStyles.button}>  
                                <Text style={screenStyles.buttonText}>Logout</Text>  
                            </View>  
                        </TouchableOpacity>  
            
            </View>
            
        
                <Listing/>
            </KeyboardAwareScrollView>
           
       </>
    )
}

export default Details

