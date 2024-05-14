import { StyleSheet } from "react-native"
import ColorPalette from "../../Assets/Themes/ColorPalette"

const styles = (screenContext, width, height) =>
    StyleSheet.create({
        titleandDescContainer: { flex: 0.5, fontSize: 20, marginTop: 10 },
        itemTitle: { fontSize: 30, color: 'white' },
        itemDesc: { color: 'white' },
        itemContainer: {
            flex: 1, flexDirection: 'row',
            marginHorizontal: screenContext.isPortrait ? 50 : 100,
            marginTop: 15, backgroundColor: ColorPalette.green, borderRadius: 5
        },

        imageContainer: { flex: 0.3, alignItems: 'center', margin: 10, height: height * 0.1 },
        image: { height: '100%', width: screenContext.isPortrait ? '100%' : '100%', borderRadius: 5 },
        deleteContainer: { flex: 0.2, justifyContent: 'center', },
        deleteButton: {
            borderRadius: 4,
            height: 'auto',
            width: '100%',
            alignItems: 'center'
        },
        button: {
            alignSelf: 'center',
            width: screenContext.isPortrait ? width * 0.8 : height * 0.7,
            alignItems: 'center',
            borderColor: ColorPalette.green,
            borderWidth: 0.5,
            backgroundColor: '#e6f2ef',
            borderRadius: 10, marginVertical: 5,
            elevation: 5
        },
        profilePic: { height: 100, width: 100, borderRadius: 50, marginTop: 20 },
        buttonTitle: {
            fontFamily: 'Helvetica-Bold',
            marginTop: 5,
            fontSize: 18
        },
        userLocationText: { marginBottom: 20, fontFamily: 'Helvetica' }
    })
export default styles