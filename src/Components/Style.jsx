import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: { flex: 1 },
    title: { fontSize: 40, alignSelf: 'center' },
    textInput: { backgroundColor: '#cdf7ec', borderRadius: 5, width: '80%', borderColor: '#5897fc', borderWidth: 1 },
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
    addContainer: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 50 },
    itemContainer: {
        flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 50,
        marginTop:15

    },
    itemCard: { marginTop: 5 },
    deleteButton: {
        borderRadius: 4,
        height: 'auto',
        width: 50,
        alignItems:'center'
    },
    noItemsToDisplay:{marginHorizontal:50,color:'orange'}


})
export default styles