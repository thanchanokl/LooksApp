import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BodyShape from '../components/BodyShape';
import PersonalColor from '../components/PersonalColor';
import BodyShapeResult from '../components/BodyShapeResult';
import PersonalColorCheck from '../components/PersonalColorCheck';


const Stack = createStackNavigator();

export default function LooksStack() {
    return (
        <Stack.Navigator initialRouteName="BodyShape">
          <Stack.Screen
            name="BodyShape"
            component={BodyShape}
            options={{ title: ""}}
          />
          <Stack.Screen
            name="BodyShapeResult"
            component={BodyShapeResult}
            options={{ title: ""}}
          />
          <Stack.Screen
            name="PersonalColor"
            component={PersonalColor}
            options={{ title: ""}}
          />
          <Stack.Screen
            name="PersonalColorCheck"
            component={PersonalColorCheck}
            options={{ title: ""}}
          />
          
          
        </Stack.Navigator>
      );
    }
    
