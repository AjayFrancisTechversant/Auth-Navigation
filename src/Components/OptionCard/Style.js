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
        icon:{marginLeft:10,color:ColorPalette.green},
        buttonText:{marginLeft:20,color:ColorPalette.green},
        rightIcon:{marginRight:20,color:ColorPalette.green}

    })
export default styles