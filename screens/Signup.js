import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Signup() {
    return (
        <View style={{flexDirection:"column", backgroundColor: 'white'}}>
        {/* ส่วนที่ 1  */}
            <View style={{flexDirection: 'column', padding:20}}>
                    <Text style={{ fontSize : 20}}>Sign in</Text>
                </View>
            
        {/* ส่วนที่ 2  */}
            <View style={{ padding : 20, marginLeft:15, marginRight:15 }}>
                <View style={{flexDirection: 'column', marginTop:-10}}>
                    <Text style={{ fontSize : 18, marginBottom:3}}>Username</Text>
                    <TextInput style={{ fontSize : 15 , height: 50, width: 400,justifyContent: 'center', borderRadius: 10, backgroundColor:'#D9D9D9',padding:10}} placeholder="Enter your name" />
                </View>

                <View style={{flexDirection: 'column', marginTop:40}}>
                    <Text style={{ fontSize : 18, marginBottom:3 }}>Email</Text>
                    <TextInput style={{ fontSize : 15 , height: 50, width: 400,justifyContent: 'center', borderRadius: 10, backgroundColor:'#D9D9D9',padding:10}} placeholder="Enter your email" />
                </View>

                <View style={{flexDirection: 'column', marginTop:40}}>
                    <Text style={{ fontSize : 18, marginBottom:3 }}>Phone Number</Text>
                    <View style={{flexDirection: 'row', height: 50, width: 400, borderRadius: 10, backgroundColor:'#D9D9D9', padding:10}}>
                        {/* <Image style={{ width: 20, height: 20, marginTop: 4}} source={require("")} /> */}
                        <Text style={{ fontSize : 15 , color:'black', textAlign:'center', marginTop: 4.5 , marginLeft: 5, marginRight: 5}}>+66</Text>
                        <FontAwesome name="angle-down" size={20} color="black" marginTop={5}/>
                        <TextInput style={{ fontSize : 15, marginLeft: 5}} placeholder="Phone Number" />
                    </View>
                </View>
            </View>

        {/* ส่วนที่ 3  */}
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 60}}>
                    <TouchableOpacity style={{height: 50, width: 400, justifyContent: 'center', borderRadius: 15, borderWidth: 0.5, borderColor: '#CAADDD', backgroundColor: '#CAADDD'}}>
                        <Text style={{ fontSize : 20 , color:'black', textAlign:'center'}}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginTop:5}}>
                    <Text style={{ fontSize : 10, color:'gray' }}>Do you have an account?</Text>
                    <TouchableOpacity style={{justifyContent: 'center'}}>
                        <Text style={{ fontSize: 10, color:'#CAADDD', marginLeft: 5}}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            
        </View>    
    );
}
