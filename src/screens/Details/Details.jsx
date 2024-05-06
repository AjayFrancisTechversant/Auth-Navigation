import { StyleSheet, Text, View,Alert,Button,TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginTokenContext } from '../../Contexts/TokenContext'

const Details = (props) => {
    const {tokenStatus,setTokenStatus}=useContext(LoginTokenContext)
    const handleLogout=async()=>{
        await AsyncStorage.removeItem("isLoggedin")
        setTokenStatus(false)
    }
 
    const {title,description}=props.route.params.item

    return (
       
        <ScrollView>
            <View style={{alignItems:'center'}}>
              
                    <View style={styles.card}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                    <TouchableOpacity onPress={handleLogout}>  
                        <View style={styles.button}>  
                            <Text style={styles.buttonText}>Logout</Text>  
                        </View>  
                    </TouchableOpacity>  
    
                    
             
            
        </View>
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        color: 'black',
        borderWidth: 3,
    },
    card:{
    borderRadius:5,margin:20},
    button: {    
        width: 200,  
        alignItems: 'center',  
        backgroundColor: '#5ead97' ,
        borderRadius:10 
    },  
    buttonText: {  
        padding: 15,  
        color: 'white',  
        fontSize: 18  
    } ,
    title:{fontSize:30,color:'black'},
    description:{fontSize:20}
})