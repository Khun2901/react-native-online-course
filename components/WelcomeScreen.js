import * as React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
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
        marginBottom: 40
    }
})

export default function WelcomeScreen() {
    return (
        <ScrollView horizontal={false} indicatorStyle={'white'} //the indicatorStyle can be 'white', 'black', or 'default'
            style={styles.container}>
            <Text style={styles.headerText}>
                Welcome to {'\n'}<Text style={{fontWeight: 700}}>Little Lemon</Text>
            </Text>
            <Text style={styles.innerText}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        </ScrollView>
    )
}