import * as React from 'react'
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View, Image, useColorScheme} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        resizeMode: 'contain',
        width: 90,
        height: 90
    },
    bannerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 60,
        marginVertical: 20
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
    },
    buttonContainer: {
        backgroundColor: '#EE9972',
        alignContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 100,
        paddingVertical: 12,
        borderRadius: 40
    },
    buttonText: {
        fontSize: 25,
        fontWeight: '500'
    }

})

export default function WelcomeScreen() {

    const colorScheme = useColorScheme()

    return (
        <KeyboardAvoidingView
            style={[styles.container, 
                colorScheme === 'light' 
                ? {backgroundColor: '#E3E3E3'} 
                : {backgroundColor: '#333333'}
            ]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
            <ScrollView 
                horizontal={false} 
                indicatorStyle={'white'} //the indicatorStyle can be 'white', 'black', or 'default'
                keyboardDismissMode='on-drag'
                >
                <View style={styles.bannerContainer}>
                    <Image
                        source={require('../img/LittleLemonLogo.png')}
                        style={styles.logo}/>
                    <Text style={styles.headerText}>
                        Little Lemon
                    </Text>
                </View>
                
                <View>
                    <Text style={styles.innerText}>Welcome to Little Lemon demo app.</Text>
                </View>
                
            </ScrollView>
        </KeyboardAvoidingView>
    )
}