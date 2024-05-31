import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";


const styles = (screenContext, width, height) => StyleSheet.create({
   canvas:{flex:1,backgroundColor:'white'},
   container:{flex:1,margin:10, borderRadius:20,elevation:10,backgroundColor:'white'},

   pieContainer:{borderRadius:20,height:'45%',elevation:30,backgroundColor:'white'},
   backButton:{position:'absolute',left:15,top:10},
   heading:{fontSize:20,marginTop:10,alignSelf:'center'},

   pieChartContainer:{width:'100%',alignItems:'center',marginVertical:10},

   pieChartLabel:{fontSize:25},
   pieChartLegendContainer:{alignSelf:'center',flexDirection:'row',gap:30},
   colorBit1:{height:10,width:30,backgroundColor:ColorPalette.pink,borderRadius:5,alignSelf:'center'},
   colorBit2:{height:10,width:30,backgroundColor:ColorPalette.violet,borderRadius:5,alignSelf:'center'},
   colorBit3:{height:10,width:30,backgroundColor:ColorPalette.lightBlue,borderRadius:5,alignSelf:'center'},
   //

   barContainer:{height:'55%'},
   barChartContainer:{ alignSelf:'center',marginVertical:20 },
   dealsContainer:{flexDirection:'row',justifyContent:'space-around'},
   text1012:{alignSelf:'center',color:ColorPalette.brightGreen,fontFamily:'Helvetica-Bold',fontSize:30},
   text26B:{alignSelf:'center',fontFamily:'Helvetica-Bold',fontSize:30,color:'black'},
   normalTexts:{fontFamily:'Helvetica-Bold',color:'black'},

   progressionButton:{height:50,width:'80%',alignSelf:'center',justifyContent:'center',alignItems:'center',borderRadius:25,backgroundColor:ColorPalette.violet,marginVertical:25},
   progressionText:{color:'white'},
   rightIconAbslute:{position:'absolute',right:20}
})
export default styles