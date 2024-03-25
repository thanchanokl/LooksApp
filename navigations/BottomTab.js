import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons, Ionicons} from "@expo/vector-icons";
import Home from '../screens/Home';
import Signin from '../screens/Signin';
import Search from '../screens/Search';
import Looks from '../screens/Looks';
import PersonalColor from '../components/PersonalColor';
import Cart from '../screens/Cart';
import Profile from '../screens/Account';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator  screenOptions={{ tabBarActiveTintColor: '#caaddd', tabBarInactiveTintColor: '#D9D9D9' }}
                        tabBarOptions={{ tabBarStyle: { backgroundColor: 'gray' } }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="home" color={color} size={size} /> ),
              headerShown : false,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="search" color={color} size={size} /> ),
            }}
          />
          <Tab.Screen
            name="Looks"
            component={Looks}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => ( <MaterialIcons name="gamepad" color={color} size={size} /> ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => ( <MaterialIcons name="shopping-bag" color={color} size={size} /> ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => ( <Ionicons name="person" color={color} size={size} /> ),
            }}
          />
        </Tab.Navigator>

        
      );
    }
    
