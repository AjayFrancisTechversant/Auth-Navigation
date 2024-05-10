import { StyleSheet } from "react-native"

const styles = (screenContext, width, height) =>
    StyleSheet.create({
        container: { flex: 1,marginTop:20 },
        title: { fontSize: 50, alignSelf: 'center',fontFamily:'helvetica-light-587ebe5a59211' },
        textInput: { backgroundColor: '#cdf7ec', borderRadius: 5, width: '80%', borderColor: '#5897fc', borderWidth: 0.5 },
        button: {
            alignSelf: 'center',
            width: 50,
            height: 'auto',
            alignItems: 'center',
            backgroundColor: '#5ead97',
            borderRadius: 10,
        },
        buttonText: {
            padding: 10,
            color: 'white',
            fontSize: 18
        },
        addContainer: { flexDirection: 'row', justifyContent: 'space-around', marginHorizontal:screenContext.isPortrait? 50:100 },
        noItemsToDisplay: { marginHorizontal: 50, color: 'orange' }


    })
export default styles