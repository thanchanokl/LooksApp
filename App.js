import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import BodyShape from './screens/BodyShape';
import PersonalColor from './screens/PersonalColor';
import Signup from './screens/Signup';
import Signin from './screens/Signin';

export default function App() {
  return (
      // <BodyShape/>
      // <PersonalColor/>
      // <Signup/>
      <Signin/>


      
      
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