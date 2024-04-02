import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomerList from '../components/Cart/CustomerList';
import All from '../components/Cart/All';



export default function Cart() {
    return (
       <ScrollView>
            <View style={{ flex: 1, backgroundColor:'white', padding:10 }}>
                <View style={{flexDirection: 'row', marginLeft:20}}>
                    <FontAwesome5 name="list-alt" size={20} color="black" />
                    <Text style={{ fontSize : 16, textAlign:'left', marginLeft:5}}>Customer List</Text>
                </View>  
            </View>

        <CustomerList/>
        <All/>
        </ScrollView>
    );
}

