import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Goods from '../components/Home/Goods';
import BodyShape from '../components/BodyShape';
import PersonalColor from '../components/PersonalColor';

const Stack = createStackNavigator();

export default function LooksStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="BodyShape"
            component={BodyShape}
            options={{ title: "BodyShape", headerShown: false }}
          />
          <Stack.Screen
            name="PersonalColor"
            component={PersonalColor}
            options={{ title: "PersonalColor", headerShown: false }}
          />
          <Stack.Screen
            name="BodyShape"
            component={BodyShape}
            options={{ title: "BodyShape", headerShown: false }}
          />
          
        </Stack.Navigator>
      );
    }
    
