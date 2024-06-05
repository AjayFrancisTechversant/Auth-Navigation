import { StyleSheet } from "react-native"
import ColorPalette from "../../Assets/Themes/ColorPalette"

const styles = (screenContext, width, height) =>
    StyleSheet.create({
        canvas:{backgroundColor:'white',flex:1},
        container: { flex: 1,marginTop:20 },
        title: { fontSize: 50, alignSelf: 'center',fontFamily:'helvetica-light-587ebe5a59211' },
        addContainer: { alignSelf:'center',width:width*0.6 },
        button: {marginTop:10,
            alignSelf: 'center',
            width: 50,
            height: 'auto',
            alignItems: 'center',
            backgroundColor: ColorPalette.green,
            borderRadius: 10,
        },
        buttonText: {
            padding: 10,
            color: 'white',
            fontSize: 18
        },
        noItemsToDisplay: {  color: 'orange',alignSelf:'center',marginTop:20 },
        card:{flexDirection:'row',justifyContent:'space-between',padding:10,borderRadius:10,margin:5,marginHorizontal:20,backgroundColor:'white',elevation:10,borderColor:ColorPalette.green,borderWidth:0.4},
        cardTittle:{fontSize:30},
        modalContainer:{flex:1,justifyContent:'center',
        alignItems:'center',backgroundColor:'rgb(0,0,0,0,7'},
        modal:{height:200,
            width:300,borderRadius:20,padding:10,backgroundColor:'white',elevation:30
        }
    })
export default styles