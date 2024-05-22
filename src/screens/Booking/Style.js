import { StyleSheet } from "react-native"
import ColorPalette from "../../Assets/Themes/ColorPalette"

const styles = (screenContext, width, height) =>
    StyleSheet.create({
        bgImageContainer:{position:'absolute',marginTop:10,width:width,
          alignItems:'center' },
        bgImage:{height:400,width:width*0.94},
        bgImageStyle:{borderTopRightRadius:30,
            borderTopLeftRadius:30,
        },
        transparentView:{height:70},
        menuDrawerButton:{margin:20},
        contentsContainer:{marginHorizontal:10,marginTop:380,borderTopRightRadius:30,borderTopLeftRadius:30,backgroundColor:'white'},
        contentsSubContainer:{margin:20,justifyContent:'space-between'},

        titleAndPriceContainer:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
        title:{fontSize:40,fontFamily:'Helvetica-Bold',width:200},
        price:{fontSize:20,color:ColorPalette.green,fontFamily:'Helvetica-Bold'},
        location:{color:ColorPalette.green,fontSize:20,fontFamily:'Helvetica-Bold'},

        subTitle:{fontSize:20,fontFamily:'Helvetica-Bold'},
        subText:{fontFamily:'Helvetica-Bold',color:'gray'},

        numberBoxContainer:{marginVertical:10,flexDirection:'row'},
        numberBoxSelected:{marginHorizontal:5,height:30,width:30,backgroundColor:ColorPalette.green,borderRadius:10,alignItems:'center',justifyContent:'center'},
        numberBoxNotSelected:{marginHorizontal:5,height:30,width:30,backgroundColor:ColorPalette.lightGreen,borderRadius:10,alignItems:'center',justifyContent:'center'},
        //
        buttonContainer:{paddingHorizontal:20,paddingVertical:10,flexDirection:'row',width:'100%',justifyContent:'space-evenly',position:"absolute",bottom:0,backgroundColor:'white'},
        bookmarkTouchableOpacity:{height:50,width:'20%',borderWidth:1,borderColor:ColorPalette.green,borderRadius:5,alignItems:'center',justifyContent:'center'},
        slideTouchableOpacity:{height:50,width:'70%',borderWidth:1,borderColor:ColorPalette.green,borderRadius:5,alignItems:'center',justifyContent:'center'}
    })
export default styles