import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";


const styles = (screenContext, width, height) => StyleSheet.create({
   cardContainer: {
      flexDirection: "row", borderRadius: 5,borderWidth:1,borderColor:ColorPalette.green
   },

   image: { height: 90, margin: 10, alignSelf: 'center', borderRadius: 80, flex: 1 / 4 },
   detailsContainer: { flex: 3 / 4, alignSelf: 'center' },
})
export default styles