import { Button, StyleSheet } from "react-native"

const styles = (screenContext, width, height) =>
    StyleSheet.create({
        container:{marginBottom:20},
        button:{borderWidth:1,height:40,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            borderRadius:5,
            borderColor:'#bad6ce'
        },
        icon:{marginLeft:10,color:'#5ead97'},
        buttonText:{marginLeft:20,color:'#5ead97'},
        rightIcon:{marginRight:20,color:'#5ead97'}

    })
export default styles