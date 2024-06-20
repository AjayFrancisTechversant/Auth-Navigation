import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";
import { ScreenContext } from "react-native-screens";


const styles = (screenContext, width, height) => StyleSheet.create({
    canvas: { backgroundColor: 'white', flex: 1 },
    SegmentedButtons: {
        width: width * 0.7, alignSelf: 'center', marginVertical: 20,

    },
    SegmentedButtonValueText: { marginLeft: 20 },
    card: { width:screenContext.isTypeTablet? width * 0.9:width*0.8, alignSelf: 'center' },
    cardImageStyle:{height:screenContext.isTypeTablet?height*0.4:height*0.3},

    showMenuButton: { width: 100 },
    toggleButttonsContainer: { alignSelf:'center',marginVertical:20},
    switchContainer: { marginTop: 10, marginLeft: 30, flexDirection: 'row' },
    snackBarText: { color: 'white' },

    dialog: { height: 300 },
    dialogTitle: { alignSelf: 'center' },
    downloadDataButton: {
        marginTop: 20,
        alignItems: 'center', justifyContent: 'center', height: 30, width: 130, backgroundColor: ColorPalette.green, borderRadius: 5, marginLeft: 30
    },
    downloadDataText: { color: 'white' },
    progressBar: { marginHorizontal: 30 },
    loremText: { marginHorizontal: 20 },
    FABGroup:{position:'absolute',bottom:45},
    animatedFabStyle: {
        bottom: 60,
        left: 16
    },
    DataTable: { margin: 20,borderWidth:1,width:width*0.9,borderRadius:5,alignSelf:'center',borderColor:'grey' },
    textInput:{marginBottom:80,width:width*0.8,alignSelf:'center'}
})
export default styles