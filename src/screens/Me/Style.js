import { StyleSheet } from "react-native"


const styles = (screenContext, width, height) =>
    StyleSheet.create({
        container: { flex: 1, margin: 20 },
        headerContainer: {
             flexDirection: 'row',
             
        },
        button: {
            flex:screenContext.isPortrait? 0.2:0.1,
            justifyContent: 'center',
            alignItems: 'center',
            height: height * 0.1,
            backgroundColor: '#5ead97',
            borderRadius: 10
        },
        buttonText: {
            padding: 10,
            color: 'white',

        },
        headerTitleContainer: { flex:screenContext.isPortrait? 0.8:0.9, alignItems: 'center' },
        headerTitle: { fontFamily:'helvetica-light-587ebe5a59211',fontSize: 50 },
        //userDetails
        profilePicture:{height:100,width:100},

      
        // 3IconContainer
        threeIconContainer:{flexDirection:'row',justifyContent:'space-evenly',marginVertical:20},
        threeIcon:{alignSelf:'center'},
        threeIconTitle:{fontFamily:'Rajdhani-Medium'},
        threeIconSubtitle:{alignSelf:'center',fontFamily:'Rajdhani-Bold'},

        OptionCardContainer:{marginHorizontal:screenContext.isPortrait? 20:100},


    })
export default styles