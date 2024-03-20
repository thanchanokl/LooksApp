import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import BodyShape from './screens/BodyShape';
import PersonalColor from './screens/PersonalColor';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Home from './screens/Home';
import Goods from './components/Home/Goods';
import Bar from './components/BottomBar';

export default function App() {
  return (
      // <BodyShape/>
      // <PersonalColor/>
      // <Signup/>
      // <Signin/>
      // <Goods/>
      <Home/>

      // <Bar/>


      
      
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