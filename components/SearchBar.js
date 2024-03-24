import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SearchBar() {

    return (
        <View style={{flexDirection: 'column', padding : 20, marginTop:-50, backgroundColor:'white'}}>
            <View style={{flexDirection: 'row', height: 40, width: 415, borderRadius: 15, backgroundColor:'#D9D9D9', padding:10, alignSelf:'center'}}>
                <FontAwesome name="search" size={18} color="white" />
                <TextInput style={{ fontSize : 14, marginLeft: 5, color:'#d8d8d8'}} placeholder=" " />
            </View>
            <Text style={{ fontSize : 16, color:'#d8d8d8', marginTop:5 }}>Popular Search</Text>
        </View>
        
    
    );
}