import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE9972'
  }, 
  headerText: {
    paddingTop: 65,
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center'
  }
})

export default function LittleLemonHeader() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Little Lemon
        </Text>
      </View>
    );
  }