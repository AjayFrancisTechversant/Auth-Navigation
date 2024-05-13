import { StyleSheet } from "react-native";


const styles =(screenContext, width, height)=> StyleSheet.create({
    container: { flex: 1, marginHorizontal:screenContext.isPortrait? width*0.1:width*0.3, marginTop: 50 },
    textInput: { marginVertical: 15, borderWidth: 1, borderRadius: 10 },
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
    }
})
export default styles