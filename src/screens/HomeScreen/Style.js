import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";


const styles = (screenContext, width, height) => StyleSheet.create({
    canvas: { backgroundColor: 'white', flex: 1 },
    container: { margin: 10 },
    headerContainer: {
        backgroundColor: ColorPalette.green, height: 100, marginBottom: -20, borderRadius: 5,
    },
    headerContents: {
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 10
    },
    logo: { height: 60, width: 100 },
    searchBarContainer: {
        alignItems: 'center'
    }
})
export default styles