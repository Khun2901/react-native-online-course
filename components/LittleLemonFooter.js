import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EE9972', 
        paddingBottom: 40, 
        paddingTop: 5, 
        alignItems: 'center'
    },
    innerText: {
        fontSize: 15, 
        fontWeight: '700',
        fontStyle: 'italic'
    }
})

export default function LittleLemonFooter() {
    return (
        <View style={styles.container}>
            <Text style={styles.innerText}>All rights reserved by Little Lemon, 2022</Text>
        </View>
    )
}