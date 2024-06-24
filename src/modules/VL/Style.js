import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";


const styles = (screenContext, width, height) => StyleSheet.create({
    canvas: { flex: 1,backgroundColor:'white'  },
    MenuDrawerButton:{position:'absolute',left:20,top:20},
    heading:{fontSize:20,fontWeight:'bold'},
    headingContainer:{justifyContent:'center',margin:20,gap:10},
    commentsContainer:{backgroundColor:ColorPalette.lightOrange,height:screenContext.isPortrait?height*0.8:width*0.6,elevation:5,borderRadius:20,margin:20},
    flexDRow:{flexDirection:'row'},
    emptyComponentContainer:{margin:30,alignSelf:'center'},
    emptyComponentText:{color:'white',fontSize:15,fontWeight:'bold'},
    loadingContainer:{margin:30,alignSelf:'center'},
    commentCard:{borderRadius:20,backgroundColor:'white',padding:20,elevation:5,marginTop:10,marginHorizontal:10},
    separator:{height:5},
    commentTitle:{fontWeight:'bold',color:ColorPalette.lightOrange}
   
})
export default styles