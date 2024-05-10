import { StyleSheet } from "react-native"


const styles = (screenContext, width, height) =>
    StyleSheet.create({
        container: { flex: 1, margin: 20 },
        headerContainer: {
            flexDirection: 'row',

        },

        headerTitleContainer: { flex: screenContext.isPortrait ? 0.9 : 0.95, alignItems: 'center' },
        headerTitle: { fontFamily: 'helvetica-light-587ebe5a59211', fontSize: 50 },
        logoutIconContainer: { flex: screenContext.isPortrait ? 0.1 : 0.05 ,
            alignSelf:'center'
        },
        logoutIcon: {
            color: '#5ead97',
        },
        //userDetails
        userDetailsContainer: { marginVertical: 20, alignItems: 'center' },
        profilePicture: { height: 100, width: 100, borderRadius: 50 },
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