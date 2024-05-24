import { StyleSheet } from "react-native";
import ColorPalette from "../../Assets/Themes/ColorPalette";

const styles = (height, width, sliderWidth) => StyleSheet.create({
    container: {
        height: height, width: width, borderRadius: 10, padding: 1,justifyContent: 'center'
    },
    slider: { height: '100%', width: sliderWidth, borderRadius: 10, justifyContent: 'center', alignItems: 'center', },
    sliderBackgroundContainer: { position: 'absolute', alignItems: 'center', flexDirection: 'row', alignSelf: 'center', gap: 10 },
    sliderBGText: {
        alignSelf: 'center',
        fontSize: height * 0.3,
        color: 'white', fontFamily: 'Helvetica-Bold'
    },
    sliderBGIcon: { color: ColorPalette.green },
    // sliderIcon:{color:ColorPalette.green}
})
export default styles