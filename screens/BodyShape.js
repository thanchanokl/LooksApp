import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

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
        <View>
            {/* Shoulder input */}
            <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10 }}>
                <Text style={{ fontSize: 20 }}>Shoulder Size</Text>
                <TextInput
                    style={{ fontSize: 20 }}
                    keyboardType="numeric"
                    placeholder="Enter shoulder size"
                    value={shoulder}
                    onChangeText={setShoulder}
                />
            </View>

            {/* Bust input */}
            <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10 }}>
                <Text style={{ fontSize: 20 }}>Bust Size</Text>
                <TextInput
                    style={{ fontSize: 20 }}
                    keyboardType="numeric"
                    placeholder="Enter bust size"
                    value={bust}
                    onChangeText={setBust}
                />
            </View>

            {/* Waist input */}
            <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10 }}>
                <Text style={{ fontSize: 20 }}>Waist Size</Text>
                <TextInput
                    style={{ fontSize: 20 }}
                    keyboardType="numeric"
                    placeholder="Enter waist size"
                    value={waist}
                    onChangeText={setWaist}
                />
            </View>

            {/* Hips input */}
            <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10 }}>
                <Text style={{ fontSize: 20 }}>Hips Size</Text>
                <TextInput
                    style={{ fontSize: 20 }}
                    keyboardType="numeric"
                    placeholder="Enter hips size"
                    value={hips}
                    onChangeText={setHips}
                />
            </View>

            {/* Calculate button */}
            <TouchableOpacity onPress={calculateBodyShape}>
                <View style={{ padding: 20, backgroundColor: "#CAADDD", borderRadius: 40, marginVertical: 10 }}>
                    <Text style={{ fontSize: 20, textAlign: "center", color: 'black' }}>
                        Calculate Body Shape
                    </Text>
                </View>
            </TouchableOpacity>

            {/* Display body shape description */}
            {description !== '' && (
                <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>Your Body Shape: {description}</Text>
                </View>
            )}

            
        </View>
    );
}