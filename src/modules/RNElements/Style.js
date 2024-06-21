import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";


const styles = (screenContext, width, height) => StyleSheet.create({
    canvas: { backgroundColor: 'white', flex: 1 },
    mainHeading:{fontSize:20,margin:20,fontWeight:'bold'},
    boxSkeleton:{},
    circleSkeleton:{height:30},
    skeletonContainer:{flexDirection:'row'}
})
export default styles