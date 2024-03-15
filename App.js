import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Signin from './screens/Signin';
import Signup from './screens/Signup';
import BodyShape from './screens/BodyShape';

export default function App() {
  return (
      <Signin/>
      // <Signup/>
      // <BodyShape/>


      
      
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