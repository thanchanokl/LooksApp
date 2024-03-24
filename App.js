import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import BodyShape from './components/BodyShape';
import PersonalColor from './components/PersonalColorTest';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Home from './screens/Home';
import Goods from './components/Home/Goods';
import Bar from './components/BottomBar';
import BottomTab from './navigations/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import VeinTone from './components/VeinTone';
import PersonalColor2 from './components/PersonalColor';

export default function App() {
  return (
      // <BodyShape/>
      // <PersonalColor/>
      // <Signup/>
      // <Signin/>
      <Goods/>

      // <Home/>
      // <Bar/>
      // <NavigationContainer>
      //   <BottomTab/>
        
      // </NavigationContainer>

      //<PersonalColor2/>
      


      
      
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