import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";


const styles =(screenContext, width, height)=> StyleSheet.create({
    canvas:{backgroundColor:'white',flex:1},
    container: { flex: 1, marginHorizontal:screenContext.isPortrait? width*0.1:width*0.3, marginTop: 50 },
    textInput: { marginVertical: 15 },
    button: {
        alignSelf: 'center',
        width: 100,
        alignItems: 'center',
        backgroundColor: ColorPalette.green,
        borderRadius: 10,
    },
    buttonText: {
        padding: 10,
        color: 'white',
        fontSize: 18
    },
    invalidInput:{color:ColorPalette.red}
})
export default styles