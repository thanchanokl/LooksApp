import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Fontisto } from '@expo/vector-icons';

export default function BodyShape() {
    const [shoulder, setShoulder] = useState('');
    const [bust, setBust] = useState('');
    const [waist, setWaist] = useState('');
    const [hips, setHips] = useState('');
    const [description, setDescription] = useState('');
    
    const calculateBodyShape = () => {
        const shoulderVal = parseFloat(shoulder);
        const bustVal = parseFloat(bust);
        const waistVal = parseFloat(waist);
        const hipsVal = parseFloat(hips);

        if (isNaN(shoulderVal) || isNaN(bustVal) || isNaN(waistVal) || isNaN(hipsVal)) {
            setDescription("Please enter valid measurements.");
            return;
        }

        const shoulderPercentDiff = Math.abs(shoulderVal - hipsVal) / ((shoulderVal + hipsVal) / 2) * 100;
        const waistPercentDiff = Math.abs(waistVal - hipsVal) / hipsVal * 100;

        let bodyShapeDescription = '';

        if (shoulderPercentDiff <= 5 && waistPercentDiff <= 25) {
            bodyShapeDescription += "Rectangle";
        } else if (waistVal < (0.75 * shoulderVal) && waistVal < (0.75 * hipsVal) && shoulderPercentDiff <= 5) {
            bodyShapeDescription += "Hourglass";
            if (bustVal > hipsVal) {
                bodyShapeDescription += " (Top hourglass)"; 
            } else if (bustVal < hipsVal) {
                bodyShapeDescription += " (Bottom hourglass)"; 
            } else {
            }
        } else if (hipsVal > (shoulderVal + (shoulderVal * 0.05))) {
            bodyShapeDescription += "Triangle";
        } else if (shoulderVal > (hipsVal + (hipsVal * 0.05))) {
            bodyShapeDescription += "Inverted triangle";
        } else if (waistVal > hipsVal && shoulderVal <= (waistVal + (waistVal * 0.05))) {
            bodyShapeDescription += "Round";
        }

        setDescription(bodyShapeDescription);
    }

    return (
        <View style={{padding:10, marginTop:10}}>
            <Fontisto name="close-a" size={14} color="#caaddd" marginLeft={390}/>
            {/* ส่วนที่ 1 */}
            <View style={{ flexDirection:"column"}}>
                <Text style={{ fontSize: 18, marginLeft:18, marginTop:10, marginBottom:10, color:'#caaddd' }}>BODY SHAPE</Text>
                {/* ส่วนที่ 2 */}
                <Image style={{ width: 180, height: 180, alignSelf:'center'}} source={require("../assets/BodyShape/measure.png")} />
                {/* Shoulder input */}
                <View style={{ backgroundColor: "white", margin: 20,marginTop:20, borderRadius: 10}}>
                    <Text style={{ fontSize : 16, marginBottom:3 }}>Shoulder Size</Text>
                    <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}>* Wrap the measuring around your shoulders.</Text>
                    <View style={{ flexDirection:"row"}}>
                        <TextInput
                            style={{ fontSize : 14 , height: 35, width: 300,justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', color:'#d8d8d8', padding:10 }}
                            keyboardType="numeric"
                            placeholder="Enter shoulder size"
                            value={shoulder}
                            onChangeText={setShoulder}
                        />
                        <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
                    </View>
                </View>

                {/* Bust input */}
                <View style={{ backgroundColor: "white", margin: 20, marginTop:0, borderRadius: 10 }}>
                    <Text style={{ fontSize : 16, marginBottom:3 }}>Bust Size</Text>
                    <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}>* Wrap the measuring tape straight across your back and around the fullest part of your bust. The measuring tape should be snug, but not too tight.</Text>
                    <View style={{ flexDirection:"row"}}>
                        <TextInput
                            style={{ fontSize : 14 , height: 35, width: 300,justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', color:'#d8d8d8', padding:10 }}
                            keyboardType="numeric"
                            placeholder="Enter bust size"
                            value={bust}
                            onChangeText={setBust}
                        />
                        <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
                    </View>
                </View>

                {/* Waist input */}
                <View style={{ backgroundColor: "white", margin: 20, marginTop:0, borderRadius: 10 }}>
                    <Text style={{ fontSize : 16, marginBottom:3 }}>Waist Size</Text>
                    <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}>* Wrap the measuring tape around the smallest part of your waist, which is generally just above the belly button.</Text>
                    <View style={{ flexDirection:"row"}}>
                        <TextInput
                            style={{ fontSize : 14 , height: 35, width: 300,justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', color:'#d8d8d8', padding:10 }}
                            keyboardType="numeric"
                            placeholder="Enter waist size"
                            value={waist}
                            onChangeText={setWaist}
                        />
                        <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
                    </View>
                </View>

                {/* Hips input */}
                <View style={{ backgroundColor: "white", margin: 20, marginTop:0, borderRadius: 10 }}>
                    <Text style={{ fontSize : 16, marginBottom:3 }}>Hips Size</Text>
                    <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}>* Wrap the measuring tape around the widest part of your hip.</Text>
                    <View style={{ flexDirection:"row"}}>
                        <TextInput
                            style={{ fontSize : 14 , height: 35, width: 300,justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', color:'#d8d8d8', padding:10 }}
                            keyboardType="numeric"
                            placeholder="Enter hips size"
                            value={hips}
                            onChangeText={setHips}
                        />
                        <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
                    </View>
                </View>

                {/* Calculate button */}
                <TouchableOpacity onPress={calculateBodyShape}>
                <View style={{ width: 150, height: 50, margin: 10, backgroundColor: "#caaddd", borderRadius: 15, justifyContent:'center', alignSelf:'center', marginTop:10 }}>
                    <Text style={{ fontSize: 20, textAlign: "center", color: 'black' }}>
                    RESULT
                    </Text>
                    </View>
                </TouchableOpacity>

                {/* Display body shape description */}
                {description !== '' && (
                    <View style={{ backgroundColor: "white", borderRadius: 10 }}>
                        <Text style={{ fontSize: 16, textAlign: "center" }}>Your Body Shape: {description}</Text>
                    </View>
                )}

            </View>

        </View>
    );
}