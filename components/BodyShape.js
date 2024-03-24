import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Fontisto } from '@expo/vector-icons';

export default function BodyShape() {
    const [shoulder, setShoulder] = useState('');
    const [bust, setBust] = useState('');
    const [waist, setWaist] = useState('');
    const [hips, setHips] = useState('');
    const [description, setDescription] = useState('');
    const [shapeImage, setShapeImage] = useState(null);
    
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

        // switch (description.toLowerCase()) {
        //     case 'rectangle':
        //         setShapeImage(RectangleImage);
        //         break;
        //     case 'hourglass':
        //         setShapeImage(HourglassImage);
        //         break;
        //     case 'triangle':
        //         setShapeImage(TriangleImage);
        //         break;
        //     case 'round':
        //         setShapeImage(RoundImage);
        //         break;
        //     case 'inverted triangle':
        //         setShapeImage(InvertedTriangleImage);
        //         break;
        //     default:
        //         setShapeImage(null);
        //         break;
        // }
    }

    return (
        <View style={{padding:10}}>
            <Fontisto name="close-a" size={14} color="#caaddd" marginLeft={390}/>
            {/* ส่วนที่ 1 */}
            <View style={{ flexDirection:"column"}}>
                <Text style={{ fontSize: 18, marginLeft:18, marginTop:10, marginBottom:10, color:'#caaddd' }}>BODY SHAPE</Text>
                {/* ส่วนที่ 2 */}
                <Image style={{ width: 180, height: 180, alignSelf:'center'}} source={require("../assets/bodyShape/measure.png")} />
                {/* Shoulder input */}
                <View style={{ backgroundColor: "white", margin: 20,marginTop:20, borderRadius: 10}}>
                    <Text style={{ fontSize : 16, marginBottom:3 }}>Shoulders</Text>
                    <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}>* วัดรอบส่วนที่สูงที่สุดของไหล่</Text>
                    <View style={{ flexDirection:"row"}}>
                        <TextInput
                            style={{ fontSize : 14 , height: 35, width: 300,justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', color:'#d8d8d8', padding:10 }}
                            keyboardType="numeric"
                            placeholder="Enter your shoulders size"
                            value={shoulder}
                            onChangeText={setShoulder}
                        />
                        <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
                    </View>
                </View>

                {/* Bust input */}
                <View style={{ backgroundColor: "white", margin: 20, marginTop:0, borderRadius: 10 }}>
                    <Text style={{ fontSize : 16, marginBottom:3 }}>Bust</Text>
                    <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}>* วัดรอบส่วนที่กว้างที่สุดของหน้าอก ควรจะกระชับ แต่ไม่แน่นจนเกินไป</Text>
                    <View style={{ flexDirection:"row"}}>
                        <TextInput
                            style={{ fontSize : 14 , height: 35, width: 300,justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', color:'#d8d8d8', padding:10 }}
                            keyboardType="numeric"
                            placeholder="Enter your bust size"
                            value={bust}
                            onChangeText={setBust}
                        />
                        <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
                    </View>
                </View>

                {/* Waist input */}
                <View style={{ backgroundColor: "white", margin: 20, marginTop:0, borderRadius: 10 }}>
                    <Text style={{ fontSize : 16, marginBottom:3 }}>Waist</Text>
                    <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}>* วัดรอบส่วนที่เล็กที่สุดของเอว โดยทั่วไปจะอยู่เหนือสะดือ แต่อยู่ใต้ซี่โครง</Text>
                    <View style={{ flexDirection:"row"}}>
                        <TextInput
                            style={{ fontSize : 14 , height: 35, width: 300,justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', color:'#d8d8d8', padding:10 }}
                            keyboardType="numeric"
                            placeholder="Enter your waist size"
                            value={waist}
                            onChangeText={setWaist}
                        />
                        <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
                    </View>
                </View>

                {/* Hips input */}
                <View style={{ backgroundColor: "white", margin: 20, marginTop:0, borderRadius: 10 }}>
                    <Text style={{ fontSize : 16, marginBottom:3 }}>Hips</Text>
                    <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}> * วัดรอบส่วนที่กว้างที่สุดของสะโพก</Text>
                    <View style={{ flexDirection:"row"}}>
                        <TextInput
                            style={{ fontSize : 14 , height: 35, width: 300,justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', color:'#d8d8d8', padding:10 }}
                            keyboardType="numeric"
                            placeholder="Enter your hips size"
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
                        {/* Display shape image if available */}
                        {shapeImage && (
                            <Image style={{ width: 100, height: 100, alignSelf: 'center' }} source={shapeImage} />
                        )}
                    </View>
                )}

            </View>

        </View>
    );
}