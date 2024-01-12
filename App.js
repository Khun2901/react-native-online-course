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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <>
    //   <View style={{flex: 0.15, zIndex: 40}}>
    //     <LittleLemonHeader />
    //   </View>

    //   <View style={{flex: 0.85}}>
    //     {/* <WelcomeScreen /> */}
    //     <LoginScreen />
    //     {/* <MenuList /> */}
    //     {/* <SectionMenuList /> */}
    //   </View>
    //   <View>
    //     <LittleLemonFooter />
    //   </View>
    // </>

    <NavigationContainer>
      {/* Stack Navigator */}
      {/* <Stack.Navigator initialRouteName='Login'
        screenOptions={{headerStyle: {backgroundColor: '#EE9972'}}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title: 'Home'}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator> */}

      {/* Tab Navigator */}
      {/* <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if(route.name === 'Welcome') {
            iconName = 'ios-home'
          } else if(route.name === 'Login') {
            iconName = 'ios-enter'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#EDEFEE',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {backgroundColor: '#EE9972'},
        headerStyle: {backgroundColor: '#EE9972'},
      })}
      initialRouteName='Welcome' >
        <Tab.Screen name="Welcome" component={WelcomeScreen} options={{title: 'Home'}} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator> */}

      {/* Drawer Navigator */}
      <Drawer.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#EE9972'},
        drawerStyle: {backgroundColor: '#EE9972'},
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'grey',
      }}>
        <Drawer.Screen name='Welcome' component={WelcomeScreen} options={{title: 'Home'}}/>
        <Drawer.Screen name='Login' component={LoginScreen} />
      </Drawer.Navigator>

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
