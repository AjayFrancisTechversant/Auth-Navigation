import { StyleSheet } from "react-native"

const styles =(screenContext, width, height) =>
     StyleSheet.create({
    titleandDescContainer:{flex:0.5,fontSize:20,marginTop:10},
    itemTitle:{fontSize:30},
    itemDesc:{},
    itemContainer: {flex:1,flexDirection:'row',
        marginHorizontal: screenContext.isPortrait? 50:100,
        marginTop: 15, backgroundColor: '#9edecc', borderRadius: 5
    },
    
    imageContainer:{flex:0.3,alignItems:'center',margin:10,height:height*0.1},
    image: { height: '100%', width:screenContext.isPortrait? '100%':'100%',borderRadius:5 },
    deleteContainer:{flex:0.2,justifyContent:'center',},
    deleteButton: {
        borderRadius: 4,
        height: 'auto',
        width: '100%',
        alignItems:'center'
    },button: {  alignSelf:'center',  
    width:screenContext.isPortrait? width*0.7:height*0.7,  
    alignItems: 'center',  
    backgroundColor: '#5ead97' ,
    borderRadius:10 ,margin:5
},  
buttonText: {  
    padding: 20,  
    color: 'white',  
    fontSize: 18  
}
})
export default styles