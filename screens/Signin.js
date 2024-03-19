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
                <Text style={{ fontSize : 16, marginBottom:3 }}>Phone Number</Text>
                <View style={{flexDirection: 'row', height: 50, width: 400, borderRadius: 10, backgroundColor:'#f1f1f1', padding:10, alignItems:'center'}}>
                    <Image style={{ width: 20, height: 20, marginTop: 4, borderRadius: 10}} source={require("../assets/flag.png")} />
                    <Text style={{ fontSize : 16 , color:'black', textAlign:'center', marginTop: 4.5 , marginLeft: 5, marginRight: 5}}>+66</Text>
                    <FontAwesome name="angle-down" size={20} color="black" marginTop={5}/>
                    <TextInput style={{ fontSize : 14, marginLeft: 5, color:'#d8d8d8'}} placeholder="Phone Number" />
                </View>
            </View>
            
        {/* ส่วนที่ 3 */}
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity style={{height: 50, width: 400, justifyContent: 'center', borderRadius: 15, borderWidth: 0.5, borderColor: '#CAADDD', backgroundColor: '#CAADDD'}}>
                    <Text style={{ fontSize : 18 , color:'black', textAlign:'center'}}>SIGN IN</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginTop:5}}>
                <Text style={{ fontSize : 13, color:'#afafaf' }}>Do you have an account?</Text>
                <TouchableOpacity style={{justifyContent: 'center'}}>
                    <Text style={{ fontSize: 13, color:'#CAADDD', marginLeft: 5}}>Sign in</Text>
                </TouchableOpacity>
            </View>

        {/* ส่วนที่ 4 */}
        <View style={{flexDirection: 'column', padding : 20}}>
                <Text style={{ fontSize : 16, marginBottom:3 }}>Sign in with</Text>
                <View style={{flexDirection: 'row', height: 40, width: 40, borderRadius: 10, backgroundColor:'#f1f1f1', padding:10, alignItems:'center'}}>
                    <View style={{flexDirection: 'row',}}>
                        <Image style={{ width: 22, height: 22, marginTop: 4, borderRadius: 5, backgroundColor:'#f1f1f1', alignItems:'center'}} source={require("../assets/google.png")} />
                        <Image style={{ width: 22, height: 22, marginTop: 4, borderRadius: 5, backgroundColor:'#f1f1f1', alignItems:'center'}} source={require("../assets/fb.png")} />
                        <Image style={{ width: 22, height: 22, marginTop: 4, borderRadius: 5, backgroundColor:'#f1f1f1', alignItems:'center'}} source={require("../assets/apple.png")} />
                    </View>
                </View>
            </View>

        {/* ส่วนที่ 3 */}
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity style={{height: 50, width: 400, justifyContent: 'center', borderRadius: 15, borderWidth: 0.5}}>
                        <Text style={{ fontSize : 18 , color:'black', textAlign:'center'}}>CONTINUE AS A GUEST</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginTop:5}}>
                <Text style={{ fontSize : 13, color:'#afafaf' }}>Create an new account?</Text>
                <TouchableOpacity style={{justifyContent: 'center'}}>
                    <Text style={{ fontSize: 13, color:'#CAADDD', marginLeft: 5}}>Sign up</Text>
                </TouchableOpacity>
            </View>
            
        </View>    
    );
}
