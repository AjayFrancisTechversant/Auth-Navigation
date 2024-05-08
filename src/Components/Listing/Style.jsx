import { StyleSheet } from "react-native"

const styles = (screenContext, width, height) =>
    StyleSheet.create({
        container: { flex: 1 },
        title: { fontSize: 40, alignSelf: 'center' },
        textInput: { backgroundColor: '#cdf7ec', borderRadius: 5, width: '80%', borderColor: '#5897fc', borderWidth: 0.5 },
        button: {
            alignSelf: 'center',
            width: 50,
            height: 'auto',
            alignItems: 'center',
            backgroundColor: '#5ead97',
            borderRadius: 10,
        },
        buttonText: {
            padding: 10,
            color: 'white',
            fontSize: 18
        },
        addContainer: { flexDirection: 'row', justifyContent: 'space-around', marginHorizontal:screenContext.isPortrait? 50:100 },
        titleandDescContainer:{flex:0.5,fontSize:20,marginTop:10},
        itemTitle:{fontSize:30},
        itemDesc:{},
        itemContainer: {flex:1,flexDirection:'row',
            marginHorizontal: screenContext.isPortrait? 50:100,
            marginTop: 15, backgroundColor: '#9edecc', borderRadius: 5
        },
        
        imageContainer:{flex:0.3,alignItems:'center',margin:10,borderWidth:1,height:height*0.1},
        image: { height: '100%', width:screenContext.isPortrait? '100%':'100%' },
        deleteContainer:{flex:0.2,justifyContent:'center',},
        deleteButton: {
            borderRadius: 4,
            height: 'auto',
            width: '100%',
            alignItems:'center'
        },
        noItemsToDisplay: { marginHorizontal: 50, color: 'orange' }


    })
export default styles