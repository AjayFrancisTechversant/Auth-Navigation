import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";


const styles = (screenContext, width, height) => StyleSheet.create({
    canvas: { backgroundColor: 'white', flex: 1 },
    SegmentedButtons:{width:width*0.7,alignSelf:'center',marginVertical:20,
        
    },
    SegmentedButtonValueText:{marginLeft:20},
    card:{width:width*0.8,alignSelf:'center'},
    showMenuButton:{width:100},
    toggleButttonsContainer:{marginLeft:30},
    switchContainer:{marginTop:30,marginLeft:30,flexDirection:'row'},
    snackBarText:{color:'white'},
    
    dialog:{height:300},
    dialogTitle:{alignSelf:'center'},
    downloadDataButton:{marginTop:20,
        alignItems:'center',justifyContent:'center',height:30,width:130,backgroundColor:ColorPalette.green,borderRadius:5,marginLeft:30
    },
    downloadDataText:{color:'white'},
    progressBar:{marginHorizontal:30},
    loremText:{marginHorizontal:20},
    animatedFabStyle:{ position: 'absolute',
          bottom: 16,
        left: 16
        }

})
export default styles