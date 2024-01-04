import * as React from 'react'
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    headerText: {
        fontSize: 30,
        fontWeight: '500', 
        color: 'white', 
        textAlign: 'center', 
        marginVertical: 40 
    },
    innerText: {
        fontSize: 25, 
        fontWeight: '500', 
        color: 'white', 
        textAlign: 'center', 
        margin: 20, 
        marginBottom: 20
    },
    textInput: {
        backgroundColor: '#EDEFEE',
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 3,
        fontWeight: '500',
        fontSize: 20,
    }
})

export default function WelcomeScreen() {

    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
            <ScrollView 
                horizontal={false} 
                indicatorStyle={'white'} //the indicatorStyle can be 'white', 'black', or 'default'
                keyboardDismissMode='on-drag'
                >
                <Text style={styles.headerText}>
                    Welcome to {'\n'}<Text style={{fontWeight: 700}}>Little Lemon</Text>
                </Text>
                {/* <Text style={styles.innerText}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                </Text> */}
                <Text style={styles.innerText}>Please Login to continue.</Text>
                <TextInput
                    style={styles.textInput}
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder={'Email'}
                    keyboardType= 'email-address'
                    clearButtonMode= 'always'
                    onFocus={() => Alert.alert('The email is now on focus.')}
                />
                <TextInput 
                    style={styles.textInput}
                    value={password}
                    onChangeText={onChangePassword}
                    placeholder={'Password'}
                    secureTextEntry={true}
                />
                {/* <Text style={styles.innerText}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                </Text> */}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}