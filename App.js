import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import BodyShape from './components/BodyShape';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Home from './screens/Home';
import Goods from './components/Home/Goods';
import Bar from './components/BottomBar';
import BottomTab from './navigations/BottomTab';




import PersonalColor from './components/PersonalColor';
import Logo from './components/Logo';
import LooksStack from './navigations/LooksStack';

export default function App() {
  return (
    // <BodyShape/>
    // <PersonalColor/>
    // <Signup/>
    // <Signin/>
    // <Goods/>
    // <Logo/>

    // <Home/>
    // <Bar/>

    <NavigationContainer>
      <BottomTab/>
      {/* <LooksStack/> */}
    </NavigationContainer>

      
      


      
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});