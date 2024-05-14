import { StyleSheet } from "react-native"

const styles = (screenContext, width, height) =>
    StyleSheet.create({
        Container: {
            marginTop:20,
            flex: 1
        },
        profilePic: {
            height: 150,
            width: 150,
            marginVertical: 10,
            borderRadius: 10
        },
        userContainer: { alignSelf: 'center',
        width: screenContext.isPortrait ? width * 0.8 : height * 0.7,
        alignItems: 'center',
        borderColor: ColorPalette.green,
        borderWidth: 0.5,
        backgroundColor: '#e6f2ef',
        borderRadius: 10, marginVertical: 5,
        elevation: 5},
        title: { fontSize: 30, fontFamily: 'Helvetica-Bold' },
        buttonsContainer: {
            flexDirection: 'row', width: 150, justifyContent: 'space-evenly',
            marginVertical: 10
        },
        descContainer:{alignItems:'center',marginBottom:10}
    })
export default styles