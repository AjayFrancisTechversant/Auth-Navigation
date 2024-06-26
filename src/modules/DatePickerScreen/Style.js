import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";


const styles = (screenContext, width, height) => StyleSheet.create({
    canvas: { backgroundColor: 'white', flex: 1 },
    heading: { fontSize: 20, margin: 10, fontWeight: "bold" },
    button:{backgroundColor:ColorPalette.lightGreen,borderRadius:10,justifyContent:'center',alignItems:'center',margin:10,width:40,height:40},
    text:{margin:10},
    subHeading:{fontSize:12,fontWeight:'bold',margin:10},
    textInput:{width:width*0.5,},
    textInputAndButtonContainer:{margin:10,flexDirection:'row'}
})
export default styles