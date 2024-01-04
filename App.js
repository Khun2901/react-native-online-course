import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuList from './components/MenuList';
import SectionMenuList from './components/SectionMenuList';

export default function App() {
  return (
    <>
      <View style={{flex: 0.15, zIndex: 40}}>
        <LittleLemonHeader />
      </View>

      <View style={{flex: 0.85}}>
        <WelcomeScreen />
        {/* <MenuList /> */}
        {/* <SectionMenuList /> */}
      </View>
      <View>
        <LittleLemonFooter />
      </View>
    </>
    
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
