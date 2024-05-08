import { StyleSheet } from "react-native"


const styles =(screenContext, width, height)=>
     StyleSheet.create({
    Container: {
        flex: 1,
       marginTop:20,
    },
    button: {  alignSelf:'center',  
        width:screenContext.isPortrait? width*0.7:height*0.7,  
        alignItems: 'center',  
        backgroundColor: '#5ead97' ,
        borderRadius:10 ,margin:5
    },  
    buttonText: {  
        padding: 20,  
        color: 'white',  
        fontSize: 18  
    } ,
    textInput: {  borderWidth: 1, borderRadius: 10 }
})
export default styles