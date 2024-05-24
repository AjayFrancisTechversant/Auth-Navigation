import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";

const styles = (height,width,sliderWidth ) => StyleSheet.create({
    container:{height:height,width:width,borderRadius:10,padding:1,borderWidth:1,borderColor:ColorPalette.green,
        justifyContent:'center'
    },
    slider:{height:'100%',width:sliderWidth,backgroundColor:ColorPalette.green,borderRadius:10,justifyContent:'center',alignItems:'center',},
    sliderText:{position:'absolute',alignSelf:'center',
    fontSize:height*0.3,
    color:ColorPalette.green,fontFamily:'Helvetica-Bold'
    },
    sliderIcon:{color:'white'}
})
export default styles