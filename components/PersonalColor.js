import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import VeinTone from './VeinTone';
import SkinTone from './SkinTone';
import Accessories from './Accessories';
import EyeColor from './EyeColor';
import HairColor from './HairColor';

function checkPersonalColor(VeinTone, SkinTone, Accessories, EyeColor, HairColor) {
    if (VeinTone === 'สีเขียว' && SkinTone === 'ผิวคล้ำ' && Accessories === 'สีทอง' && EyeColor === 'สีเข้ม' && HairColor === 'สีเข้ม') {
        return 'Autumn'; // ถ้าตรงกับเงื่อนไขนี้ คืนค่า 'Autumn'
    } else if (VeinTone === 'สีเขียว' && SkinTone === 'ผิวคล้ำ' && Accessories === 'สีทอง' && EyeColor === 'สีอ่อน' && HairColor === 'สีอ่อน') {
        return 'Spring'; // ถ้าตรงกับเงื่อนไขนี้ คืนค่า 'Spring'
    } else if (VeinTone === 'สีม่วง' && SkinTone === 'ผิวแดง' && Accessories === 'สีเงิน' && EyeColor === 'สีเข้ม' && HairColor === 'สีเข้ม') {
        return 'Winter'; // ถ้าตรงกับเงื่อนไขนี้ คืนค่า 'Winter'
    } else if (VeinTone === 'สีม่วง' && SkinTone === 'ผิวแดง' && Accessories === 'สีเงิน' && EyeColor === 'สีอ่อน' && HairColor === 'สีอ่อน') {
        return 'Summer'; // ถ้าตรงกับเงื่อนไขนี้ คืนค่า 'Summer'
    } else {
        return 'Unknown'; // หากไม่ตรงกับเงื่อนไขใดๆ คืนค่า 'Unknown'
    }
}

export default function PersonalColor() {

    const [result, setResult] = useState('');

    const checkPersonalColor = () => {
        setResult('กรุณากดเลือกตัวเลือก');
    };

    return (
       <ScrollView>
            <View style={{ flex: 1, backgroundColor:'white' }}>
                <VeinTone/>
                <SkinTone/>
                <Accessories/>
                <EyeColor/>
                <HairColor/>
            </View>
            <TouchableOpacity onPress={checkPersonalColor}>
                <View style={{ width: 150, height: 50, margin: 10, backgroundColor: "#caaddd", borderRadius: 15, justifyContent:'center', alignSelf:'center', marginTop:10 }}>
                    <Text style={{ fontSize: 20, textAlign: "center", color: 'black' }}>
                    RESULT
                    </Text>
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

