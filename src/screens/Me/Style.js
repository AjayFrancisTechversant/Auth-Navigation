import { StyleSheet } from "react-native"
import Colors from "../../Assets/Themes/ColorPalette"
import ColorPalette from "../../Assets/Themes/ColorPalette"


const styles = (screenContext, width, height) =>
    StyleSheet.create({
        container: { flex: 1, margin: 20 },
        headerContainer: {
            flexDirection: 'row', height: 200,
            justifyContent: 'flex-end',
            marginBottom:-70

        },
        BGImageStyle:{borderRadius:10},


        logoutIcon: {
            color: ColorPalette.green,
            margin: 20
        },
        //userDetails
        userDetailsContainer: { marginVertical: 20, alignItems: 'center' },
        profilePicture: { height: 150, width: 150, borderRadius: 100 },
        username: { fontSize: 30, fontFamily: 'Helvetica-Bold' },
        phoneNumber: {},

        // 3IconContainer
        threeIconContainer: { flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 },
        threeIcon: { alignSelf: 'center' },
        threeIconTitle: { fontFamily: 'Rajdhani-Medium' },
        threeIconSubtitle: { alignSelf: 'center', fontFamily: 'Rajdhani-Bold' },

        OptionCardContainer: { marginHorizontal: screenContext.isPortrait ? 20 : 100 },


    })
export default styles