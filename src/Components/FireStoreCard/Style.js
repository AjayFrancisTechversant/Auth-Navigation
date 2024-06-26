import { StyleSheet } from "react-native"
import ColorPalette from "../../Assets/Themes/ColorPalette"

const styles = (screenContext, width, height) =>
    StyleSheet.create({
        card:{flexDirection:'row',justifyContent:'space-between',padding:10,borderRadius:10,margin:5,marginHorizontal:20,backgroundColor:'white',elevation:10,borderColor:ColorPalette.green,borderWidth:0.4},
        cardTittle:{fontSize:30},
        modalContainer:{flex:1,justifyContent:'center',
        alignItems:'center',backgroundColor:'rgb(0,0,0,0.7'},
        modal:{height:200,
            width:300,borderRadius:20,padding:10,backgroundColor:'white',elevation:30
        },
        modalTitle:{fontSize:20,alignSelf:'center'},
        flexRow:{flexDirection:'row',justifyContent:'space-evenly',marginTop:10}
    })
export default styles