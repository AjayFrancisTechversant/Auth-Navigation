import { StyleSheet } from "react-native";

const styles = (screenContext, width, height) => StyleSheet.create({
    canvas: { backgroundColor: 'white', flex: 1 },
    calendar: {
        margin: 10,borderWidth:1,borderRadius:10,borderColor:'grey',borderStyle:'dotted'
      },
      text: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'lightgrey',
        fontSize: 16
      },
})
export default styles