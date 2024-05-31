import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Looks from "../screens/Looks";
import Cart from "../screens/Cart";
import Account from "../screens/Account";

import Goods from "../screens/Goods";
import GoodsDetail from "../screens/GoodsDetail";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}  />
      <Stack.Screen name="Looks" component={Looks} options={{ headerShown: false }}  />
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }}  />
      <Stack.Screen name="Account" component={Account} options={{ headerShown: false }}  />

      <Stack.Screen name="Goods" component={Goods} options={{ headerShown: false }}  />
      <Stack.Screen name="GoodsDetail" component={GoodsDetail}  />
    </Stack.Navigator>
  );
}
