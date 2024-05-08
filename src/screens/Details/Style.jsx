import { StyleSheet } from "react-native"

const styles =(screenContext, width, height)=>
    StyleSheet.create({
    Container: {
        flex: 1
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
export default styles