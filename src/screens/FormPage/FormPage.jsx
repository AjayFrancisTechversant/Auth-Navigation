import { StyleSheet, Text, View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const FormPage = () => {
    return (
       <KeyboardAwareScrollView>
            <View style={styles.container}>
                <Text style={styles.formTitle}>Username</Text>
                <TextInput style={styles.textInput}
    
                    placeholder="Enter username"
    
                />
                <Text style={styles.formTitle}>Password</Text>
                <TextInput style={styles.textInput}
                    secureTextEntry
                    placeholder="Enter Password"
                />
                <Text style={styles.formTitle}>Input1</Text>
                <TextInput style={styles.textInput}
    
                    placeholder="Enter something"
                />
                <Text style={styles.formTitle}>Input2</Text>
                <TextInput style={styles.textInput}
    
                    placeholder="Enter something"
                />
                <Text style={styles.formTitle}>Input3</Text>
                <TextInput style={styles.textInput}
    
                    placeholder="Enter something"
                />
                <Text style={styles.formTitle}>Input4</Text>
                <TextInput style={styles.textInput}
    
                    placeholder="Enter something"
                />
                <Text style={styles.formTitle}>Input5</Text>
                <TextInput style={styles.textInput}
    
                    placeholder="Enter something"
                />
                <Text style={styles.formTitle}>Input6</Text>
                <TextInput style={styles.textInput}
    
                    placeholder="Enter something"
                />
                <Text style={styles.formTitle}>Input7</Text>
                <TextInput style={styles.textInput}
    
                    placeholder="Enter something"
                />
                <Text style={styles.formTitle}>Input8</Text>
                <TextInput style={styles.textInput}
    
                    placeholder="Enter something"
                />
                <Text style={styles.formTitle}>Input9</Text>
                <TextInput style={styles.textInput}
    
                    placeholder="Enter something"
                />
                <Text style={styles.formTitle}>Input10</Text>
                <TextInput style={styles.textInput}
    
                    placeholder="Enter something"
                />
                <Text style={styles.formTitle}>Input11</Text>
                <TextInput style={styles.textInput}
    
                    placeholder="Enter something"
                />
                <Text style={styles.formTitle}>Input12</Text>
                <TextInput style={styles.textInput}
    
                    placeholder="Enter something"
                />
                <Text style={styles.formTitle}>Input13</Text>
                <TextInput style={styles.textInput}
    
                    placeholder="Enter something"
                />
    
    
            </View>
       </KeyboardAwareScrollView>
    )
}

export default FormPage

const styles = StyleSheet.create({
    textInput: { backgroundColor: '#f2ffcf', borderRadius: 5, },
    formTitle: { fontSize: 30 },
    container: { flex: 1, margin: 50 },
})