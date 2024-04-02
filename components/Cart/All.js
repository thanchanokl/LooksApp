import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function All({ total }) {
    return (
        <View style={{ padding: 10, backgroundColor: 'white' }}>
            <View style={{ flexDirection:'row', marginTop: 40, marginLeft: 10 }}>
                <AntDesign name="checkcircle" size={24} color="#caaddd" />
                <Text style={{ fontSize: 16, marginTop: 15 }}>All</Text>
                <View style={{ flexDirection:'column', marginLeft: 20 }}>
                    <Text style={{ fontSize: 16, marginTop: 15 }}>Total</Text>
                    <View style={{ flexDirection:'row' }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', marginRight: 5, color: '#caaddd' }}>THB</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#caaddd' }}>{total}</Text>
                        <TouchableOpacity>
                          <View style={{ width: 150, height: 50, margin: 10, backgroundColor: "#caaddd", borderRadius: 15, justifyContent:'center', alignSelf:'center', marginTop:10 }}>
                            <Text style={{ fontSize: 20, textAlign: "center", color: 'black' }}>
                            CHECKOUT
                            </Text>
                          </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        </View>


    );
}
