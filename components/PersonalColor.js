import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import VeinTone from './VeinTone';
import SkinTone from './SkinTone';
import Accessories from './Accessories';
import EyeColor from './EyeColor';
import HairColor from './HairColor';

// function checkPersonalColor(VeinTone, SkinTone, Accessories, EyeColor, HairColor) {
//     if (VeinTone === 'สีเขียว' && SkinTone === 'ผิวคล้ำ' && Accessories === 'สีทอง' && EyeColor === 'สีเข้ม' && HairColor === 'สีเข้ม') {
//         return 'Autumn'; // ถ้าตรงกับเงื่อนไขนี้ คืนค่า 'Autumn'
//     } else if (VeinTone === 'สีเขียว' && SkinTone === 'ผิวคล้ำ' && Accessories === 'สีทอง' && EyeColor === 'สีอ่อน' && HairColor === 'สีอ่อน') {
//         return 'Spring'; // ถ้าตรงกับเงื่อนไขนี้ คืนค่า 'Spring'
//     } else if (VeinTone === 'สีม่วง' && SkinTone === 'ผิวแดง' && Accessories === 'สีเงิน' && EyeColor === 'สีเข้ม' && HairColor === 'สีเข้ม') {
//         return 'Winter'; // ถ้าตรงกับเงื่อนไขนี้ คืนค่า 'Winter'
//     } else if (VeinTone === 'สีม่วง' && SkinTone === 'ผิวแดง' && Accessories === 'สีเงิน' && EyeColor === 'สีอ่อน' && HairColor === 'สีอ่อน') {
//         return 'Summer'; // ถ้าตรงกับเงื่อนไขนี้ คืนค่า 'Summer'
//     } else {
//         return 'Unknown'; // หากไม่ตรงกับเงื่อนไขใดๆ คืนค่า 'Unknown'
//     }
// }

export default function PersonalColor() {
    const [result, setResult] = useState('');

    const navigation = useNavigation();

    const checkPersonalColor = () => {
        setResult('กรุณากดเลือกตัวเลือก');
    };

    return (
       <ScrollView>
            <View style={{ flex: 1, backgroundColor:'white', padding:10, marginTop:10}}>
                <Text style={{ fontSize: 18, marginLeft:18, marginTop:10, color:'#caaddd' }}>Step 3 เลือกสีที่เหมาะกับคุณ</Text>
                {/* <Text style={{ fontSize: 12, marginLeft:18, marginBottom:10}}>* ความเหมาะสมขึ้นอยู่กับสีผิวแต่ละคน</Text> */}
                
                {/* <VeinTone/> */}
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

                <SkinTone/>
                <Accessories/>
                <EyeColor/>
                <HairColor/>
            </View>
            <TouchableOpacity onPress={checkPersonalColor}>
                {/* <View style={{ width: 150, height: 50, margin: 10, backgroundColor: "#caaddd", borderRadius: 15, justifyContent:'center', alignSelf:'center', marginTop:10 }}>
                    <Text style={{ fontSize: 20, textAlign: "center", color: 'black' }}>
                    TEST
                    </Text>
                    </View> */}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('PersonalColorCheck')}>
                <View style={{ width: 150, height: 50, margin: 10, backgroundColor: "#caaddd", borderRadius: 15, justifyContent:'center', alignSelf:'center', marginTop:10 }}>
                    <Text style={{ fontSize: 20, textAlign: "center", color: 'black' }}>RESULT</Text>
                </View>
            </TouchableOpacity>

            {/* แสดงผลลัพธ์ */}
            {result !== '' && (
                <View style={{ backgroundColor: "white", borderRadius: 10, marginTop: 20, padding: 10 }}>
                    <Text style={{ fontSize: 16, textAlign: "center" }}>ผลลัพธ์: {result}</Text>
                </View>
            )}

        </ScrollView>
    );
}

