import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons, Ionicons} from "@expo/vector-icons";
import Home from '../screens/Home';
import Search from '../screens/Search';
import Looks from '../screens/Looks';
import Cart from '../screens/Cart';
import Account from '../screens/Account';
import { Image, View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator  screenOptions={{ tabBarActiveTintColor: '#caaddd', tabBarInactiveTintColor: 'white', headerShown: false }}
                        tabBarOptions={{ tabBarStyle: { backgroundColor: 'gray',margin: 10, borderRadius: 15}}}>
                      
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="home" color={color} size={size} style={{marginTop:10}}/> ),
              tabBarStyle: { backgroundColor: '#D9D9D9',margin: 10, borderRadius: 15}

            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="search" color={color} size={size} style={{marginTop:10}}/> ),
              tabBarStyle: { backgroundColor: '#D9D9D9',margin: 10, borderRadius: 15}
            }}
          />
          <Tab.Screen
            name="Looks"
            component={Looks}
            options={{
              tabBarLabel: "",
              tabBarIcon: () => (
                <View style={{backgroundColor: '#D9D9D9',width:70, height:70, borderRadius: 90, marginTop:-5}}> 
                  <View style={{backgroundColor: '#caaddd',width:60, height:60, borderRadius: 90, marginLeft:5, marginTop:5}}>
                    <Image source={require('../assets/icon/logo-23.png')}
                            style={{ width: 50, height: 50, tintColor: '#fff', alignSelf:'center',marginTop:5}}/> 
                  </View>
                </View>),
              tabBarStyle: { backgroundColor: '#D9D9D9',margin: 10, borderRadius: 15}
            }}
            />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => ( <MaterialIcons name="shopping-bag" color={color} size={size} style={{marginTop:10}}/> ),
              tabBarStyle: { backgroundColor: '#D9D9D9',margin: 10, borderRadius: 15}
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => ( <Ionicons name="person" color={color} size={size} style={{marginTop:10}}/> ),
              tabBarStyle: { backgroundColor: '#D9D9D9',margin: 10, borderRadius: 15}
            }}
          />
        </Tab.Navigator>

        
      );
    }
    
