import React from 'react';
import { Image, Text, View } from 'react-native';

export default function VeinTone() {
    return (
        <View style={{padding:10, marginTop:10}}>
            {/* ส่วนที่ 1 */}
            <View style={{ flexDirection:"column"}}>
                <Text style={{ fontSize: 18, marginLeft:18, marginTop:10, marginBottom:10, color:'#caaddd' }}>เส้นเลือด</Text>
                <Text style={{ fontSize : 10, marginTop:-5, marginBottom:10, margin: 20}}>* สังเกตเส้นเลือดที่ข้อมือ โดยดูในแสงธรรมชาติ หรือแสงไฟสีขาว</Text>
            {/* ส่วนที่ 2 */}    
                <View style={{flexDirection:"column", alignItems:'center', backgroundColor:'#f1f1f1', borderRadius:10, padding:5, marginLeft:15, marginRight:15, marginBottom:10}}>
                    <View style={{flexDirection:"row", alignItems:'center'}}>
                    <Image style={{ width: 60, height: 60, marginRight:-10 }} source={require("../assets/veinTone/purple.png")} />
                    <Image style={{ width: 60, height: 60, marginLeft:-10 }} source={require("../assets/veinTone/blue.png")} />   
                    </View>
                    <Text style={{ fontSize: 11, marginTop:3}}>สีม่วง หรือ สีน้ำเงิน</Text>
                </View>
            
                <View style={{flexDirection:"column", alignItems:'center', backgroundColor:'#f1f1f1', borderRadius:10, padding:5, marginLeft:15, marginRight:15,marginBottom:10}}>
                    <View style={{flexDirection:"row", alignItems:'center'}}>  
                    <Image style={{ width: 60, height: 60, marginRight:-10}} source={require("../assets/veinTone/green2.png")} />
                        <Image style={{ width: 60, height: 60, marginLeft:-10 }} source={require("../assets/veinTone/yellowgreen.png")} />
                    </View>
                    <Text style={{ fontSize: 11, marginTop:3}}>สีเขียว หรือ สีเขียวขี้ม้า</Text> 
                </View>
            </View>

        </View>
    );
}
