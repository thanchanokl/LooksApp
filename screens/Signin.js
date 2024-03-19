import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Signin() {
    return (
        <View style={{flexDirection:"column", backgroundColor: 'white'}}>
        {/* ส่วนที่ 1 */}
            <View style={{flexDirection: 'column', marginTop:40}}>
                <Image style={{ width: 200, height: 200, alignSelf:'center'}} source={require("../assets/logo-21.png")} />
            </View>

           <View style={{flexDirection: 'column', marginLeft:25}}>
                <Text style={{ fontSize : 24}}>Sign in</Text>
            </View>
            
        {/* ส่วนที่ 2 */}
            <View style={{flexDirection: 'column', padding : 20}}>
                <Text style={{ fontSize : 16, marginBottom:10, marginLeft:6 }}>Phone Number</Text>
                <View style={{flexDirection: 'row', height: 50, width: 400, borderRadius: 10, backgroundColor:'#f1f1f1', padding:10, alignItems:'center', alignSelf:'center'}}>
                    <Image style={{ width: 20, height: 20, marginTop: 3, borderRadius: 10}} source={require("../assets/flag.png")} />
                    <Text style={{ fontSize : 16 , color:'black', textAlign:'center', marginTop: 2.5 , marginLeft: 5, marginRight: 5}}>+66</Text>
                    <FontAwesome name="angle-down" size={20} color="black" marginTop={2}/>
                    <TextInput style={{ fontSize : 14, marginLeft: 5, color:'#d8d8d8'}} placeholder="Phone Number" />
                </View>
            </View>
            
        {/* ส่วนที่ 3 */}
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity style={{height: 50, width: 400, justifyContent: 'center', borderRadius: 15, borderWidth: 0.5, borderColor: '#CAADDD', backgroundColor: '#CAADDD'}}>
                    <Text style={{ fontSize : 18 , color:'black', textAlign:'center'}}>SIGN IN</Text>
                </TouchableOpacity>
            </View>

        {/* ส่วนที่ 4 */}
        <View style={{flexDirection: 'column', padding: 20, justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
            <Text style={{fontSize: 16, marginBottom: 10}}>Sign in with</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{padding: 8, width: 45, height: 45, borderRadius: 5, borderWidth: 0.3, borderColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../assets/google.png")} />
                </View>
                <View style={{padding: 8, width: 45, height: 45, borderRadius: 5, borderWidth: 0.3, borderColor: 'black', justifyContent: 'center', alignItems: 'center', marginLeft: 50}}>
                    <Image style={{width: '110%', height: '110%', resizeMode: 'contain'}} source={require("../assets/fb.png")} />
                </View>
                <View style={{padding: 8, width: 45, height: 45, borderRadius: 5, borderWidth: 0.3, borderColor: 'black', justifyContent: 'center', alignItems: 'center', marginLeft: 50}}>
                    <Image style={{width: '160%', height: '160%', resizeMode: 'contain'}} source={require("../assets/apple.png")} />
                </View>
            </View>
        </View>


        {/* ส่วนที่ 3 */}
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:100}}>
                    <TouchableOpacity style={{height: 50, width: 250, justifyContent: 'center', borderRadius: 10, borderWidth: 0.5}}>
                        <Text style={{ fontSize : 18 , color:'black', textAlign:'center'}}>CONTINUE AS A GUEST</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginTop:5}}>
                <Text style={{ fontSize : 13, color:'#afafaf' }}>Create a new account?</Text>
                <TouchableOpacity style={{justifyContent: 'center'}}>
                    <Text style={{ fontSize: 13, color:'#CAADDD', marginLeft: 5}}>Sign up</Text>
                </TouchableOpacity>
            </View>
            
        </View>    
    );
}
