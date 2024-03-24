import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Goods from '../components/Home/Goods';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home", headerShown: false }}
          />
          <Stack.Screen
            name="Goods"
            component={Goods}
            options={{ title: "Goods", headerShown: false }}
          />
          
        </Stack.Navigator>
      );
    }
    
