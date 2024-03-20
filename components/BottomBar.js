import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Bar() {
    
    return (
        <View style={{flex:1, flexDirection:'row', padding:20, backgroundColor:'gray'}}>
            <FontAwesome5 name="home" size={24} color="black" />
            <FontAwesome5 name="search" size={24} color="black" />

            <FontAwesome5 name="shopping-bag" size={24} color="black" />
            <Ionicons name="person" size={24} color="black" />
        </View>
    );
}