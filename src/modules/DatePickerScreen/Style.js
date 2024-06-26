import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";


const styles = (screenContext, width, height) => StyleSheet.create({
    canvas: { backgroundColor: 'white', flex: 1 },
    heading: { fontSize: 20, margin: 10, fontWeight: "bold" },
    button:{backgroundColor:ColorPalette.lightGreen,borderRadius:10,justifyContent:'center',alignItems:'center',width:50,height:50},
    text:{margin:10},
    subHeading:{fontSize:12,fontWeight:'bold',margin:10},
    textInput:{width:width*0.5,marginTop:-6},
    textInputAndButtonContainer:{margin:10,flexDirection:'row',gap:10}
})
export default styles