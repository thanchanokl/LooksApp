import React from 'react';
import { Image, Text, View } from 'react-native';
import { MaterialCommunityIcons, FontAwesome6, Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Account() {
    return (
        <View style={{backgroundColor:'#f1f1f1'}}>
            {/* ส่วนที่ 1 */}
            <View style={{flexDirection:"row", alignItems:'center', backgroundColor:'white',  width: '100', height: '100',}}>
              <View style={{width: 90, height: 90, 
                borderRadius:90, 
                padding:10, marginLeft:10,
                justifyContent: 'center', alignItems: 'center', alignSelf:'center'}}>
                <Image style={{ width: '100%', height: '100%', alignSelf:'center',borderRadius:90}} source={require("../assets/icon/profile.jpg")} />
              </View>
              <View style={{flexDirection:"column"}}>
              <Text style={{ textAlign:'center',fontSize: 18 }}></Text>
              <Text style={{ textAlign:'center',fontSize: 18 }}>Mook</Text>
              <Text style={{ textAlign:'center',fontSize: 18 }}></Text>
              </View>
            </View> 

            {/* ส่วนที่ 2 */}
            <View style={{ flexDirection:"column"}}>   
                <View style={{flexDirection:"row", alignItems:'center', justifyContent:'center'}}>
                    <View style={{flexDirection:"row", width: 200, height: 80, backgroundColor:'white', borderRadius:10, 
                    marginLeft:10, marginRight:10, marginBottom:10, marginTop:20, 
                    justifyContent: 'center', alignItems: 'center', alignSelf:'center',}}> 
                        <MaterialCommunityIcons name="clipboard-text-multiple-outline" size={24} color="#CAADDD" />
                        <Text style={{ fontSize : 16, textAlign:'left', marginLeft:6}}>My Orders</Text>
                    </View>
                    <View style={{flexDirection:"row", width: 200, height: 80, backgroundColor:'white', borderRadius:10, 
                    marginRight:5, marginBottom:10, marginTop:20, 
                    justifyContent: 'center', alignItems: 'center', alignSelf:'center',}}> 
                        <Image style={{ width: 30, height: 30, alignSelf:'center', marginTop:5}} source={require("../assets/icon/logo-21.png")} />
                        <Text style={{ fontSize : 16, textAlign:'center'}}>My Costume</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row", alignItems:'center', justifyContent:'center'}}>
                    <View style={{flexDirection:"row", width: 200, height: 80, backgroundColor:'white', borderRadius:10, 
                    marginLeft:10, marginRight:10, marginBottom:20, 
                    justifyContent: 'center', alignItems: 'center', alignSelf:'center',}}> 
                        <FontAwesome6 name="clock-rotate-left" size={19} color="#CAADDD" />
                        <Text style={{ fontSize : 16, textAlign:'center', marginLeft:6}}>View Recently</Text>
                    </View>
                    <View style={{flexDirection:"row", width: 200, height: 80, backgroundColor:'white', borderRadius:10, 
                    marginRight:5, marginBottom:20, 
                    justifyContent: 'center', alignItems: 'center', alignSelf:'center',}}> 
                        <Ionicons name="heart" size={24} color="#CAADDD" />
                        <Text style={{ fontSize : 16, textAlign:'center', marginLeft:6}}>My Favorites</Text>
                    </View>
                </View>
            </View>

            {/* ส่วนที่ 3 */}
            <View style={{ flexDirection:"column", width: 410, height: 410, backgroundColor:'white', borderRadius:10 , alignSelf:'center',padding:10 }}>
              <View style={{ flexDirection:"row", marginTop:20, marginBottom: 40}}>
                <Ionicons name="person-outline" size={24} color="black" style={{marginLeft: 10}}/>
                <Text style={{ textAlign:'left',fontSize: 18, marginLeft: 20}}>My Profile</Text>
                <FontAwesome name="angle-right" size={24} color="#AFAFAF" style={{marginLeft: 224}}/>
              </View>
              <View style={{ flexDirection:"row", marginBottom: 40}}>
                <FontAwesome name="bell-o" size={24} color="black" style={{marginLeft: 10}}/>
                <Text style={{ textAlign:'left',fontSize: 18 , marginLeft: 20}}>Arrival Notice</Text>
                <FontAwesome name="angle-right" size={24} color="#AFAFAF" style={{marginLeft: 195}}/>
              </View>
              <View style={{ flexDirection:"row", marginBottom: 40}}>
                <FontAwesome name="bell-o" size={24} color="black" style={{marginLeft: 10}}/>
                <Text style={{ textAlign:'left',fontSize: 18 , marginLeft: 20}}>Personal Profile</Text>
                <FontAwesome name="angle-right" size={24} color="#AFAFAF" style={{marginLeft: 178}}/>
              </View>
              <View style={{ flexDirection:"row", marginBottom: 40}}> 
                <Image style={{ width: 30, height: 30, alignSelf:'center', marginLeft: 10}} source={require("../assets/icon/logo-23.png")} />
                <Text style={{ textAlign:'left',fontSize: 18 , marginLeft: 15}}>LOOKS Member</Text>
                <FontAwesome name="angle-right" size={24} color="#AFAFAF" style={{marginLeft: 178}}/>
              </View>
              <View style={{ flexDirection:"row", marginBottom: 40}}>
                <Ionicons name="settings-outline" size={24} color="black" style={{marginLeft: 10}}/>
                <Text style={{ textAlign:'left',fontSize: 18 , marginLeft: 20}}>Setting</Text>
                <FontAwesome name="angle-right" size={24} color="#AFAFAF" style={{marginLeft: 250}}/>
              </View>
              <View style={{ flexDirection:"row", marginBottom: 20}}>
                <MaterialCommunityIcons name="shield-half-full" size={24} color="black" style={{marginLeft: 10}}/>
                <Text style={{ textAlign:'left',fontSize: 18 , marginLeft: 20}}>Policy</Text>
                <FontAwesome name="angle-right" size={24} color="#AFAFAF" style={{marginLeft: 257}}/>
              </View>
            </View>
        </View>


    );
}
