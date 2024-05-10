import { StyleSheet } from "react-native"

const styles =(screenContext, width, height)=>
    StyleSheet.create({
    Container: {
        flex: 1
    },
    card:{
    borderRadius:5,margin:20},
    title:{fontSize:30,color:'black',fontFamily:'helvetica-light-587ebe5a59211' },
    description:{fontSize:20,fontFamily:'Rajdhani-Medium'},
    image:{marginVertical:20,
        height:screenContext.isPortrait?200:400,
        width:screenContext.isPortrait?200:400,
        alignSelf:'center'
    },
})
export default styles