import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

import Goods from '../screens/Goods';
import GoodsDetail from '../screens/GoodsDetail';


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
          <Stack.Screen
            name="GoodsDetail"
            component={GoodsDetail}
            options={{ title: "GoodsDetail", headerShown: false }}
          />
        </Stack.Navigator>
      );
    }
    
