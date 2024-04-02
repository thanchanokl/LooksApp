import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BodyShape from '../components/BodyShape';
import PersonalColor from '../components/PersonalColor';
import BodyShapeResult from '../components/BodyShapeResult';

const Stack = createStackNavigator();

export default function LooksStack() {
    return (
        <Stack.Navigator initialRouteName="BodyShape">
          <Stack.Screen
            name="BodyShape"
            component={BodyShape}
            options={{ title: "BodyShape"}}
          />
          <Stack.Screen
            name="BodyShapeResult"
            component={BodyShapeResult}
            options={{ title: "BodyShapeResult"}}
          />
          <Stack.Screen
            name="PersonalColor"
            component={PersonalColor}
            options={{ title: "PersonalColor"}}
          />
          
          
        </Stack.Navigator>
      );
    }
    
