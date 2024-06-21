import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";


const styles = (screenContext, width, height) => StyleSheet.create({
    canvas: { flex: 1,  },
    bgImage: { height: '100%',},
    detailsContainer: { position: 'absolute', alignSelf: 'center', borderRadius: 20,  width: width * 0.8, backgroundColor: 'rgb(244, 250, 252)', bottom: 40, elevation: 20 },

    currentLocationButtonContainer: { position: 'absolute', backgroundColor: 'rgb(244, 250, 252)',  borderRadius: 20,bottom:30,right:30,elevation:10},
    currentLocationButton:{padding:20},
    mainHeading:{fontSize:40,fontWeight:'bold',color:'white',alignSelf:'center',margin:20,fontFamily:'Helvetica'},
    subHeading:{fontSize:20,margin:30,},
    text:{marginVertical:5,marginLeft:20},
    closeButton: { position: 'absolute', right: 10, top: 10 },
    openMapsButton:{borderRadius:20,backgroundColor:ColorPalette.green,width:200,alignSelf:'center',height:40,justifyContent:'center',alignItems:'center',margin:20,flexDirection:'row',gap:5},
    openMapsText:{color:'white'}
})
export default styles