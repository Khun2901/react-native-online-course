import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen'
import MenuList from './components/MenuList';
import SectionMenuList from './components/SectionMenuList';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <>
    //   <View style={{flex: 0.15, zIndex: 40}}>
    //     <LittleLemonHeader />
    //   </View>

    //   <View style={{flex: 0.85}}>
    //     <WelcomeScreen />
    //     {/* <MenuList /> */}
    //     {/* <SectionMenuList /> */}
    //   </View>
    //   <View>
    //     <LittleLemonFooter />
    //   </View>
    // </>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
        screenOptions={{headerStyle: {backgroundColor: '#EE9972'}}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title: 'Home'}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
