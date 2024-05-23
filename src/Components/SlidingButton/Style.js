import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";


const styles = (height,width,sliderWidth ) => StyleSheet.create({
    container:{height:height,width:width,backgroundColor:ColorPalette.lightGreen,borderRadius:10,padding:1,borderWidth:1,borderColor:ColorPalette.green},
    slider:{height:'100%',width:sliderWidth,backgroundColor:ColorPalette.green,borderRadius:10,justifyContent:'center',alignItems:'center'}
   
})
export default styles