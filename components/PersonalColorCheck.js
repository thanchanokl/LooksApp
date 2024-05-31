import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

export default function PersonalColorCheck() {
  

  return (
    <View style={{ flex: 1, backgroundColor:'white', padding:10, marginTop:10, marginBottom:10}}>
      <Text style={{ fontSize: 18, marginLeft:18, marginTop:10, marginBottom:10, color:'#caaddd' }}>Step 4 วิเคราะห์โทนสีประจำตัว</Text>
        
      <View style={{ flex : 1 , flexDirection : 'row' , justifyContent : 'center', alignItems : 'center'}}>
        <Text>ผิวของคุณเป็น ....สีผิวโทนร้อน/โทนเย็น</Text>
        {/* <Text>{description}</Text> */}
      </View>
      <View style={{ flex : 1 , flexDirection : 'row' , justifyContent : 'center', alignItems : 'center'}}>
      <Text> คุณอยู่ในกลุ่ม ....ฤดูหนาว/Winter </Text>
        {/* <Text>{description}</Text> */}
      </View>
        
      

      {/* <TouchableOpacity onPress={() => navigation.navigate('PersonalColor')}>
        <View style={{ width: 150, height: 50, margin: 10, backgroundColor: "#caaddd", borderRadius: 15, justifyContent:'center', alignSelf:'center', marginTop:10 }}>
          <Text style={{ fontSize: 20, textAlign: "center", color: 'black' }}>MATCH NOW</Text>
        </View>
      </TouchableOpacity> */}
    
    </View>


  );
}