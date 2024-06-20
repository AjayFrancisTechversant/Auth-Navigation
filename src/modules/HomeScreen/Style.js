import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";


const styles = (screenContext, width, height) => StyleSheet.create({
    canvas: { backgroundColor: 'white', flex: 1 },
    container: { margin: 10 },
    headerContainer: {
         height: 150, marginBottom: -20, borderRadius: 5,
    },
    headerContents: {
        flexDirection: 'row',
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 10,
    },
    menuDrawerButtonContainer:{flex:0.1},
    logoContainer:{flex:0.9,marginLeft:10
    },
    logo: { height: 60, width: 100},
    searchBarContainer: {
        marginBottom:10
    },
   
    homeScreenCardContainer:{margin:5,},
    fab:{position:'absolute',bottom:20,right:20}

})
export default styles