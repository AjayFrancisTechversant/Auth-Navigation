import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";


const styles = (screenContext, width, height) => StyleSheet.create({
   cardContainer: {
      flexDirection: "row", borderRadius: 5,elevation:10,backgroundColor:'white'
   },

   image: { height: 90, margin: 10, alignSelf: 'center', borderRadius: 80, flex: 1 / 4 },
   detailsContainer: { flex: 2 / 4, alignSelf: 'center' },
   title:{fontSize:15,color:ColorPalette.green,
      fontFamily:'Helvetica-Bold'
   },
   buttonsContainer:{flex:1/4,justifyContent:"space-evenly",alignItems:'center',},
   
//modal
   modalFullScreenBackground:{flex:1,justifyContent:'center'},
   modalContainer:{},
   userContainer: { alignSelf: 'center',
   width: screenContext.isPortrait ? width * 0.8 : height * 0.7,
   alignItems: 'center',
   borderColor: ColorPalette.green,
   borderWidth: 0.5,
   backgroundColor: 'white',
   borderRadius: 10, marginVertical: 5,
   elevation: 100,shadowColor:'black'},
   modalImage:{height:150,width:150,borderRadius:10},
   modalButtonsContainer: {
       flexDirection: 'row', width: 150, justifyContent: 'space-evenly',
       marginVertical: 10
   },
   descContainer:{alignItems:'center',marginBottom:10}
})
export default styles